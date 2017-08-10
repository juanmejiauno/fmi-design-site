import React from 'react';
import BlogModule from 'components/FlexModule/BlogModule';
import MediaModule from 'components/FlexModule/MediaModule';

function FlexModule({ entry, className }) {
  const contentType = entry.sys.contentType.sys.id;

  if (['blogModule', 'basicArticle'].includes(contentType)) return <BlogModule entry={entry} className={`${className} flex-module--blog-module`} />;
  if (contentType === 'mediaModule') return <MediaModule entry={entry} className={`${className} flex-module--media-module`} />;
  return null;
}

export default FlexModule;
