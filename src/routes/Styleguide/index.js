import React from 'react';
import LoginLogout from 'components/LoginButton';
import PageHeader from 'components/PageHeader';
import BorderedQuote from 'components/BorderedQuote';
import Card from 'components/Card';
import FlexModule from 'components/FlexModule';
import { blogModuleFixture } from '__tests__/lib/fixtures/blog-module-fixture';
import Sidekick from 'components/Sidekick';

const borderedQuoteEntry = {
  fields: {
    text: 'We need the top talent. But we also know we need people who are more interested in having an impact on the greater good than they are about themselves.',
    sourceName: 'Sarah Larson',
    sourceDescriptor: 'Senior VP, Human Resources',
  },
};

function Styleguide() {
  return (
    <div className="base-layout base-layout--pad-bottom">
      <div className="styleguide">

        <PageHeader heading={'Style Guide'} />

        <div className="styleguide__item basic-text">
          <h2 className="styleguide__head">Primary Text Styles</h2>
          <div className="styleguide__example">

            <p>This is an ordinary paragraph. It contains some <b>bold</b> and <strong>strong</strong> text, and also some <i>italicized</i> and <em>emphasized</em> words. This is <a href="/">what a link looks like</a>. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque laborum vitae quidem repellendus ex voluptatem quam ea.</p>

            <h2>This is a heading 2</h2>
            <h3>This is a heading 3</h3>
            <h4>This is a heading 4</h4>
            <h5>This is a heading 5</h5>
            <h6>This is a heading 6</h6>

            <blockquote>
              <p>This is a blockquote. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, ad fugit! Architecto modi, voluptas ipsa, omnis, perspiciatis ratione fuga quam sequi accusantium, laudantium neque distinctio nulla aut animi doloremque obcaecati.</p>
            </blockquote>

            <p>A horizontal rule:</p>

            <hr />

            <ul>
              <li>Unordered list item A</li>
              <li>Unordered list item B</li>
              <li>Unordered list item C. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsa dicta temporibus sit aut, officia placeat ad doloremque at, harum debitis! Iusto eius pariatur et maiores, neque totam cumque dolore.</li>
            </ul>
            <ol>
              <li>Ordered list item</li>
              <li>Ordered list item</li>
              <li>Ordered list item. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsa dicta temporibus sit aut, officia placeat ad doloremque at, harum debitis! Iusto eius pariatur et maiores, neque totam cumque dolore.</li>
            </ol>


            <p className="pullquote">This is a pullquote. The more we know, the better we can find a way forward.</p>

            <table>
              <thead>
                <tr>
                  <th>Column Heading</th>
                  <th>Column Heading</th>
                  <th>Column Heading</th>
                  <th>Column Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h1>A table</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ut, accusantium pariatur veniam, nulla necessitatibus itaque tenetur. Tempore, omnis. Natus iste nisi, dolorum ex porro labore distinctio repellat molestiae.</p>
                  </td>
                  <td>Tempore, omnis. Natus iste nisi, dolorum ex porro labore distinctio repellat molestiae.</td>
                  <td>Natus iste nisi, dolorum ex porro labore distinctio repellat molestiae.</td>
                  <td>Nisi, <strong>dolorum</strong> ex porro labore distinctio repellat molestiae.</td>
                </tr>
                <tr>
                  <td>
                    <h1>Another Heading</h1>
                    <p>Ea ut, accusantium pariatur veniam, nulla necessitatibus itaque tenetur. Tempore, omnis. Natus iste nisi, dolorum ex porro labore distinctio repellat molestiae.</p>
                  </td>
                  <td>Tempore, omnis. Natus iste nisi, dolorum ex porro labore distinctio repellat molestiae.</td>
                  <td>Natus iste nisi, dolorum ex porro labore distinctio repellat molestiae.</td>
                  <td>Nisi, <strong>dolorum</strong> ex porro labore distinctio repellat molestiae.</td>
                </tr>
                <tr>
                  <td>Lorem</td>
                  <td>Tempore, omnis. Natus iste nisi, dolorum ex porro labore distinctio repellat molestiae.</td>
                  <td>Natus iste nisi, dolorum ex porro labore distinctio repellat molestiae.</td>
                  <td>Nisi, <strong>dolorum</strong> ex porro labore distinctio repellat molestiae.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="styleguide__item">
          <h2 className="styleguide__head">Secondary Text Styles</h2>
          <div className="styleguide__example ">
            <div className="secondary-text">

              <p><em>Secondary text</em> is more muted than basic text, and is used in the About section extensively. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eum voluptate error aspernatur praesentium est, nemo nam suscipit quia eveniet, aut rem laborum dignissimos ab quam quibusdam ut beatae omnis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eum voluptate error aspernatur praesentium est, nemo nam suscipit quia eveniet, aut rem laborum dignissimos ab quam quibusdam ut beatae omnis.</p>
            </div>

            <div className="secondary-section secondary-section--centered">

              <h2 className="head-secondary">Secondary Heading 2</h2>
              <p>The about section also makes use of centered text and alternate heading. Consectetur adipisicing elit. Quos eum voluptate error aspernatur praesentium est, nemo nam suscipit quia eveniet, aut rem laborum dignissimos ab quam quibusdam ut beatae omnis.</p>

              <h3 className="head-section">Section Heading</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eum voluptate error aspernatur praesentium est, nemo nam suscipit quia eveniet, aut rem laborum dignissimos ab quam quibusdam ut beatae omnis.</p>


              <h3 className="head-section line-under">Section Heading with line</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eum voluptate error aspernatur praesentium est, nemo nam suscipit quia eveniet, aut rem laborum dignissimos ab quam quibusdam ut beatae omnis.</p>

            </div>
          </div>
        </div>

        <div className="styleguide__item">
          <h2 className="styleguide__head">Bordered Quote</h2>
          <div className="styleguide__example">
            <BorderedQuote entry={borderedQuoteEntry} smartQuotes />
          </div>
        </div>


        <div className="styleguide__item">
          <h2 className="styleguide__head">Form Elements</h2>
          <div className="styleguide__example">
            <div className="style-guide__group">
              <label className="label" htmlFor="input--text">Text Input</label>
              <input type="text" id="input--text" className="input" placeholder="" />
            </div>
            <div className="style-guide__group">
              <label className="label" htmlFor="input--text">Email Input (with errors)</label>
              <input type="email" id="input--text" className="input input--error" defaultValue="joe@test.com" />
              <div className="error-messages"><p>Sorry, this email address is invalid.</p></div>
            </div>
            <div>
              <label className="label" htmlFor="input--textarea">Textarea</label>
              <textarea id="input--textarea" />
            </div>

            <p><button className="button button--standard" disabled>Standard Button (disabled)</button></p>
            <p><button className="button button--standard">Standard Button</button></p>
            <p><button className="button button--mini">Mini Button</button></p>
          </div>
        </div>

        <div className="styleguide__item">
          <h2 className="styleguide__head">Cards</h2>
          <div className="styleguide__example">

            <Card
              microHeading="A microhead"
              heading="The Heading for the Card"
              caption="<p>The caption. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, praesentium sed rem autem expedita doloremque atque, vero minus error ullam provident.</p>"
              stats={['110k | genomic profiles', '168 cancer subtypes']}
              body="<ul><h3>The heading</h3><li>This one thing</li><li>This one thing</li></ul>"
            />

            <Card
              heading="Single Heading, Stats Only"
              stats={['110k | genomic profiles', '168 | cancer subtypes', '4053 | pieces of fruit that run to two lines']}
              body="<ul><h3>The heading</h3><li>This one thing</li><li>This one thing</li></ul>"
            />

            <Card
              body="<ul><h3>The heading</h3><li>This one thing</li><li>This one thing Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong>Atque ab minima nemo placeat</strong> ipsa aliquam, magnam repellat tenetur, debitis, pariatur facere exercitationem cupiditate quod quisquam cumque quos illum nisi sunt?</li><li>This one thing</li><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ullam iusto laboriosam <strong>autem adipisci exercitationem </strong>fugiat numquam quos animi voluptatem, nemo delectus possimus voluptas, deserunt iure incidunt modi. Non, ipsum! one thing</li><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi reiciendis quaerat reprehenderit. Sunt, dolor voluptates. Voluptates error ab facilis obcaecati, vel qui similique blanditiis temporibus voluptatibus sed dolorem neque doloremque. thing</li></ul>"
            />
          </div>
        </div>

        <div className="styleguide__item">
          <h2 className="styleguide__head">Modules</h2>
          <div className="styleguide__example">
            <h3 className="styleguide__subhead">Module with Offset Block</h3>
            <FlexModule entry={blogModuleFixture} className="flex-module flex-module--today" />
          </div>
          <div className="styleguide__example">
            <h3 className="styleguide__subhead">Module with No Offset</h3>
            <FlexModule entry={blogModuleFixture} className="flex-module flex-module--tomorrow flex-module--no-offset" />
          </div>
        </div>

        <div className="styleguide__item">
          <h2 className="styleguide__head">Sidekick</h2>
          <div className="styleguide__example">
            <h3 className="styleguide__subhead">Default Sidekick</h3>
            <Sidekick
              img="/img/style-guide-750-556.jpg"
              text={`
                <h3>This is the sidekick default.</h3>
                <h4>And this is the optional subheading</h4>
                <p>We’re on-hand to help your [institution or biopharma research team] pursue ways to push cancer care forward. Working together, we can create a partnership best suited to your business’ needs.</p>
                <p><a href="#">Contact Via Email</a></p>
              `}
            />
          </div>

          <div className="styleguide__example">
            <h3 className="styleguide__subhead">Default Reversed</h3>
            <Sidekick
              className="sidekick--reverse"
              img="/img/style-guide-750-556.jpg"
              text={`
                <h3>Here is the default, reversed.</h3>
                <h4>And this is the optional subheading</h4>
                <p>We’re on-hand to help your [institution or biopharma research team] pursue ways to push cancer care forward. Working together, we can create a partnership best suited to your business’ needs.</p>
                <p><a href="#">Contact Via Email</a></p>
              `}
            />
          </div>

          <div className="styleguide__example">
            <h3 className="styleguide__subhead">Overlap</h3>
            <Sidekick
              className="sidekick--overlap"
              img="/img/style-guide-750-556.jpg"
              text={`
                <h3>Sidekick, with the default overlap.</h3>
                <h4>The default is centered</h4>
                <p>We’re on-hand to help your [institution or biopharma research team] pursue ways to push cancer care forward. Working together, we can create a partnership best suited to your business’ needs.</p>
                <p><a href="#">Contact Via Email</a></p>
              `}
            />
          </div>

          <div className="styleguide__example">
            <h3 className="styleguide__subhead">Overlap align top</h3>
            <Sidekick
              className="sidekick--overlap sidekick--overlap-top"
              img="/img/style-guide-750-556.jpg"
              text={`
                <h3>Sidekick overlap, aligned top</h3>
                <h4>This subheading is optional</h4>
                <p>We’re on-hand to help your [institution or biopharma research team] pursue ways to push cancer care forward. Working together, we can create a partnership best suited to your business’ needs.</p>
                <p><a href="#">Contact Via Email</a></p>
              `}
            />
          </div>

          <div className="styleguide__example">
            <h3 className="styleguide__subhead">Overlap align bottom</h3>
            <Sidekick
              className="sidekick--overlap sidekick--overlap-bottom"
              img="/img/style-guide-750-556.jpg"
              text={`
                <h3>Here, it is overlapping and aligned bottom.</h3>
                <h4>Optional Subhead</h4>
                <p>We’re on-hand to help your [institution or biopharma research team] pursue ways to push cancer care forward. Working together, we can create a partnership best suited to your business’ needs.</p>
                <p><a href="#">Contact Via Email</a></p>
                `}
            />
          </div>

          <div className="styleguide__example">
            <h3 className="styleguide__subhead">Overlap Reversed</h3>
            <Sidekick
              className="sidekick--reverse sidekick--overlap"
              img="/img/style-guide-750-556.jpg"
              text={`
                <h3>Overlapping and Reversed Sidekick</h3>
                <h4>Default here is vertically centered</h4>
                <p>We’re on-hand to help your [institution or biopharma research team] pursue ways to push cancer care forward. Working together, we can create a partnership best suited to your business’ needs.</p>
                <p><a href="#">Contact Via Email</a></p>
                `}
            />
          </div>

          <div className="styleguide__example">
            <h3 className="styleguide__subhead">Overlap reversed, align top</h3>
            <Sidekick
              className="sidekick--reverse sidekick--overlap sidekick--overlap-top"
              img="/img/style-guide-750-556.jpg"
              text={`
                <h3>Reversed, Overlap, Aligned Top</h3>
                <h4>And this subhead is optional</h4>
                <p>We’re on-hand to help your [institution or biopharma research team] pursue ways to push cancer care forward. Working together, we can create a partnership best suited to your business’ needs.</p>
                <p><a href="#">Contact Via Email</a></p>
                `}
            />
          </div>

          <div className="styleguide__example">
            <h3 className="styleguide__subhead">Overlap reversed, align bottom</h3>
            <Sidekick
              className="sidekick--reverse sidekick--overlap sidekick--overlap-bottom"
              img="/img/style-guide-750-556.jpg"
              text={`
                <h3>Reversed, Overlap and Aligned Bottom</h3>
                <h4>And that is all the variants</h4>
                <p>We’re on-hand to help your [institution or biopharma research team] pursue ways to push cancer care forward. Working together, we can create a partnership best suited to your business’ needs.</p>
                <p><a href="#">Contact Via Email</a></p>
              `}
            />
          </div>
        </div>

        <div className="styleguide__item">
          <h2 className="styleguide__head">Login Modal Button</h2>
          <div className="styleguide__example">
            <LoginLogout type="button" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Styleguide;
