/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import routeWrapper from 'lib/route-wrapper';

import PageHeader from 'components/PageHeader';


const openTab = (e, tab) => {
  let i;
  const target = e.currentTarget;

  const tabcontent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabcontent.length; i += 1) {
    tabcontent[i].className = tabcontent[i].className.replace(' active', '');
  }

  const tablinks = document.getElementsByClassName('tab');
  for (i = 0; i < tablinks.length; i += 1) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(tab) ? document.getElementById(tab).className += ' active' : null;
  target.className += ' active';
};

class Typography extends Component {
  render() {
    return (
      <div className="typography base-layout--pad-bottom">
        <div className="base-layout layout-content">
          <div className="typography-page-header">
            <PageHeader preheading={'Typhographic Styles'} heading={'Typography'} />
          </div>

          <div className="content-sidekick overlap">
            <div className="content__text">
              <span className="content__text-inner">
                <h3>Typography can be one of the most nuanced parts of a brand. </h3>
                Given the breadth of use cases that the Foundation Medicine brand needs to cover, type can be a particularly challenging aspect to master;  However whether promotional or functional, from print, digital or environmental there are three main typefaces: GT Sectra, Gotham & Whitney.              </span>
            </div>
            <div className="content__image">
              <img src="../img/designprinciples/IMG_2154.png" alt="" />
            </div>
          </div>

          <div className="separator" />

          <div className="content__text">
            <div className="content__text-inner">
              <h3>Our typographic styles help to further define tone as well as visual identity.</h3>
              The visual and graphic quality of the brand typography begins to communicate our brand personality before even forming the letters into words. The typographic system is both contemporary and warm, reflecting the way we see ourselves as pioneering and compassionate. The primary combination of our serif and sans-serif type families become foundational pieces of the visual identity.
            </div>
          </div>

          <div className="separator slate-lt" />

          <div className="content__text font gotham">
            <h3 className="content__text-inner-pre-title">PRIMARY SANS-SERIF: GOTHAM</h3>
            <h2 className="content__text-inner-title">Gotham, <span className={'medium'}>MEDIUM</span>, <span className={'bold'}>BOLD</span> and <span className={'bold italic'}>BOLD ITALIC</span></h2>
            <h3 className="content__text-inner-sub-title">Gotham is developed by Hoefler & Co.</h3>
            <a href={'/'} className={'license'}>Learn more or purchase licenses here.</a>
            <span className="content__text-inner-text">
              <span>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
              <span className={'bold'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
              <span className={'medium'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
              <span className={'bold italic'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
            </span>
          </div>

          <div className="separator slate-lt" />

          <div className="content__text font sectra">
            <h3 className="content__text-inner-pre-title">PRIMARY SERIF: GT SECTRA</h3>
            <h2 className="content__text-inner-title">GT Sectra, REGULAR, <span className={'italic'}>REGULAR ITALIC</span>, <span className={'bold'}>BOLD</span>, and <span className={'bold italic'}>BOLD ITALIC</span></h2>
            <h3 className="content__text-inner-sub-title">GT Sectra is developed by Grilli Type.</h3>
            <a href={'/'} className={'license'}>Learn more or purchase licenses here.</a>
            <span className="content__text-inner-text">
              <span>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
              <span className={'bold'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
              <span className={'italic'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
              <span className={'bold italic'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
            </span>
          </div>

          <div className="separator slate-lt" />

          <div className="content__text font whitney">
            <h3 className="content__text-inner-pre-title">WEB FONT SANS-SERIF: WHITNEY SSM</h3>
            <h2 className="content__text-inner-title">Whitney SSm, BOOK, <span className={'medium'}>MEDIUM</span> and <span className={'semi-bold'}>SEMI-BOLD</span></h2>
            <h3 className="content__text-inner-sub-title">Whitney SSm is developed by Hoefler & Co.</h3>
            <a href={'/'} className={'license'}>Learn more or purchase licenses here.</a>
            <span className="content__text-inner-text">
              <span>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
              <span className={'semi-bold'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
              <span className={'medium'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
            </span>
          </div>

          <div className="separator" />

          <div className="content-sidekick color-range">
            <div className="content__text">
              <div className="content__text-inner">
                <h3>Legibility and consistency in treatment of brand typefaces is key to the success of our visual language.</h3>
                Refer to our typographic styles guide when utilizing the brand typefaces across all media: print, web, tech product, etc.
              </div>
            </div>

            <div className="content__tab">
              <div className="tab-panel">
                <button className="tab" onClick={(evt) => { openTab(evt, 'promotional'); }}>PROMOTIONAL</button>
                <button className="tab" onClick={(evt) => { openTab(evt, 'functional'); }}>FUNCTIONAL</button>
              </div>

              <div id="promotional" className="tab-content">
                promotional
              </div>

              <div id="functional" className="tab-content">
                functional
              </div>
            </div>

          </div>

        </div>
      </div>);
  }
}

export default routeWrapper(Typography);
