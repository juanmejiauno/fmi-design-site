/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import routeWrapper from 'lib/route-wrapper';

import PageHeader from 'components/PageHeader';

class Photography extends Component {
  render() {
    return (
      <div className="photography base-layout--pad-bottom">
        <div className="base-layout layout-content">
          <div className="brand-architecture-page-header">
            <PageHeader preheading={'Photo Direction'} heading={'Photography'} />
          </div>

          <div className="content-sidekick">
            <div className="content__text">
              <span className="content__text-inner">
                <h3>Photo usage within the brand falls into two distinct categories: <em>Portraits</em>, and <em>People In Context</em>.</h3>
                Photography is powerful and can be not only useful, but a beautiful visual tool. Our new visual identity relies heavily on photography and acts as a key portrayal of the brand. If not used properly, imagery could depart from our brand personality and perhaps more concerning, it could communicate incorrectly how we see ourselves as a company. Follow these guides and art direction when utilizing photos to represent Foundation Medicine across any and all platforms. <a href="/">Find and download our photography assets here.</a>
              </span>
            </div>
            <div className="content__image">
              <img src="../img/photography/msb-632462modgray-final_sm-1.png" alt="" />
            </div>
          </div>

          <div className="separator" />

          <div className="content-sidekick photography-personality">
            <div className="content__text">
              <span className="content__text-inner">
                <h3>Photography is a critical way to express our brand personality.</h3>
                <p><span className="fire">We are <em>PIONEERING</em></span>: in our tone we interpret this as being <em>frank</em> therefore our photography captures those who look real; frankness is interpreted visually as an honesty in what real humans look like, not overly stylized models.</p>
                <p><span className="fire">We are <em>RELENTLESS</em></span>: in our tone we look to be <em>dynamic</em> and visually we don’t shy away from layered patterns or fragmented photography.</p>
                <p><span className="fire">We are <em>SMART</em></span>: we express this in tone as <em>simple yet informative</em> therefore in our photography we want half smiles; something indicating a knowing look.</p>
                <p><span className="fire">We are <em>COMPASSIONATE</em></span>: in our tone we interpret this as <em>warm</em> but in our photography we look for warmth in the eyes; something real, a connection to the subject.</p>
                <p><span className="fire">We are <em>COLLABORATIVE</em></span>: in tone we look to be <em>humble</em> and not talk down to our audience about our expertise so we look for a diverse portrayal of subjects, not those always at a lab bench or in a clinic: a physician leaning against a wall, for example.</p>
              </span>
            </div>
            <div className="content__image">
              <img src="../img/photography/offset_103765_b&w_sm.png" alt="" />
              <img src="../img/photography/offset_85864-BW_contrast_sm.png" alt="" />
            </div>
          </div>

          <div className="separator" />

          <div className="content__row portraiture portraiture-primary base-layout--pad-bottom">
            <div className="content__row-title">
              <div className="content__text">
                <span className="content__text-inner">
                  <h3>Portraiture is our primary form of photography.</h3>
                  All primary pieces whether it is overarching campaign imagery or a single event poster should look to leverage portraiture as a key identity and differentiator of the Foundation Medicine brand. Our photography and portraiture is not necessarily product-specific in subject, but customers like hearing from themselves. For example physicians wanted to hear about patients from other physicians, not patients directly. Keep this in mind when selecting portraiture subjects.
                </span>
              </div>
            </div>
            <div className="content__row-body">
              <div className="content__row-col">
                <span className="list-title">DO:</span>
                <ul>
                  <li>Black and white.</li>
                  <li>Soft, even lighting.</li>
                  <li>Subject looking directly at the camera, confronting the viewer.</li>
                  <li>Not smiling, but not sad or angry either.</li>
                  <li>Studio shot, or environmental with blurred background.</li>
                </ul>
                <img src="../img/photography/offset_1084264_b&w_sm.png" alt="" />
              </div>
              <div className="content__row-col">
                <span className="list-title fire">DON’T:</span>
                <ul>
                  <li>Color photography.</li>
                  <li>Smiling portraits.</li>
                  <li>Props.</li>
                </ul>
                <img src="../img/photography/Group.png" alt="" />
              </div>
            </div>
          </div>

          <div className="separator" />

          <div className="content__row portraiture portraiture-pattern">
            <div className="content__row-title">
              <div className="content__text">
                <span className="content__text-inner">
                  <h3 className="content__text-inner-title">Portraiture may be used in two primary ways with the triangle pattern & without: this encompasses usage for all primary work.</h3>
                  <span className="content__text-inner-text">1) Large format single photographs desaturated with color and pa ern incorporated: usage of pattern or the deconstruction of photographs requires time and iteration. Pattern should not overlay too strongly with eyes or mouths and in general no eyes should deconstructed or skewed. A connection to the subject should be maintained as a clear goal of the image.</span>
                </span>
              </div>
            </div>
            <div className="content__row-body">
              <div className="content-sidekick">
                <div className="content__image">
                  <img src="../img/photography/QualityPolicy_poster_01_HH-06.png" alt="" />
                </div>
                <div className="content__text">
                  <span className="content__text-inner">
                    <h3>QUALITY POLICY POSTER USE-CASE</h3>
                    Here we use a large format single portrait deconstructed only by the slate triangle-fill pattern screens. The triangle pattern is implemented as an overlay in gold across the image, but does not impede the viewer’s connection with the photographed subject’s gaze.
                  </span>
                </div>
              </div>
              <div className="content-sidekick brochure">
                <div className="content__image">
                  <img src="../img/photography/760150_FMI_pg11_sm.png" alt="" />
                </div>
                <div className="content__text">
                  <span className="content__text-inner">
                    <h3>CORPORATE BROCHURE USE-CASE</h3>
                    On this brochure cover, we use an FM Slate color- block screened over a desaturated large format portrait. Here the triangle pattern is used as an overlay across the photo only in the corners of the brochure so as not to distract from the somewhat softened subject of the screened portrait.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="separator-grey" />

          <div className="content__row portraiture portraiture-pattern">
            <div className="content__row-title">
              <div className="content__text">
                <span className="content__text-inner">
                  <span className="content__text-inner-text">2) Smaller multiple photographs desaturated or with color overlays within patterns. Minimal usage where pattern may overwhelm copy or distract from key functions, such as product UI or other action-oriented settings like applications or tradeshow digital.</span>
                </span>
              </div>
            </div>
            <div className="content__row-body">
              <div className="content-sidekick artwork">
                <div className="content__image">
                  <img src="../img/photography/FACT_drop_2-02.png" alt="" />
                </div>
                <div className="content__text">
                  <span className="content__text-inner">
                    <h3>CAMPAIGN ARTWORK USE-CASE</h3>
                    Here we use multiple smaller-scale desaturated portraits with color overlays within the triangle pattern structure. The portraits and graphic elements are placed in the overall shape of a drop to directly represent FoundationACT®, our liquid biopsy assay, in its Momentum Campaign.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="separator-grey" />

