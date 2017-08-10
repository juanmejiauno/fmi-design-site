import { mount } from 'enzyme';

import React from 'react';
import propIsRequired from '__tests__/lib/prop-is-required';
import { stubConsoleError, restoreConsoleError } from '__tests__/lib/stub-console-error';

import SocialShares from 'components/SocialShares';
import AriaShareButton from 'components/SocialShares/AriaShareButton';

describe('SocialShares component', () => {
  it('should render AriaShareButtons for facebook, googleplus, linkedin, twitter', () => {
    const wrapper = mount(<SocialShares title="title" />);
    const expectedPlatforms = [
      'GooglePlus',
      'Twitter',
      'Linkedin',
      'Facebook',
    ].sort();

    const buttons = wrapper.find('AriaShareButton');

    const platformsFound = buttons.map((platform) => {
      return platform.props().platform;
    }).sort();

    expect(platformsFound).to.deep.equal(expectedPlatforms);
  });

  it('should require title prop', () => {
    expect(propIsRequired(SocialShares, 'title')).to.be.true;
  });
});

describe('AriaShareButton component', () => {
  beforeEach(() => {
    stubConsoleError();
  });

  afterEach(() => {
    restoreConsoleError();
  });

  it('should render null if platform not passed as props', () => {
    const wrapper = mount(<AriaShareButton />);

    expect(wrapper.html()).to.equal(null);
  });

  it('should require title & platform prop', () => {
    expect(propIsRequired(AriaShareButton, 'title')).to.be.true;
    expect(propIsRequired(AriaShareButton, 'platform')).to.be.true;
  });

  it('should render a react-share component and icon from a given platform', () => {
    const wrapper = mount(<AriaShareButton platform="Facebook" title="Share Title" />);

    const shareButton = wrapper.find('ShareButton');

    expect(shareButton).to.be.ok;
    expect(shareButton.props().network).to.equal('facebook');
    expect(shareButton.props().title).to.equal('Share Title');
  });
});
