# Foundation Medicine Contributor Guidelines

This document should serve as a guideline for contributing to this project. It's not a mandate, just a guide for keeping things organized and consistent. When in doubt, follow the lead of the rest of the team.

Check out [these resources](https://docs.google.com/document/d/1k4i5bNZYBmvIKj9P9DyFlAzWWFN26GC8pi0gtfZSqQU) for learning React and setting up your text editor for working with React.

Check out the [FMI Tech Platform Document](https://docs.google.com/document/d/1dQtV2awTPZ1DU3H_OKOsz_sQQdHta1Of-DBZTbcUf9U/edit) for an overview of how everything works together.

__Please install the [editorconfig plugin](http://editorconfig.org/#download) for your text editor. Thanks!__

## How to use Contentful

To coordinate work between developers and editors we've created a workflow that allows us to work in isolated sandboxes that don't affect the production site. You'll be working in a sandbox space with your name. A space should already be created for you, but if not work with the dev team to make one.

You'll need to keep your space up-to-date with the production space. `npm run sync-space -- --spaceName=<your name>` should sync your space. You'll need to do whenever changes are made to production and you need to have them.

There are some details about bootstrapping that you'll have to follow in the Readme to get started.

---

## How to use Trello & GitHub

We are using the [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow) workflow. We have two historical branches to manage development and deployment:

- `develop`
  - default branch
  - protected branch
  - all features and bug fixes should be merged here
- `production`
  - protect branch
  - used for deployments
  - only releases and bug patches should be merged here

### Features and Bugs

Upstatement uses Trello and GitHub to track features and bugs for this project. We have a process for creating a new feature:

1. Create a card in Trello
  - add a descriptive but succinct title
  - add a description explaining the feature/bug
  - for bugs, include steps to reproduce
  - for bugs, include a screenshot if applicable
2. Create an issue in GitHub — a good practice is to use the same title as the Trello card.
3. Back in Trello, use the GitHub integration to link the card to the issue in GitHub.
4. Checkout a new branch; the name should contain the GitHub issue number and a three-to-four-word description, like so: `<issue-number>-<description>`.

### Pull Requests

To get your feature merged, submit a PR:

1. Describe the feature you implemented.
2. Include a screenshot, if applicable.
3. Tell someone how to test it, even if it's just a link to the page.
4. Assign to someone for review and merging.
5. In Trello, use the GitHub integration to link to the PR.

_Before submitting a PR, it is good practice to ensure all tests are passing and to check the changes manually, looking for any breakages or regressions and testing against the acceptance criteria listed below._

### Acceptance Criteria

Here is the basic AC for any feature or bug fix:

```
**Acceptance Criteria**
- [ ] Works in Chrome
- [ ] Works in Safari
- [ ] Works in Firefox
- [ ] Works in IE11
- [ ] Works on Chrome on iOS
- [ ] Works on Chrome on Android
- [ ] Works on Safari on iOS
- [ ] Responsive styles
- [ ] Is accessible and meets our best practices (see below)
- [ ] It passes the tests
```

_For specifics on what versions of each browser to test against, check out the browser matrix in the [TAC](https://docs.google.com/document/d/1KS6PwubbaacRfg7GqCP2G-rUDLVNtuDWjWjtg3UTP9g/edit#heading=h.isy6umy4174n)._

### Releases

Release are created in the `develop` branch and are merged into the `production` whenever recent work needs to be deployed.

To create a release:

1. Create a commit in `develop` bumping the version number in `package.json`.
   - the major version corresponds to development cycles
   - the minor version corresponds to sprint releases
   - the patch version corresponds to mid-sprint releases
2. Create a tag with the version number.
3. Push the commit and tag to GitHub
4. Merge the `develop` branch into `production`, naming the PR for the release as `Release v<version>`.
5. If the release is a sprint release, [create a release in GitHub](https://help.GitHub.com/articles/creating-releases/).

---

## Accessibility

Your work should meet Upstatement's accessibility best practices:

* Interactions must function with a keyboard.
* Use semantic markup.
* Include ARIA attributes and roles.
* Label all links, buttons, inputs, tables, lists, etc. with text.
* Images should have descriptions with `alt` attributes or `<figcaption>` tags.

You may want to examine the page with one or more of these tools:

- [aXe Chrome extension](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
- [WAVE Chrome extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
- [a11y Project Checklist](http://a11yproject.com/checklist.html)

---

## JavaScript Guidelines

- This project follows Airbnb's [JavaScript](https://GitHub.com/airbnb/javascript) and [React](https://GitHub.com/airbnb/javascript/tree/master/react) styles guides.
- We use [ESLint](http://eslint.org/) to lint and enforce code styles. You may want to install a [plugin](http://eslint.org/docs/user-guide/integrations) for your text editor.

---

## What's in this repo

This project uses Gulp to provide a series of tasks managing build processes and development workflow. Webpack and Babel are used to transpile React JSX and compile both server and client scripts separately. SASS and PostCSS are used to compile SCSS into CSS.

All build processes output compiled files into the `dist` directory — don't manually edit files there!

### Developer Convenience

Nodemon and Socket.IO are used for automatic reloading:

- Whenever `src/server.js` changes, the application server will be restarted after rebuilding
- Whenever any other scripts change, any open pages will be reloaded after rebuilding
- Whenever any styles change, styles in any open pages will be reloaded _without reloading the page_

### Build Tools

- [Webpack (v2)](https://webpack.js.org/) - bundles JavaScript modules together
- [Babel](http://babeljs.io/) - transforms ES6+ and JSX into browser-compatible JavaScript
- [SASS](https://GitHub.com/dlmanning/gulp-sass) - extends CSS language
- [PostCSS](http://postcss.org/) - extends CSS language with plugins
- [Nodemon](https://nodemon.io/) - watches changes and restarts server
- [Socket.IO](http://socket.io/) - communicates with open pages to refresh browser

---

## Tests

This projects uses a combination of Mocha, Chai, and Enzyme to perform unit tests and code linting. We use nightmare for acceptance (E2E) tests. The test process is run by Gulp. Travis will run the tests in GitHub and PRs must pass these tests to be merged.

- `npm test` - run tests once in PhantomJS.
- You can pass optional flags. `npm test -- <options>`. Options:

```
--watch
# start a test server that will watch for changes and re-run tests. Great for TDD!

--componenents=App,Home
# runs tests on specific components. Use comma-separated filepaths.

--unit
#run unit tests only

--acceptance
#run acceptance tests only

--ci
# continuous integration, throws error when tests complete

--debug
# shows the electron window for nightmare test runner
```

### Testing Tools
- [Enzyme](http://airbnb.io/enzyme/index.html) - testing utilities for React
- [Mocha](https://mochajs.org/) - test framework
- [Chai](http://chaijs.com/api/bdd/) - assertions
- [Nightmare](https://GitHub.com/segmentio/nightmare) - acceptance test library
- [Travis CI](https://travis-ci.org/) - continuous integration with GitHub
- [moxios](https://GitHub.com/mzabriskie/moxios) - mock axios object for testing

---

## Major Libraries

- [react-aria-modal](https://GitHub.com/davidtheclark/react-aria-modal) - accessible modals
- [react-router v3](https://GitHub.com/ReactTraining/react-router/tree/v3/docs) - universal routing
- [react-helmet](https://GitHub.com/nfl/react-helmet) - document head manager
- [contentful.js](https://GitHub.com/contentful/contentful.js) - contentful sdk
- [contentful-space-sync](https://GitHub.com/contentful/contentful-space-sync) - syncing your dev space
- [contentful-import](https://GitHub.com/contentful/contentful-import) - importing contentful data
- [contentful-export](https://GitHub.com/contentful/contentful-export) - exporting contentful data
- [babel-polyfill](https://babeljs.io/docs/usage/polyfill/)

---

## Basic Structure

```
├─ __tests__
    ├─ acceptance
    │   └── acceptance test setup
    ├─ unit
    │   └── unit test setup
    └─ lib
       └── test helpers and fixtures
├─ contentful-tools
│   └── tools for syncing, exporting, importing contentful spaces
├─ gulp-helpers
│   └── helper functions for gulp tasks
├─ dist
│   └── Build directory (don't put things here!)
└─ src
    ├─ assets
    │   └── static assets
    ├─ components
    │   └── React components
    ├─ fonts
    ├─ img
    ├─ lib
    │   └── miscellaneous modules
    ├─ routes
    │   └── React components/containers for routes
    └─ styles
        └── general styles
```

### Component Structure

```
└─ YourComponent
    ├─ __tests__
    │   ├─ acceptance.js
    │   │   └── acceptance test runs in nightmare
    │   └─ unit.js
    │       └── standard unit tests
    ├─ index.js
    │   └── the actual component code
    ├─ styles.scss
    │   └── component-specific styles
    └─ Helmet.js
        └── component for managing meta tags in docemunt head with react-helmet
```
