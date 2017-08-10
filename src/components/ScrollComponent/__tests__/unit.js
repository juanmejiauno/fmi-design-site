import { mount } from 'enzyme';
import React from 'react';

import ScrollComponent from 'components/ScrollComponent';
import ScrollMagic from 'ScrollMagic';

const scrollMagicController = new ScrollMagic.Controller();
const context = { scrollMagicController };

describe('ScrollComponent', () => {
  it('calls componentDidMount hook', () => {
    const spy = sinon.spy(ScrollComponent.prototype, 'componentDidMount');
    mount(<ScrollComponent />);

    expect(spy.calledOnce).to.equal(true);
  });

  it('calls componentWillUnmount calls this.destroyScene', () => {
    const unmountSpy = sinon.spy(ScrollComponent.prototype, 'componentWillUnmount');
    const wrapper = mount(<ScrollComponent />);
    const destroySpy = sinon.spy(wrapper.instance(), 'destroyScene');

    wrapper.unmount();

    expect(unmountSpy.calledOnce).to.equal(true);
    expect(destroySpy.calledOnce).to.equal(true);
  });

  it('destroyScene calls scene.destroy and removes reference to this.scene', () => {
    const wrapper = mount(<ScrollComponent />);
    const instance = wrapper.instance();
    const destroySpy = sinon.spy(instance.scene, 'destroy');

    instance.destroyScene();

    expect(instance.scene).to.equal(null);
    expect(destroySpy.calledOnce).to.equal(true);
  });

  it('componentDidMount calls buildScene', () => {
    const spy = sinon.spy(ScrollComponent.prototype, 'buildScene');
    const component = new ScrollComponent({});
    component.componentDidMount();

    expect(spy.calledOnce).to.equal(true);
  });

  it('sets this.triggerElement', () => {
    const wrapper = mount(<ScrollComponent />);

    expect(wrapper.instance().triggerElement).to.be.ok;
  });

  it('renders children', () => {
    const wrapper = mount((<ScrollComponent><div className="js-child" /></ScrollComponent>));

    expect(wrapper.find('.js-child')).to.have.length(1);
  });

  it('buildScene returns instance of ScrollMagic.Scene', () => {
    const component = new ScrollComponent({});
    const scene = component.buildScene();

    expect(scene).to.be.instanceOf(ScrollMagic.Scene);
  });

  it('sets this.scene to be instance of ScrollMagic.Scene', () => {
    const wrapper = mount(<ScrollComponent />);

    expect(wrapper.instance().scene).to.be.instanceOf(ScrollMagic.Scene);
  });

  it('requires contextTypes scrollMagicController', () => {
    expect(ScrollComponent.contextTypes).to.have.property('scrollMagicController');
    expect(ScrollComponent.contextTypes.scrollMagicController).to.have.property('isRequired');
  });
});

// TODO test addIndicators setClassToggle, and opther ScrollMagic API integrations
describe('ScrollComponent scene options', () => {
  it('merges options with defaults and passes into ScrollMagic.Scene', () => {
    const spy = sinon.spy(ScrollMagic, 'Scene');
    const options = { loglevel: 2 };
    const wrapper = mount(<ScrollComponent options={options} />, { context });
    const defaults = { triggerElement: wrapper.instance().triggerElement };
    const merged = Object.assign(defaults, options);

    expect(spy.calledWith(merged)).to.equal(true);
  });
});
