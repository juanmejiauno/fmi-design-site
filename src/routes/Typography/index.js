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
              <img src="../img/typography/Header Image.png" alt="" />
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

          <div className="content-sidekick legibility">
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
                <div className="print-type">
                  <div className="content__text">
                    <div className="content__text-inner">
                      <h3>Print Type Styles</h3>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">HEADER 1</h3>
                            <h2 className="content__text-inner-title header1">This is a Document Header</h2>
                            <h3 className="content__text-inner-sub-title">GTSectra-Bold Italic / 22 pt / 0 pt Kern / FM Fire</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Fire@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">SUBHEAD 1</h3>
                            <h2 className="content__text-inner-title subhead1">This is a Document SubHead</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Bold / 12 pt / 0 pt Kern / FM Fire</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Fire@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">HEADER 2</h3>
                            <h2 className="content__text-inner-title header2">This is a Section Header or Header 2</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Medium / 12 pt / 0 pt Kern / FM Slate</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">SUBHEAD 2</h3>
                            <h2 className="content__text-inner-title subhead2">This is a Section Subhead or Subhead 2</h2>
                            <h3 className="content__text-inner-sub-title">
                              Gotham-Medium / 9.5 pt / 0 pt Kern / FM Slate
                              Indented 0.125” alongside FM Mint 1 pt stroke section component
                            </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                            <img src="../img/colors/swatches solid all/swatch FM Mint@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">HEADER 3</h3>
                            <h2 className="content__text-inner-title header3">This is a Closing Header or Header 3</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Bold / 9 pt / 0 pt Kern / FM Fire </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Fire@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">BODY COPY</h3>
                            <h2 className="content__text-inner-title body-copy">
                              Verspient. Tem quam re repererit hilluptati omnis re, evelige nihiliquo magnimi liscidest et as asit quis alitas atquia doluptat fuga. Mus quatent ionsequi quo omnimol enitis quiatiu stiberc hilitem porestrum est, quis venectendis am qui unturem abo. Et voluptatum hiliquo stioreium aliquas incider umendi nimagnis eum ipsapel estem aut aliquam eatenimos et et am, idebitat eruptatur.
                            </h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Book / 9 pt / 0 pt Kern / 12 pt Leading / FM Slate</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">REFERENCE/NOTE/FOOTNOTE</h3>
                            <h2 className="content__text-inner-title ref">
                              Reference:<br />
                              Verspient. Tem quam re repererit hilluptati omnis re, evelige nihiliquo magnimi liscidest et as asit quis alitas atquia doluptat fuga. Mus quatent ionsequi quo omnimol enitis quiatiu stiberc hilitem porestrum est.
                            </h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Book / 6 pt / 0 pt Kern / 8 pt Leading / FM Slate LT</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate LT@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="separator" />

                <div className="print-document">
                  <div className="content__text">
                    <div className="content__text-inner">
                      <h3>Print Document Components</h3>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">PATTERN USAGE</h3>
                            <div className="content__image pattern-usage">
                              <img src="../img/typography/pattern_example-03.png" alt="" />
                            </div>
                            <h3 className="content__text-inner-sub-title">
                              0.5 pt line-weight / FM Slate LT / 20% opacity or tint<br />
                              Does not rise above 8.875” line on a standard letter size document<br />
                              Maintains consistency in size and placement across documents<br />
                              Implemented as a page footer graphic element
                            </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate LT@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">STANDARD FOOTER WITH LOGO</h3>
                            <div className="content__image standard-footer">
                              <img src="../img/typography/Group 4.png" alt="" />
                            </div>
                            <h3 className="content__text-inner-sub-title">
                              Corporate logo (horizontal lockup) + Footer:<br />
                              Gotham-Book / 6 pt / 0 pt Kern / 8 pt leading / FM Slate<br />
                              Left-justified to the right of the FM Slate logomark, giving minimum clearspace between footer copy and the logomark
                            </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">TO LEARN MORE / TO ORDER</h3>
                            <div className="content__image to-learn">
                              <img src="../img/typography/Page 1.png" alt="" />
                            </div>
                            <h3 className="content__text-inner-sub-title">
                              Header text block: 0.225” height / FM Fire<br />
                              Header: Gotham-Bold / 8 pt / 40 pt Kern / White or knock-out / All-caps<br />
                              Text block: 20% tint FM Slate LT<br />
                              Body: Gotham-Medium / 7.5 pt / 0 pt Kern / 9 pt Leading / FM Slate<br />
                              Gutter: 0.125”
                            </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Fire@2x.png" alt="" />
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                            <img src="../img/colors/swatches solid all/swatch FM Slate LT@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="separator" />

                <div className="web-type">
                  <div className="content__text">
                    <div className="content__text-inner">
                      <h3>Web Type Styles</h3>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">Navigation:<br />Unselected</h3>
                            <h2 className="content__text-inner-title web navigation-un">NAVIGATION</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Bold / 12.5 px / 22 px Leading / #A2ADB7 / All-caps</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch color-solid-lt-grey-20@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">Navigation:<br />Selected</h3>
                            <h2 className="content__text-inner-title web navigation-sel">NAVIGATION</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Bold / 12.5 px / 22 px Leading / #435363 / All-caps</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">HEADER 1</h3>
                            <h2 className="content__text-inner-title web header1">Header 1</h2>
                            <h3 className="content__text-inner-sub-title">
                              GT Sectra-Book / 84 px / 102 px Leading / #435363<br />
                              FM Fire 1 px stroke underline
                            </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                            <img src="../img/colors/swatches solid all/swatch FM Fire@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">HEADER 2</h3>
                            <h2 className="content__text-inner-title web header2">Header 2</h2>
                            <h3 className="content__text-inner-sub-title">GT Sectra-Book / 56 px / 68 px Leading / #35A09C</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch color-green--dark@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">HEADER 3</h3>
                            <h2 className="content__text-inner-title web header3"><span>Header 3,</span> Header 3</h2>
                            <h3 className="content__text-inner-sub-title">GT Sectra-Book / 36 px / 50 px Leading / #FF4C00 or #435363</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Fire@2x.png" alt="" />
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">CAPTION 1</h3>
                            <h2 className="content__text-inner-title web caption1">This is a caption</h2>
                            <h3 className="content__text-inner-sub-title">GT Sectra-Book / 36 px / 42 px Leading / #323F4A</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate DK @2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">BODY 1</h3>
                            <h2 className="content__text-inner-title web body1">Tem quam re repererit hilluptati omnis re, evelige nihiliquo magnimi liscidest  asit quis atquia doluptat.</h2>
                            <h3 className="content__text-inner-sub-title">GT Sectra-Book / 36 px / 40 px Leading / #435363</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">BODY 2</h3>
                            <h2 className="content__text-inner-title web body2"><span>Tem quam re repererit hilluptati omnis re,</span> evelige nihiliquo magnimi liscidest as asit quis alitas atquia doluptat.</h2>
                            <h3 className="content__text-inner-sub-title">
                              Gotham-Book / 14 px / 22 px Leading / #435363<br />
                              Gotham-Medium / 14 px / 22 px Leading / #435363
                            </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">BODY 3</h3>
                            <h2 className="content__text-inner-title web body3">Tem quam re repererit hilluptati omnis re, evelige nihiliquo magnimi liscidest as asit quis alitas atquia doluptat.</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Book / 14 px / 24 px Leading / #8B99A6</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate LT@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">BODY 4</h3>
                            <h2 className="content__text-inner-title web body4">Tem quam re repererit hilluptati omnis re, evelige nihiliquo magnimi liscidest as asit quis alitas atquia doluptat.</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Book / 14 px / 24 px Leading / #323F4A</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate DK @2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">BODY 5</h3>
                            <h2 className="content__text-inner-title web body5">Tem quam re repererit hilluptati omnis re, evelige nihiliquo magnimi liscidest as asit quis alitas atquia doluptat.</h2>
                            <h3 className="content__text-inner-sub-title">GT Sectra-Book / 18 px / 30 px Leading / #8B99A6</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate LT@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">TABLE HEADER</h3>
                            <h2 className="content__text-inner-title web table-header">This is a Table Header</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Medium / 13 px / 16 px Leading / #8B99A6</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate LT@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">TABLE CONTENT</h3>
                            <h2 className="content__text-inner-title web table-content">This is table content</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Medium / 12 px / 22 px Leading / #323F4A</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate DK @2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="separator" />

                <div className="content__row consistency">
                  <div className="content__row-title">
                    <div className="content__text">
                      <span className="content__text-inner">
                        <h3 className="content__text-inner-title">Ensure consistency type style usage throughout materials.</h3>
                        <span className="content__text-inner-text">We maintain some overlap in our promotional and functional type styles to find constancy across platforms, but where the styles differ the distinction is important. The styles provide options to offer variety within the typographic guides.</span>
                      </span>
                    </div>
                  </div>
                  <div className="content__row-body">
                    <div className="content-sidekick print">
                      <div className="content__image">
                        <img src="../img/typography/Promotional print.png" alt="" />
                      </div>
                      <div className="content__text">
                        <span className="content__text-inner">
                          <h3>PRINT USE-CASE</h3>
                          The sell sheet template follows the promotional type styles for print, with the most defining aspect being the Header 1 treatment. This also includes promotion-specific components, such as the Learn More and To Order sections.
                        </span>
                      </div>
                    </div>
                    <div className="content-sidekick web">
                      <div className="content__image">
                        <img src="../img/typography/Promotional web.png" alt="" />
                      </div>
                      <div className="content__text">
                        <span className="content__text-inner">
                          <h3>WEB USE-CASE</h3>
                          The corporate website utilizes the promotional type styles for web, defined largely by the variety in typographic treatments represented. Notable styles here are Header 1, Navigation and Body 2.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div id="functional" className="tab-content">
                <div className="print-type">
                  <div className="content__text">
                    <div className="content__text-inner">
                      <h3>Print Type Styles</h3>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">HEADER 1</h3>
                            <h2 className="content__text-inner-title functional header1">This is a Technical Document Header</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Bold / 22 pt / 0 pt Kern / FM Slate</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">SUBHEAD 1</h3>
                            <h2 className="content__text-inner-title subhead1">This is a Document SubHead</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Bold / 12 pt / 0 pt Kern / 20 pt Leading / FM Fire</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Fire@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">HEADER 2</h3>
                            <h2 className="content__text-inner-title header2">This is a Section Header or Header 2</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Medium / 12 pt / 0 pt Kern / FM Slate</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">SUBHEAD 2</h3>
                            <h2 className="content__text-inner-title subhead2">This is a Section Subhead or Subhead 2</h2>
                            <h3 className="content__text-inner-sub-title">
                              Gotham-Medium / 9.5 pt / 0 pt Kern / FM Slate<br />
                              Indented 0.125” alongside FM Mint 1 pt stroke section component
                            </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                            <img src="../img/colors/swatches solid all/swatch FM Mint@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">HEADER 3</h3>
                            <h2 className="content__text-inner-title functional header3">This is a Closing Header or Header 3</h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Bold / 9 pt / 0 pt Kern / FM Fire </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Fire@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">BODY COPY</h3>
                            <h2 className="content__text-inner-title body-copy">
                              Verspient. Tem quam re repererit hilluptati omnis re, evelige nihiliquo magnimi liscidest et as asit quis alitas atquia doluptat fuga. Mus quatent ionsequi quo omnimol enitis quiatiu stiberc hilitem porestrum est, quis venectendis am qui unturem abo. Et voluptatum hiliquo stioreium aliquas incider umendi nimagnis eum ipsapel estem aut aliquam eatenimos et et am, idebitat eruptatur.
                            </h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Book / 9 pt / 0 pt Kern / 12 pt Leading / FM Slate</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">REFERENCE/NOTE/FOOTNOTE</h3>
                            <h2 className="content__text-inner-title ref">
                              Reference:<br />
                              Verspient. Tem quam re repererit hilluptati omnis re, evelige nihiliquo magnimi liscidest et as asit quis alitas atquia doluptat fuga. Mus quatent ionsequi quo omnimol enitis quiatiu stiberc hilitem porestrum est.
                            </h2>
                            <h3 className="content__text-inner-sub-title">Gotham-Book / 6 pt / 0 pt Kern / 8 pt Leading / FM Slate LT</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate LT@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="separator" />

                <div className="print-document">
                  <div className="content__text">
                    <div className="content__text-inner">
                      <h3>Print Document Components</h3>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">PATTERN USAGE</h3>
                            <div className="content__image pattern-usage">
                              <img src="../img/typography/pattern_example-03.png" alt="" />
                            </div>
                            <h3 className="content__text-inner-sub-title">
                              0.5 pt line-weight / FM Slate LT / 20% opacity or tint<br />
                              Does not rise above 8.875” line on a standard letter size document<br />
                              Maintains consistency in size and placement across documents<br />
                              Implemented as a page footer graphic element
                            </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate LT@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">STANDARD FOOTER WITH LOGO</h3>
                            <div className="content__image standard-footer">
                              <img src="../img/typography/Group 4.png" alt="" />
                            </div>
                            <h3 className="content__text-inner-sub-title">
                              Corporate logo (horizontal lockup) + Footer:<br />
                              Gotham-Book / 6 pt / 0 pt Kern / 8 pt leading / FM Slate<br />
                              Left-justified to the right of the FM Slate logomark, giving minimum clearspace between footer copy and the logomark
                            </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">FIGURE HEADER</h3>
                            <h2 className="content__text-inner-title figure-header">THIS IS A FIGURE HEADER</h2>
                            <h3 className="content__text-inner-sub-title">
                              FM Slate text block: 0.15” height<br />
                              Gotham-Medium / 7 pt / 20 pt Kern / White or knock-out / All-caps
                            </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                            <img src="../img/colors/swatches solid all/swatch color-solid-white@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">IMPORTANT NOTE</h3>
                            <h2 className="content__text-inner-title important-note"><span>IMPORTANT NOTE</span> Accompanying text goes here and looks like this... Lorem ipsum dolor sit amet, consem nonummy nibh eulsmod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr.</h2>
                            <h3 className="content__text-inner-sub-title">
                              Bounding box: 0.25 pt stroke / FM Fire<br />
                              Header: Gotham-Bold / All-caps / 7 pt / 40 pt Kern / FM Fire<br />
                              Body: Gotham-Book / 7 pt / 0 pt Kern / 8.4 pt Leading / FM Fire
                            </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Fire@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="separator" />

                <div className="web-type">
                  <div className="content__text">
                    <div className="content__text-inner">
                      <h3>Web Type Styles</h3>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">Navigation:<br />Unselected</h3>
                            <h2 className="content__text-inner-title functional web navigation-un">NAVIGATION</h2>
                            <h3 className="content__text-inner-sub-title">Whitney SSm-Semibold / 11 px / #8B99A6 / All-caps</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate LT@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">Navigation:<br />Selected</h3>
                            <h2 className="content__text-inner-title functional web navigation-sel">NAVIGATION</h2>
                            <h3 className="content__text-inner-sub-title">Whitney SSm-Semibold / 11 px / #43C0B1 / All-caps</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch color-solid-teal@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">HEADER 1</h3>
                            <h2 className="content__text-inner-title functional web header1">Header 1</h2>
                            <h3 className="content__text-inner-sub-title">
                              GT Sectra-Book / 36 px / 44 px Leading / #F86323
                            </h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch color-solid-orange@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">BODY 1</h3>
                            <h2 className="content__text-inner-title functional web body1">Tem quam re repererit hilluptati omnis re, evelige nihiliquo magnimi liscidest  asit quis atquia doluptat.</h2>
                            <h3 className="content__text-inner-sub-title">Whitney SSm-Book / 14 px / 26 px Leading / #435363</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">TABLE CONTENT:<br />HEADER 1</h3>
                            <h2 className="content__text-inner-title functional web table-content1">Table content H1</h2>
                            <h3 className="content__text-inner-sub-title">Whitney SSm-Semibold / 12 px / 15 px Leading / #435363</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">TABLE CONTENT:<br />HEADER 2</h3>
                            <h2 className="content__text-inner-title functional web table-content2">Table content H2</h2>
                            <h3 className="content__text-inner-sub-title">Whitney SSm-Semibold / 12 px / 15 px Leading / #43C0B1</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch color-solid-teal@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content__row">
                    <div className="content__row-body">
                      <div className="content__row-col">
                        <div className="content-sidekick">
                          <div className="content__text">
                            <h3 className="content__text-inner-pre-title">BODY 1</h3>
                            <h2 className="content__text-inner-title functional web table-body">Table content H1</h2>
                            <h3 className="content__text-inner-sub-title">Whitney SSm-Medium / 10 px / 11 px Leading / #8B99A6</h3>
                          </div>
                          <div className="content__image">
                            <img src="../img/colors/swatches solid all/swatch FM Slate LT@2x.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="separator" />

                <div className="system-fonts">
                  <div className="content__text">
                    <div className="content__text-inner">
                      <h3 className="content__text-inner-title">System Fonts</h3>
                      <span className="content__text-inner-text">We offer an option for system fonts only to be used in cases where brand fonts are unavailable or inaccessible (ie. distributed presentation decks, etc.). These fonts should only be used as strictly needed and never on promotional print or digital materials.</span>
                    </div>
                  </div>

                  <div className="separator slate-lt" />

                  <div className="content__text font arial">
                    <h3 className="content__text-inner-pre-title">SANS-SERIF:<br />ARIAL</h3>
                    <h2 className="content__text-inner-title">Arial, <span className={'italic'}>ITALIC</span>, <span className={'bold'}>BOLD</span> and <span className={'bold italic'}>BOLD ITALIC</span></h2>
                    <h3 className="content__text-inner-sub-title">Arial is developed by Monotype Imaging.</h3>
                    <span className="content__text-inner-text">
                      <span>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
                      <span className={'bold'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
                      <span className={'italic'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
                      <span className={'bold italic'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
                    </span>
                  </div>

                  <div className="separator slate-lt" />

                  <div className="content__text font georgia">
                    <h3 className="content__text-inner-pre-title">SERIF: GEORGIA</h3>
                    <h2 className="content__text-inner-title">Georgia, <span className={'italic'}>ITALIC</span>, <span className={'bold'}>BOLD</span>, and <span className={'bold italic'}>BOLD ITALIC</span></h2>
                    <h3 className="content__text-inner-sub-title">Georgia is developed by Microsoft Typography.</h3>
                    <span className="content__text-inner-text">
                      <span>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
                      <span className={'bold'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
                      <span className={'italic'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
                      <span className={'bold italic'}>The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890</span>
                    </span>
                  </div>

                </div>

                <div className="separator" />

                <div className="content__row functional consistency">
                  <div className="content__row-title">
                    <div className="content__text">
                      <span className="content__text-inner">
                        <h3 className="content__text-inner-title">Ensure consistency type style usage throughout materials.</h3>
                        <span className="content__text-inner-text">We maintain some overlap in our promotional and functional type styles to find constancy across platforms, but where the styles differ the distinction is important. The styles provide options to offer variety within the typographic guides.</span>
                      </span>
                    </div>
                  </div>
                  <div className="content__row-body">
                    <div className="content-sidekick print">
                      <div className="content__image">
                        <img src="../img/typography/Functional print.png" alt="" />
                      </div>
                      <div className="content__text">
                        <span className="content__text-inner">
                          <h3>PRINT USE-CASE</h3>
                          As a technical document, the specimen instructions template follows the functional type styles for print, with the most defining aspect being the Header 1 treatment. This includes usage of more technical components like figure headers and important notes.
                        </span>
                      </div>
                    </div>
                    <div className="content-sidekick web">
                      <div className="content__image">
                        <img src="../img/typography/Reporting_1@2x@2x.png" alt="" />
                      </div>
                      <div className="content__text">
                        <span className="content__text-inner">
                          <h3>WEB USE-CASE</h3>
                          The patient reporting portal coheres to the functional type styles for web: as a more technical platform, type styles are paired back to essentials and optimized for user experience and interaction.
                        </span>
                      </div>
                    </div>
                    <div className="content-sidekick system">
                      <div className="content__image">
                        <img src="../img/typography/Group 3.png" alt="" />
                      </div>
                      <div className="content__text">
                        <span className="content__text-inner">
                          <h3>SYSTEM FONTS USE-CASE</h3>
                          Some applications may necessitate the usage of system fonts, such as distributed presentations or other digital templates, where brand fonts are not accessible or available. These presentation slides utilize our approved system fonts, Georgia and Arial.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>);
  }
}

export default routeWrapper(Typography);
