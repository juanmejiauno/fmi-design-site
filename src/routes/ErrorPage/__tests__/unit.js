import React from 'react';
import { mount } from 'enzyme';
import ErrorPage from 'routes/ErrorPage';

describe('Error Page Component', () => {
  it('should render 404, Not Found by default', () => {
    const wrapper = mount(<ErrorPage />);
    const msg = wrapper.find('.js-err-msg').text().trim();
    const status = wrapper.find('.js-err-status').text().trim();

    expect(msg).to.equal('Not Found');
    expect(status).to.equal('404');
  });

  it('should render status passed in as props', () => {
    const wrapper = mount(<ErrorPage status="401" />);
    const status = wrapper.find('.js-err-status').text().trim();

    expect(status).to.equal('401');
  });

  it('should render status from route.status instead of status from props', () => {
    const route = { status: 402 };
    const wrapper = mount(<ErrorPage status="401" route={route} />);
    const status = wrapper.find('.js-err-status').text().trim();

    expect(status).to.equal('402');
  });

  it('should render status from location.query.status instead of status from props or route', () => {
    const route = { status: 402 };
    const location = { query: { status: 403 } };
    const wrapper = mount(<ErrorPage status="401" route={route} location={location} />);
    const status = wrapper.find('.js-err-status').text().trim();

    expect(status).to.equal('403');
  });

  it('should render message passed in as props', () => {
    const wrapper = mount(<ErrorPage message="401" />);
    const message = wrapper.find('.js-err-msg').text().trim();

    expect(message).to.equal('401');
  });

  it('should render message from route.message instead of message from props', () => {
    const route = { message: 402 };
    const wrapper = mount(<ErrorPage message="401" route={route} />);
    const message = wrapper.find('.js-err-msg').text().trim();

    expect(message).to.equal('402');
  });

  it('should render message from location.query.message instead of message from props or route', () => {
    const route = { message: 402 };
    const location = { query: { message: 403 } };
    const wrapper = mount(<ErrorPage message="401" route={route} location={location} />);
    const message = wrapper.find('.js-err-msg').text().trim();

    expect(message).to.equal('403');
  });
});
