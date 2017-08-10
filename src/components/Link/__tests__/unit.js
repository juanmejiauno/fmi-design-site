import { shallow } from 'enzyme';
import React from 'react';
import Link, { isInternalUrl } from 'components/Link';


describe('Link', () => {
  it('should use React Router for internal urls', () => {
    const wrapper = shallow(<Link to={'/foo/bar'} />);
    expect(wrapper.find('Link')).to.have.length(1);
    expect(wrapper.find('a')).to.have.length(0);
  });

  it('should use plain ol\' anchors for external urls', () => {
    const wrapper = shallow(<Link to={'https://example.com'} />);
    expect(wrapper.find('a')).to.have.length(1);
    expect(wrapper.find('Link')).to.have.length(0);
  });

  it('should use plain ol\' anchors for mailto links', () => {
    const wrapper = shallow(<Link to={'mailto:foo@example.com'} />);
    expect(wrapper.find('a')).to.have.length(1);
    expect(wrapper.find('Link')).to.have.length(0);
  });

  it('should use plain ol\' anchors for tel links', () => {
    const wrapper = shallow(<Link to={'tel:867-5309'} />);
    expect(wrapper.find('a')).to.have.length(1);
    expect(wrapper.find('Link')).to.have.length(0);
  });

  it('should pass through extra props', () => {
    const extraProps = { foo: 'bar' };
    const wrapper = shallow(<Link to={'/foo/bar'} {...extraProps} />);
    expect(wrapper.props()).to.include(extraProps);
  });

  it('should render children', () => {
    const children = 'Foobar';
    const wrapper = shallow(<Link to={'/foo/bar'}>{children}</Link>);
    expect(wrapper.children().text()).to.equal(children);
  });

  it('should support passing urls via `href`', () => {
    const wrapper = shallow(<Link href={'/foo/bar'} />);
    expect(wrapper.type()).to.not.be.null;
  });

  it('should be null if no `href` or `to` prop is passed', () => {
    const wrapper = shallow(<Link />);
    expect(wrapper.type()).to.be.null;
  });
});

describe('isInternalUrl', () => {
  beforeEach(() => {
    process.env.siteUrl = 'http://localhost:1234';
  });

  it('should be true for root relative links', () => {
    expect(isInternalUrl('/foo/bar')).to.equal(true);
  });

  it('should be true for relative links', () => {
    expect(isInternalUrl('foo/bar')).to.equal(true);
  });

  it('should be true for absolute links within siteUrl', () => {
    expect(isInternalUrl('http://localhost:1234/foo/bar')).to.equal(true);
  });

  it('should be false for absolute links outside of siteUrl', () => {
    expect(isInternalUrl('http://foo.com')).to.equal(false);
  });

  it('should be false for absolute https links outside of siteUrl', () => {
    expect(isInternalUrl('https://foo.com')).to.equal(false);
  });

  it('should be false for protocol relative links outside of siteUrl', () => {
    expect(isInternalUrl('//foo.com')).to.equal(false);
  });
});