          <div className="content__row portraiture portraiture-pattern">
            <div className="content__row-title">
              <div className="content__text">
                <span className="content__text-inner">
                  <span className="content__text-inner-text">2.1) For those looking for a minimal route, large format single photographs in color with extremely paired back layout or desaturated with a large color block are possible. <em>Color photographs should not be used as a primary graphic on any print or digital work.</em></span>
                </span>
              </div>
            </div>
            <div className="content__row-body">
              <div className="content-sidekick">
                <div className="content__image use-case">
                  <img src="../img/photography/HomePage_header_sm.png" alt="" />
                </div>
                <div className="content__text">
                  <span className="content__text-inner">
                    <h3>CORPORATE SITE HEADER USE-CASE</h3>
                    Here we use a large scale portrait in full color with paired-back layout. The color portrait heightens visual dynamism where minimal layout is necessary; a secondary alternative to the graphic involvement of the triangle pattern overlay.
                  </span>
                </div>
              </div>
              <div className="content-sidekick">
                <div className="content__image use-case">
                  <img src="../img/photography/HomePage_module_sm.png" alt="" />
                </div>
                <div className="content__text">
                  <span className="content__text-inner">
                    <h3>HOMEPAGE SITE MODULE USE-CASE</h3>
                    In the corporate site homepage modules, we use large scale portraits desaturated with an FM Slate color duotone juxtaposed next to large color blocks.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="separator" />

          <div className="content__row portraiture portraiture-primary base-layout--pad-bottom">
            <div className="content__row-title">
              <div className="content__text">
                <span className="content__text-inner">
                  <h3>Avoid misuse of patterns and over-stylization in portraiture.</h3>
                  <span className="content__text-inner-text">The triangle pattern when layered with photography should be maintained in scale as a graphic complement to the portrait: if undersized, the pattern becomes distracting and tedious; if oversized, the pattern is lost. Deconstruction of photos and implementation of graphic patterns takes time and iteration.  The deconstruction of portraits should be minimal to avoid losing the intent of portraying dynamism and knowledge aligning; overly chopped up photos could become confusing and may communicate something altogether different and misleading.</span>
                </span>
              </div>
            </div>
            <div className="content__row-body">
              <div className="content__row-col deconstruct">
                <div className="list-title fire">X — DON’T OVERLY DECONSTRUCT FRAGMENTED PHOTOS</div>
                <img src="../img/photography/don'tdothis_deconstruction-03.png" alt="" />
              </div>
              <div className="content__row-col overlay">
                <div className="list-title fire">X — DON’T OVER- OR UNDERSIZE TRIANGLE PATTERN OVERLAYS</div>
                <img src="../img/photography/don'tdothis_patternsize-04.png" alt="" />
              </div>
            </div>
          </div>

          <div className="separator" />

          <div className="content__row portraiture portraiture-primary base-layout--pad-bottom">
            <div className="content__row-title">
              <div className="content__text">
                <span className="content__text-inner">
                  <h3>For secondary photography, further options are possible.</h3>
                  <span className="content__text-inner-text">Secondary shots may contain more action-oriented content such as holding a flask in the lab, collaborating with colleagues or reviewing a report. These may be used in color, desaturated or with screened overlays with minimal type treatments as a best practice. These photographs are intended to support captions or quotes in print collateral or as visual treatment to type-based headers in digital.</span>
                </span>
              </div>
            </div>
            <div className="content__row-body">
              <div className="content__row-col caption-support">
                <div className="list-title">CAPTION SUPPORT IN PRINT COLLATERAL</div>
                <img src="../img/photography/corpbrochure_page_sm.png" alt="" />
              </div>
              <div className="content__row-col visual-treatment">
                <div className="list-title">VISUAL TREATMENT TO TYPE-BASED HEADERS IN DIGITAL</div>
                <img src="../img/photography/Screen Shot Genomic Testing.png" alt="" />
              </div>
            </div>
          </div>

          <div className="separator" />

          <div className="content__row portraiture portraiture-primary base-layout--pad-bottom steer-clear">
            <div className="content__row-title">
              <div className="content__text">
                <span className="content__text-inner">
                  <h3 className="content__text-inner-title">Steer clear of photo subjects, styles and treatments not indicated above.</h3>
                  <span className="content__text-inner-text">Photographs that should not be used include anything utilizing molecules or DNA; we are intentionally trying to remove ourselves from the previous brand perception of ivy tower scientists and unapproachable experts. Key learnings from research done and testing of previous campaigns indicated that physicians want to hear from physicians like themselves, and subject matter depicting molecular biology was too disconnected from on-brand messages.</span>
                </span>
              </div>
            </div>
            <div className="content__row-body">
              <div className="content__row-col">
                <div className="list-title fire">X — NO DNA</div>
                <img src="../img/photography/dna-1811955_960_720.png" alt="" />
              </div>
              <div className="content__row-col">
                <div className="list-title fire">X — NO MOLECULES</div>
                <img src="../img/photography/molecules.png" alt="" />
              </div>

              <div className="content__text">
                <span className="content__text-inner">
                  <span className="content__text-inner-text">Photographs depicting patients climbing mountains or doctors staring out windows should also be avoided. Eye contact is key for primary photography, and subjects should not appear distracted or with far-off gazes, as if dreaming. This is not an honest or frank portrayal of the subject and provides an overly optimistic perspective on the reality of cancer. A key learning from our brand research was that physicians want to know the truth about their results; they want to know that sometimes test results come back without actionable findings than to order the test and receive that as a result without warning. Having no actionable findings in not an ideal situation, but being up front about our product with customers proved critical. This carries into brand perception: we don’t want to mislead our customers by portraying fanciful day-dreaming removed from reality.</span>
                </span>
              </div>

              <div className="content__row-col">
                <div className="list-title fire">X — NO PATIENTS IN NATURE, CLIMBING MOUNTAINS, ETC.</div>
                <img src="../img/photography/mountain climbing.png" alt="" />
              </div>
              <div className="content__row-col">
                <div className="list-title fire">X — NO PENSIVE DOCTORS</div>
                <img src="../img/photography/Pensive_doctor.png" alt="" />
              </div>

              <div className="content__text">
                <span className="content__text-inner">
                  <span className="content__text-inner-text">Avoid photographs of nature or objects without humans. A key goal of the brand is to demonstrate our connection and passion for what we do through our humanness: we aren’t perfect, but we won’t stop trying. The most clear antithesis of this intent is still life.</span>
                </span>
              </div>

              <div className="content__row-col">
                <div className="list-title fire">X — NATURE SHOTS</div>
                <img src="../img/photography/forest.png" alt="" />
              </div>
              <div className="content__row-col">
                <div className="list-title fire">X — NO OBJECTS</div>
                <img src="../img/photography/beakers.png" alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default routeWrapper(Photography);
