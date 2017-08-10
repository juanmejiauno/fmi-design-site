/* eslint-disable global-require */
import { mount } from 'enzyme';
import React from 'react';

import ScrollController from 'components/ScrollController';

describe('ScrollController component for ScrollMagic', () => {
  it('sets componentWillMount hook', () => {
    sinon.spy(ScrollController.prototype, 'componentWillMount');
    mount(<ScrollController />);
    expect(ScrollController.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('sets this.controller to an instance of ScrollMagic.Controller', () => {
    const ScrollMagic = require('ScrollMagic');
    const wrapper = mount(<ScrollController />);
    const controller = wrapper.instance().controller;

    expect(controller).to.be.ok;
    expect(controller).to.be.instanceOf(ScrollMagic.Controller);
  });

  it('renders children', () => {
    const wrapper = mount((<ScrollController><div className="js-child" /></ScrollController>));

    expect(wrapper.find('.js-child')).to.have.length(1);
  });

  it('passes this.controller as context.scrollMagicController', () => {
    const ChildComponent = () => (<div />);
    ChildComponent.contextTypes = { scrollMagicController: React.PropTypes.object };

    const wrapper = mount((<ScrollController><ChildComponent /></ScrollController>));

    const childController = wrapper.find('ChildComponent').node.context.scrollMagicController;

    expect(childController).to.equal(wrapper.instance().controller);
  });
});
