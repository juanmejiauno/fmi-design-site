/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import routeWrapper from 'lib/route-wrapper';

import PageHeader from 'components/PageHeader';
import ColorSwatch from 'components/ColorSwatch';
import colors from 'components/ColorSwatch/content.json';

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

  const swatches = document.querySelectorAll('.color-swatches .content-sidekick');
  for (i = 0; i < swatches.length; i += 1) {
    if (swatches[i].dataset.platforms.indexOf(tab) === -1 && tab !== 'all') {
      swatches[i].className += ' hide';
    } else {
      swatches[i].className = swatches[i].className.replace(' hide', '');
    }
  }
};

class Colors extends Component {
  render() {
    return (
      <div className="colors base-layout--pad-bottom">
        <div className="base-layout layout-content">
          <div className="colors-page-header">
            <PageHeader preheading={'Brand Palette'} heading={'Colors'} />
          </div>
          <div className="colors-page-content">
            <div className="content-sidekick color-palette">
              <div className="content__text">
                <div className="content__text-inner">
                  <h3 className="content__text-inner-title">Our color palette differentiates the brand and defines our presence in the healthcare tech space.</h3>
                  <span className="content__text-inner-text">The Foundation Medicine color palette balances black and white photography and white backgrounds with bold, warm and modern colors. In print materials, gold foil can act as an accent. Color usage should always be reflective of the overarching brand architecture: here we lay out the specifications and hierarchy for proper color usage. <a href="https://brandfolder.com/s/ouobb9-584xm8-35z9v2" target="_blank" rel="noopener noreferrer">Find our brand color assets here.</a></span>
                </div>
              </div>
              <div className="content__image">
                <img src="../img/colors/color relationship@2x.png" alt="" />
              </div>
            </div>

            <div className="separator" />

            <div className="content__row primary-colors">
              <div className="content__row-title">
                <div className="content__text">
                  <div className="content__text-inner">
                    <h3 className="content__text-inner-title">Our primary colors are FM Slate, FM Fire, and FM Sea.</h3>
                    <span className="content__text-inner-text">These three primary colors make up our signature palette. This palette is our truth. It represents visually our overarching brand architecture, with each color embodying its respective pillar: Slate stands for our Community; Fire, our Assays; Sea, our Data. This color structure must always be kept in mind when designing items particular to the different brand pillars. Color plays a pivotal role in upholding the visual communication of FMI’s brand, and if the colors are not used consistently and appropriately, that distinction an structure will be lost.</span>
                  </div>
                </div>
              </div>
              <div className="content__row-body">
                <div className="content__row-col">
                  <div className="content-sidekick">
                    <div className="content__text">
                      <span className="list-title">FM SLATE</span>
                      <ul>
                        <li><span className="slate">PMS</span> 7545 C</li>
                        <li><span className="slate">CMYK</span> 76/60/45/25</li>
                        <li><span className="slate">RGB</span> 67/83/99</li>
                        <li><span className="slate">HEX</span> #435363</li>
                      </ul>
                    </div>
                    <div className="content__image">
                      <img src="../img/colors/FM Slate@2x.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content-sidekick">
                    <div className="content__text">
                      <span className="list-title">FM FIRE</span>
                      <ul>
                        <li><span className="fire">PMS</span> 1665 C</li>
                        <li><span className="fire">CMYK</span> 0/84/100/0</li>
                        <li><span className="fire">RGB</span> 255/76/0</li>
                        <li><span className="fire">HEX</span> #FF4C00</li>
                      </ul>
                    </div>
                    <div className="content__image">
                      <img src="../img/colors/FM Fire@2x.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content-sidekick">
                    <div className="content__text">
                      <span className="list-title">FM SEA</span>
                      <ul>
                        <li><span className="sea">PMS</span> 325 C</li>
                        <li><span className="sea">CMYK</span> 53/0/23/0</li>
                        <li><span className="sea">RGB</span> 100/204/201</li>
                        <li><span className="sea">HEX</span> #64CCC9</li>
                      </ul>
                    </div>
                    <div className="content__image">
                      <img src="../img/colors/FM Sea@2x.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="separator" />

            <div className="content__row secondary-colors">
              <div className="content__row-title">
                <div className="content__text">
                  <div className="content__text-inner">
                    <h3 className="content__text-inner-title">Our secondary colors support the primary palette.</h3>
                    <span className="content__text-inner-text">The colors within the secondary palette function to complement the primary colors, and extend variety across the visual FMI brand experience. These colors are intended as accent and should never be used as prominently as (or more prominently than) any colors in the primary palette. Darker secondary colors can be used behind light typography, and lighter secondary colors may be used behind darker type or graphics.</span>
                  </div>
                </div>
              </div>
              <div className="content__row-body">
                <div className="content__row-col">
                  <div className="content-sidekick">
                    <div className="content__text">
                      <span className="list-title">FM MINT</span>
                      <ul>
                        <li><span className="slate">CMYK</span> 38/0/38/0</li>
                        <li><span className="slate">RGB</span> 160/216/179</li>
                        <li><span className="slate">HEX</span> #A0D8B3</li>
                      </ul>
                    </div>
                    <div className="content__image">
                      <img src="../img/colors/FM Mint@2x.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content-sidekick">
                    <div className="content__text">
                      <span className="list-title">FM SLATE LT</span>
                      <ul>
                        <li><span className="slate">CMYK</span> 48/33/27/1</li>
                        <li><span className="slate">RGB</span> 139/153/166</li>
                        <li><span className="slate">HEX</span> #8B99A6</li>
                      </ul>
                    </div>
                    <div className="content__image">
                      <img src="../img/colors/FM Slate LT@2x.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content-sidekick">
                    <div className="content__text">
                      <span className="list-title">FM SLATE DK</span>
                      <ul>
                        <li><span className="slate">CMYK</span> 79/64/52/42</li>
                        <li><span className="slate">RGB</span> 50/63/74</li>
                        <li><span className="slate">HEX</span> #323F4A</li>
                      </ul>
                    </div>
                    <div className="content__image">
                      <img src="../img/colors/FM Slate DK@2x.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content-sidekick">
                    <div className="content__text">
                      <span className="list-title">FM YELLOW</span>
                      <ul>
                        <li><span className="slate">CMYK</span> 8/21/65/0</li>
                        <li><span className="slate">RGB</span> 235/201/89</li>
                        <li><span className="slate">HEX</span> #EBC959</li>
                      </ul>
                    </div>
                    <div className="content__image">
                      <img src="../img/colors/FM Yellow@2x.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content-sidekick">
                    <div className="content__text">
                      <span className="list-title">FM ORANGE</span>
                      <ul>
                        <li><span className="slate">CMYK</span> 0/48/88/0</li>
                        <li><span className="slate">RGB</span> 247/151/55</li>
                        <li><span className="slate">HEX</span> #F79737</li>
                      </ul>
                    </div>
                    <div className="content__image">
                      <img src="../img/colors/FM Orange@2x.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="separator" />

            <div className="content-sidekick printed-tradeshow">
              <div className="content__text">
                <div className="content__text-inner">
                  <h3 className="content__text-inner-title">In printed and tradeshow graphics, gold can act as an accent.</h3>
                  <span className="content__text-inner-text">Gold foil or gold metallic Pantone can be used to accent graphics (like with the triangle pattern) for printed and trade show materials. As a rule, we want to use the gold accents carefully and generally avoid trying to replicate the gold foil effect in a digital setting.</span>
                </div>
              </div>
              <div className="content__row-col">
                <div className="content-sidekick">
                  <div className="content__text">
                    <span className="list-title">FM GOLD</span>
                    <ul>
                      <li><span className="slate">GOLD FOIL</span></li>
                      <li><span className="slate">PMS</span> 871 C</li>
                    </ul>
                  </div>
                  <div className="content__image">
                    <img src="../img/colors/Gold Foil@2x.png" alt="" />
                    <img src="../img/colors/FM Gold PMS871C@2x.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="content-sidekick tradeshow">
              <div className="content__image">
                <img src="../img/colors/tradeshow_usecase-06_perspective@2x.png" alt="" />
              </div>
              <div className="content__text">
                <span className="content__text-inner">
                  <h3>TRADE SHOW BOOTH WALL USE-CASE</h3>
                  Here we use the gold foil as an accent in the triangle pattern graphics for this trade show booth wall design: it brings an eye-grabbing and dynamic elegance to the booth, but doesn’t overpower the rest of the visual pieces present (ie. the Foundation Medicine logo).
                </span>
              </div>
            </div>

            <div className="separator" />

            <div className="content__row versatility">
              <div className="content__row-title">
                <div className="content__text">
                  <div className="content__text-inner">
                    <h3 className="content__text-inner-title">Versatility in color application should remain structured.</h3>
                    <span className="content__text-inner-text">Screens and tints of the brand colors can be used sparingly and with caution: they have the potential to produce pastels — something we want to strictly avoid. Versatility is important but maintaining consistency and structure is key, therefore screens or tints should be used only at 20% intervals. To prevent overuse of tinted or screened palette colors, they should only be implemented only when necessary and appropriate, such as for a light color-blocked background or triangle pattern placement that requires softened or de-emphasized visual impact. Our palette was created to be bold and warm, and all branded materials should reflect that in their color usage. Never use color-to-color or color-to-transparent gradients in graphics for branded materials. Never screen or tint FM Gold PMS 871C.</span>
                  </div>
                </div>
              </div>
              <div className="content__row-body">
                <div className="content__row-col">
                  <div className="content__text">
                    <ul>
                      <li>100%</li>
                      <li>80%</li>
                      <li>60%</li>
                      <li>40%</li>
                      <li>20%</li>
                    </ul>
                  </div>
                </div>
                <div className="content__row-col">
                  <div className="content__image">
                    <img src="../img/colors/slate screen@2x.png" alt="" />
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content__image">
                    <img src="../img/colors/fire screen@2x.png" alt="" />
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content__image">
                    <img src="../img/colors/sea screen@2x.png" alt="" />
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content__image">
                    <img src="../img/colors/mint screen@2x.png" alt="" />
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content__image">
                    <img src="../img/colors/lt slate screen@2x.png" alt="" />
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content__image">
                    <img src="../img/colors/dk slate screen@2x.png" alt="" />
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content__image">
                    <img src="../img/colors/orange screen@2x.png" alt="" />
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content__image">
                    <img src="../img/colors/yellow screen@2x.png" alt="" />
                  </div>
                </div>

              </div>
            </div>

            <div className="separator" />

            <div className="content__row color-application">
              <div className="content__row-title">
                <div className="content__text">
                  <div className="content__text-inner">
                    <h3 className="content__text-inner-title">Proper color application takes consideration.</h3>
                    <span className="content__text-inner-text">Though the colors exhibited here exist and are each important and useful pieces of the overall palette, it’s equally important to avoid certain types of applications to implement them correctly. In general, avoid using FM Fire on an FM Slate background and vice-versa. While both colors are enormous pieces of the palette, when overlapped reads as harsh and industrial, and therefore miss the mark in representing our brand personality through color as intended. This combination is particularly discouraged when applied to text. Avoid using colors from the secondary palette <em>more</em> prominently than the primary: this could potentially detract from or confuse the established brand architecture. We also never want to use the web or UI colors in print, swag, or environmental graphics; these colors are part of the palette as optimized for digital viewing and should not spill over into print. The following exhibits a few more examples of what to avoid when utilizing the color palette.</span>
                  </div>
                </div>
              </div>
              <div className="content__row-body">
                <div className="content__row-col">
                  <div className="content-sidekick">
                    <div className="content__text">
                      <span className="list-title">X – FIRE ON SLATE & SLATE ON FIRE</span>
                    </div>
                    <div className="content__image">
                      <img src="../img/colors/Fire on slate@2x.png" alt="" />
                      <img src="../img/colors/Slate on fire@2x.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content-sidekick">
                    <div className="content__text">
                      <span className="list-title">X – GRADIENTS</span>
                    </div>
                    <div className="content__image">
                      <img src="../img/colors/gradient01@2x.png" alt="" />
                      <img src="../img/colors/gradient02@2x.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="content__row-col">
                  <div className="content-sidekick">
                    <div className="content__text">
                      <span className="list-title">X – SYMBOLIC USE IN RAINBOW ORDER</span>
                    </div>
                    <div className="content__image rainbow">
                      <img src="../img/colors/rainbow@2x.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="separator" />

            <div className="content-sidekick color-range">
              <div className="content__text">
                <div className="content__text-inner">
                  <h3 className="content__text-inner-title">Our expanded color range allows for palette usability across platforms.</h3>
                </div>
              </div>
              <div className="content__tab">
                <div className="tab-panel">
                  <button className="tab active" onClick={(evt) => { openTab(evt, 'all'); }}>ALL</button>
                  <button className="tab" onClick={(evt) => { openTab(evt, 'print'); }}>PRINT</button>
                  <button className="tab" onClick={(evt) => { openTab(evt, 'web'); }}>WEB</button>
                  <button className="tab" onClick={(evt) => { openTab(evt, 'ui'); }}>UI</button>
                </div>

                <div className="content__row color-swatches">
                  <div className="content__row-body">
                    {colors.map((col) => {
                      return (
                        <div className="content__row-col">
                          {col.map((color) => {
                            return (
                              <ColorSwatch imgSrc={color.imgSrc} colorName={color.colorName} subName={color.subName} colorClass={color.colorClass} hex={color.hex} rgb={color.rgb} pms={color.pms} platforms={color.platforms} />
                            );
                          })
                          }
                        </div>);
                    })}
                  </div>
                </div>

                <div id="print" className="tab-content">
                  <div className="content__row">
                    <div className="content__row-title">
                      <div className="content__text">
                        <div className="content__text-inner">
                          <h3 className="content__text-inner-title">When it comes to color usage, medium and legibility  matter.</h3>
                          <span className="content__text-inner-text">The primary, secondary, and overall expanded palettes should be used thoughtfully, with hierarchy and platform in mind. The expanded variations on our primary and secondary colors mean we can remain true to our foundational brand colors while also considering best color practices for the user experience across media.</span>
                        </div>
                      </div>
                    </div>

                    <div className="content__row-body">
                      <div className="content-sidekick print-usecase">
                        <div className="content__image">
                          <img src="../img/colors/print/FACT_LiquidBiopsySummit_Banner_01-00_HH-01@2x.png" alt="" />
                        </div>
                        <div className="content__text">
                          <span className="content__text-inner">
                            <h3>PRINT USE-CASE</h3>
                            For this print piece we utilize heavily the signature palette, referencing the secondary palette for accent colors (i.e. FM Orange in the banner artwork shown here).
                          </span>
                          <div className="content__row">
                            <div className="content__image slate-lt">
                              <img src="../img/colors/print/use-case swatches/Slate LT usecase-swatch@2x.png" alt="" />
                            </div>
                            <div className="content__image slate">
                              <img src="../img/colors/print/use-case swatches/Slate usecase-swatch@2x.png" alt="" />
                            </div>
                            <div className="content__image sea">
                              <img src="../img/colors/print/use-case swatches/Sea usecase-swatch@2x.png" alt="" />
                            </div>
                            <div className="content__image orange">
                              <img src="../img/colors/print/use-case swatches/Orange usecase-swatch@2x.png" alt="" />
                            </div>
                            <div className="content__image fire">
                              <img src="../img/colors/print/use-case swatches/Fire usecase-swatch@2x.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="web" className="tab-content">
                  <h3>Web</h3>
                  <p>Web</p>
                </div>

                <div id="ui" className="tab-content">
                  <h3>UI</h3>
                  <p>ui</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default routeWrapper(Colors);
