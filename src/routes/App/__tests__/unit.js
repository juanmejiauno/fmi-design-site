/* eslint-disable dot-notation, quote-props */
import React from 'react';
import { mount, render } from 'enzyme';
import App from 'routes/App';

function ChildComponent() {
  return (
    <div className="js-child" />
  );
}

describe('App Component', () => {
  it('should render children', () => {
    const wrapper = mount(<App><ChildComponent /></App>);
    const child = wrapper.find('.js-child');

    expect(child.length).to.equal(1);
  });

  it('should set tabindex="-1" on #main-content to allow focusing with js for to make page transitions accessible', () => {
    const wrapper = mount(<App />);
    const main = wrapper.find('#main-content');

    expect(main.node.tabIndex).to.equal(-1);
  });

  it('should have page annoucer to announce route changes for screen readers', () => {
    const wrapper = render(<App />);
    const announcer = wrapper.find('.js-page-announcer');

    expect(announcer.attr('aria-live')).to.equal('polite');
  });

  it('should update announcer text when route component updates', () => {
    const wrapper = mount(<App />);
    const announcer = wrapper.find('.js-page-announcer');

    expect(announcer.text()).to.equal('');

    document.title = 'Swamp Hen';
    wrapper.update();

    expect(announcer.node.innerText).to.equal('Swamp Hen');
  });

  it('should render a ScrollController', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('ScrollController')).to.have.length(1);
  });

  it('calls componentDidMount', () => {
    const spy = sinon.spy(App.prototype, 'componentDidMount');
    mount(<App />);

    expect(spy.calledOnce).to.equal(true);
  });

  it('should delete window[__PRELOADED_DATA__] in componentDidMount', () => {
    global.window = { '__PRELOADED_DATA__': true };
    const app = new App({});

    expect(window).to.have.property('__PRELOADED_DATA__');

    app.componentDidMount();

    expect(window).to.not.have.property('__PRELOADED_DATA__');
  });
});
