/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { mount } from 'enzyme';
import routeWrapper from 'lib/route-wrapper';
import { stubConsoleError, restoreConsoleError } from '__tests__/lib/stub-console-error';

class ComponentToExtend extends Component {
  render() {
    return (
      <span className="js-test-component">Grey</span>
    );
  }
}

const routeWithProps = {
  data: {
    reqProp: 'Brady',
  },
};

const routeWithoutProps = {
  data: {},
};

const router = {
  replace() {
    return true;
  },
};

const options = { requiredProps: ['reqProp'] };


describe('route-wrapper function', () => {
  beforeEach(() => {
    stubConsoleError();
    global.FIRST_PAGE_LOAD = false;
  });

  afterEach(() => {
    restoreConsoleError();
  });

  it('should extend component passed as first argument', () => {
    const WrappedComponent = routeWrapper(ComponentToExtend);
    const instance = new WrappedComponent();

    expect(instance).to.be.instanceOf(ComponentToExtend);
  });

  it('should call componentWillMount', () => {
    const WrappedComponent = routeWrapper(ComponentToExtend);
    const spy = sinon.spy(WrappedComponent.prototype, 'componentWillMount');

    mount(<WrappedComponent route={routeWithProps} />);

    expect(spy.calledOnce).to.equal(true);
    spy.restore();
  });

  it('should call componentDidMount', () => {
    const WrappedComponent = routeWrapper(ComponentToExtend);
    const spy = sinon.spy(WrappedComponent.prototype, 'componentDidMount');

    mount(<WrappedComponent route={routeWithProps} />);

    expect(spy.calledOnce).to.equal(true);
    spy.restore();
  });

  it('should call focusOnMain if global.FIRST_PAGE_LOAD is truthy', () => {
    const WrappedComponent = routeWrapper(ComponentToExtend);
    const spy = sinon.spy(WrappedComponent.prototype, 'focusOnMain');
    global.FIRST_PAGE_LOAD = true;

    mount(<WrappedComponent route={routeWithProps} />);

    expect(spy.calledOnce).to.equal(true);
    spy.restore();
  });

  it('should not call focusOnMain if global.FIRST_PAGE_LOAD is falsy', () => {
    const WrappedComponent = routeWrapper(ComponentToExtend);
    const spy = sinon.spy(WrappedComponent.prototype, 'focusOnMain');

    mount(<WrappedComponent route={routeWithProps} />);

    expect(spy.notCalled).to.equal(true);
    spy.restore();
  });

  it('should call props.router.replace("/error") if required props are missing', () => {
    const WrappedComponent = routeWrapper(ComponentToExtend, options);
    const spy = sinon.spy(router, 'replace');

    mount(<WrappedComponent router={router} />);

    expect(spy.calledWith('/error')).to.equal(true);
    spy.restore();
  });

  it('should not call props.router if required props are present', () => {
    const WrappedComponent = routeWrapper(ComponentToExtend, options);
    const spy = sinon.spy(router, 'replace');

    mount(<WrappedComponent router={router} route={routeWithProps} />);

    expect(spy.notCalled).to.equal(true);
    spy.restore();
  });

  it('should render null if requiredProps are missing', () => {
    const WrappedComponent = routeWrapper(ComponentToExtend, options);
    const wrapper = mount(<WrappedComponent router={router} route={routeWithoutProps} />);

    expect(wrapper.html()).to.equal(null);
    expect(wrapper.find('.js-test-component')).to.have.length(0);
  });

  it('should render parent markup if requiredProps are passed in', () => {
    const WrappedComponent = routeWrapper(ComponentToExtend, options);
    const wrapper = mount(<WrappedComponent router={router} route={routeWithProps} />);

    expect(wrapper.find('.js-test-component')).to.have.length(1);
  });
});
