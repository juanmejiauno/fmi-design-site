# FMI React

This repository contains the ~~isomorphic~~ universal React application for [foundationmedicine.com](https://foundationmedicine.com).

## Resources

- [Trello](https://trello.com/b/9tu9hmyB/foundation-medicine)
- [Project Dashboard](https://projects.upstatement.com/projects/5W8EfKaN0WcW864a/)
- [Contributor Guidelines](CONTRIBUTING.md)
- [Technical Platform](https://docs.google.com/document/d/1dQtV2awTPZ1DU3H_OKOsz_sQQdHta1Of-DBZTbcUf9U)

## Getting Started

### Prerequisites

- [Node](https://nodejs.org/en) — ([installation instructions](https://nodejs.org/en/download/))
- [Yarn](https://yarnpkg.com/) — ([installation instructions](https://yarnpkg.com/docs/install))
- [nvm](https://github.com/creationix/nvm) — ([installation instructions](https://github.com/creationix/nvm#installation))

### Bootstrapping the environment

```bash
# Clone the repository
cd <sites-directory>
git clone git@github.com:Upstatement/fmi-react.git
cd fmi-react

# Install the project Node version
nvm install
nvm use

# Install all project dependencies
yarn install

# Bootstrap the Contentful setup (see below)

# Spin up the server
npm start
```

### Bootstrapping the Contentful setup

Find the `env` file in [Dropbox](https://www.dropbox.com/work/Upstatement%20Team%20Folder/clients/foundation%20medicine/04.%20Engineering/env-config) and copy it into the root directory of your local repository, renaming it `.env`.

This file will not be tracked via git since it contains environment variables and Contentful API tokens that may vary between each contributor or environment. You can find more about the contents of this file in the [Technical Platform](https://docs.google.com/document/d/1dQtV2awTPZ1DU3H_OKOsz_sQQdHta1Of-DBZTbcUf9U) documentation.

### Common Commands

- `npm start` - start the application server (client-side rendering only) and watch source files for changes to recompile
- `npm start -- --universal` - start the application server (universal rendering) and watch source files for changes to recompile
- `npm start:production` - build and run the site in production mode
- `npm run build` - compile the application scripts and stylesheets, move static assets into dist
- `npm run lint` - lint all JavaScript files via eslint and SCSS files via stylelint

- `npm test` - run all acceptance and unit tests
- `npm test -- --watch` - run all tets and watch for changes to restart tests
- `npm test -- --acceptance` - run acceptance tests only
- `npm test -- --unit` - run unit tests only
- `npm test -- --components=<component file names>` - runs tests only for specific components or libs
