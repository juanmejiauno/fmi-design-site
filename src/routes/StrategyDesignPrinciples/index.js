/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import routeWrapper from 'lib/route-wrapper';

import PageHeader from 'components/PageHeader';

class DesignPrinciples extends Component {
  render() {
    return (
      <div className="design-principles base-layout--pad-bottom">
        <div className="base-layout layout-content">
          <div className="page-header">
            <PageHeader preheading={'Beliefs and principles'} heading={'Design Principles'} />
          </div>

          <div className="content-sidekick overlap">
            <div className="content__text">
              <span className="content__text-inner">
                <h3>Design Principles and Belief Statements act as value-based drivers for design decisions.</h3>
                Any decision making scenario whether at a feature level or an interface level requires a value system to weigh one option against another. Design principles and belief statements act as customer centric value drivers. They represent the perception of our customers and help guide decision making.
              </span>
            </div>
            <div className="content__image">
              <img src="../img/designprinciples/IMG_2154.png" alt="" />
            </div>
          </div>

          <div className="content__text paragraph fire">
            <div className="content__text-inner">
              <h2 className="content__text-inner-title fire">Patients Deserve Better than the Best.</h2>
              <span className="content__text-inner-text">Patients deserve better care. Targeted therapies can be more effective and create less colateral damage for patients. That is why we are leading a transformation in cancer care, where each patient’s treatment can be informed by a deep understanding of the molecular changes that contribute to their disease.</span>
            </div>
          </div>

          <div className="content__row">
            <div className="content__row-body">
              <div className="content__row-col">
                <div className="content-sidekick clipboard">
                  <div className="content__image">
                    <img src="../img/designprinciples/FMI_icons_clipboard-fill.png" alt="" />
                  </div>
                  <div className="content__text">
                    <h3 className="content__text-inner-pre-title">Design Principle</h3>
                    <h2 className="content__text-inner-title">Empower with tangible next steps.</h2>
                    <span className="content__text-inner-text">Don’t work in a vaccum. For patients, it means getting guided through what can be an intimidating and confusing process. For physicians, this becomes most critical in the context of the report: including and providing content in the most actionable way possible. For bio-pharma partners this means providing meaningful analytics and regular status updates to best support their desire for operational excellence.</span>
                  </div>
                </div>
              </div>
              <div className="separator-vertical" />
              <div className="content__row-col">
                <div className="content-sidekick idea">
                  <div className="content__image">
                    <img src="../img/designprinciples/FMI_icons_idea-fill.png" alt="" />
                  </div>
                  <div className="content__text">
                    <h3 className="content__text-inner-pre-title">Design Principle</h3>
                    <h2 className="content__text-inner-title">Lead with the “why”.</h2>
                    <span className="content__text-inner-text">Don’t get lost in the “how” or “what”. For patients, it means communicating why certain processes occur to make sure they understand how it can help them during their cancer experience. Physicians too entered this field to make a difference in patient lives and they want to know this is in service of patients. For bio-pharma partners it means not only focusing on the data but how it can make trials and drug development processes more successful.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-sidekick we-believe fire">
          <div className="content__text">
            <h3 className="content__text-inner-pre-title">We Believe</h3>
            <h2 className="content__text-inner-title">The More We Know the Better we can find a Way Forward.</h2>
            <span className="content__text-inner-text">
              <p>
                Knowledge is power. Because we have more information at our disposal and a broader understanding of the context—both in terms of genomic data and the industry at large—we can help our stakeholders discover better options for their patients, create a better plan for treatment, create more therapies faster, and give patients a better chance.
              </p>
              <p>
                This is our role within the cancer community and it is how we are helping to transform cancer care: By being holistic, being at the cutting-edge of science, and understanding the whole landscape, we are able to provide the very best information possible—be it insights, new treatments, patient data, or trial information—so that, together, we can act upon it.
              </p>
            </span>
          </div>
          <div className="content__image">
            <img src="../img/designprinciples/insights3_BW.png" alt="" />
          </div>
        </div>

        <div className="base-layout layout-content">
          <div className="content__row">
            <div className="content__row-body">
              <div className="content__row-col">
                <div className="content-sidekick community">
                  <div className="content__image">
                    <img src="../img/designprinciples/FMI_icons_community-fill.png" alt="" />
                  </div>
                  <div className="content__text">
                    <h3 className="content__text-inner-pre-title">Design Principle</h3>
                    <h2 className="content__text-inner-title not-hero">Be the Sidekick, Not the Hero.</h2>
                    <span className="content__text-inner-text">Don’t presume to have all the answers. For patients, they have built relationships with their oncologist and want to receive results from a trused source. Foundation should be the sidekick to the oncologist as the key communicator. Oncologist value this communication balance too, as the expert in their patient’s case. For bio-pharma, they understand drug development isn’t black and white and they don’t want absolutes from a partner. </span>
                  </div>
                </div>
              </div>
              <div className="separator-vertical" />
              <div className="content__row-col">
                <div className="content-sidekick email">
                  <div className="content__image">
                    <img src="../img/designprinciples/FMI_icons_email-fill.png" alt="" />
                  </div>
                  <div className="content__text">
                    <h3 className="content__text-inner-pre-title">Design Principle</h3>
                    <h2 className="content__text-inner-title">Use the familiar.</h2>
                    <span className="content__text-inner-text">Don’t break all norms at once. It can be exciting for young and emerging companies to get caught up in technological solutions but healthcare relies on old methods and tools. Abandoning those, doesn’t capture the reality of physicians’s workflow or the majority of patient’s experience. For bio-pharma partners, they value familiar relationships and want to know the data and technology is rigorous. </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-sidekick we-believe green2">
            <div className="content__text">
              <h3 className="content__text-inner-pre-title">We Believe</h3>
              <h2 className="content__text-inner-title">The Better Our Science, the More we will Discover.</h2>
              <span className="content__text-inner-text">
                We always aim to ensure that our science is exemplary and on the cutting edge of what’s possible. We combine world-renowned scientists, state-of-the-art labs, a ful suite of best-in-class assays, advanced technologies, and an ever-growing database to ensure that we are always able to provide the very best information possible at that time and push the field forward.
              </span>
            </div>
            <div className="content__image">
              <img src="../img/designprinciples/Group 4.png" alt="" />
            </div>
          </div>

        <div className="base-layout layout-content">
          <div className="content__text paragraph green2">
            <div className="content__text-inner">
              <h2 className="content__text-inner-title green2">We can get Farther the More We Work Together.</h2>
              <span className="content__text-inner-text">We know that together we can make a greater impact which is why we are generous with our information and collaborate extensively with the global cancer community to try to ensure that more patients have a better chance and better options.</span>
            </div>
          </div>

          <div className="content__row">
            <div className="content__row-body">
              <div className="content__row-col">
                <div className="content-sidekick clock">
                  <div className="content__image">
                    <img src="../img/designprinciples/FMI_icons_clock-fill.png" alt="" />
                  </div>
                  <div className="content__text">
                    <h3 className="content__text-inner-pre-title">Design Principle</h3>
                    <h2 className="content__text-inner-title">Take the work off my plate.</h2>
                    <span className="content__text-inner-text">Don’t add to my burden. Patients want to be supported in their journey, making it easier  for them to interact with their results or access their results is critical. For physicians it is about seamless workflows, we need to communicate clearly and make every interaction easier. For bio-pharma,  utilizing data for retrospective studies is a critical is a clear example of taking work off their plate.</span>
                  </div>
                </div>
              </div>
              <div className="separator-vertical" />
              <div className="content__row-col">
                <div className="content-sidekick location-map">
                  <div className="content__image">
                    <img src="../img/designprinciples/FMI_icons_locationmap-fill.png" alt="" />
                  </div>
                  <div className="content__text">
                    <h3 className="content__text-inner-pre-title">Design Principle</h3>
                    <h2 className="content__text-inner-title">Filter out the noise.</h2>
                    <span className="content__text-inner-text">Don’t confuse or complicate. Receiving a diagnosis can be overwhelming and scary. There is so much to learn, keeping communication clear and simple is the best tool when interacting with patients. For providers, the field of genomics is always changing, focusing on what’s truly actionable is critical. For bio-pharma transparency into current processes and the analytics within those relationships is critical.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-sidekick we-believe blue">
          <div className="content__text">
            <h3 className="content__text-inner-pre-title">We Believe</h3>
            <h2 className="content__text-inner-title">The Lighter the Burden the Better our users can Focus on what’s Important.</h2>
            <span className="content__text-inner-text">
              Providers, pharma and patients already have so much on their plates. We continously strive to make the load lighter, the information easier to understand, our service more robust, genomic medicine more accepted, and our process simpler to deal with so they are free to do what they do best.
            </span>
          </div>
          <div className="content__image">
            <img src="../img/designprinciples/Isometric Perspective Mock-Up.png" alt="" />
          </div>
        </div>

      </div>
    );
  }
}

export default routeWrapper(DesignPrinciples);
