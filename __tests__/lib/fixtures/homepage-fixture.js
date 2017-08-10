import { blogModuleFixture } from './blog-module-fixture';
import { mediaModuleFixtureNoVideo, mediaModuleFixtureVideo } from './media-module-fixture';
import { storyBlockFixture } from './story-block-fixture';
import assetFixture from './asset-fixture';

export default {
  sys: {
    type: 'Array',
  },
  total: 1,
  skip: 0,
  limit: 100,
  items: [
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 't9yfje9x18mx',
          },
        },
        id: '4fNZqTyIE04mcaQmGkEKG4',
        type: 'Entry',
        createdAt: '2017-01-10T17:11:53.950Z',
        updatedAt: '2017-01-11T15:07:45.628Z',
        revision: 3,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'homePage',
          },
        },
        locale: 'en-US',
      },
      fields: {
        pageTitle: 'Home',
        heroImage: assetFixture,
        heroHeading: 'Nam imperdiet vehicula tortor vitae venenatis',
        heroText: 'Mauris aliquet, massa in eleifend elementum, metus sapien vulputate augue, at fermentum lorem velit vitae felis.',
        heroPreface: 'Praesent egestas elit in posuere luctus. Aenean suscipit quam lacinia, vulputate nisl quis, dictum metus. Aenean id lacus iaculis, ultricies risus nec, auctor libero. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        todayStoryBlocks: [storyBlockFixture, storyBlockFixture],
        tomorrowStoryBlocks: [storyBlockFixture, storyBlockFixture],
        togetherStoryBlocks: [storyBlockFixture, storyBlockFixture],
        homeModuleInterstitials: [mediaModuleFixtureNoVideo, mediaModuleFixtureVideo, blogModuleFixture],
      },
    },
  ],
};
