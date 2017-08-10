FMI Contentful Scripts
======================

This repository contains scripts and utilities for working with Contentful.


## Spaces

Each developer on this project will work in their own contentful space that will be synced to the canonical source space `production`. A developer should create a space in the contentful admin


You'll need to create a space in the contentful admin before you begin development.


## imports-exports

These scripts allow us to export and import from spaces.

### Commands

#### Create a new space and import content from production source space

`npm run create-space -- <options>`

Options:
```
--name=<destination space name>

# to prevent syncing content to this new space
--noSync
```

#### Import From `content-exports/` to any space

`npm run import-space -- <options>`

Options:
```
--dest=<destination spaceId>
--file=<filename to use>
```

#### Export from production space to `content-exports/`

`npm run export-space -- <options>`

Options:
```
--spaceName=<destination user space name>
# ex. mitchell, chris, keri, james
```

#### Sync from production space to any space

`npm run sync-space -- <options>`

Options:
```
--spaceName=<destination user space name>
# ex. mitchell, chris, keri, james
```

__note: sync should to sync your sandbox with the production source__

## Deploying new features

We will follow a modified version of the multiple spaces workflow described in [Managing Multiple Spaces](https://www.contentful.com/developers/docs/concepts/multiple-environments/).

In short:
1. Make changes to the production source.
2. Test and deploy your changes.
3. Duplicate the production source to a new production space: prod-<date>
4. Update the configuration space to point production to the new production space.
