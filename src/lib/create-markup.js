/* eslint-disable no-unneeded-ternary */
import serializeEnv from 'lib/serialize-env';

/**
 * Create Markup
 * * Generate the markup for responses to the client
 * * If no content, application will just render on the client
 * @param {string} content - The rendered React markup
 */
export default function ({ content = '', serializedData = '', previewToken = '', helmet = null }) {
  // if rendering server-side, pass in serialized data for the page
  const preloadedData = serializedData ? serializedData : undefined;

  // if previewing unpublished content and authorized, include the contentful api preview token
  const includePreviewToken = previewToken ? `window.PREVIEW_TOKEN = '${previewToken}';` : '';

  const environment = serializeEnv();

  return `
    <!DOCTYPE html>
    <html lang="en" ${helmet ? helmet.htmlAttributes.toString() : ''}>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="alternate" type="application/atom+xml" href="/feed" />

      ${helmet ? helmet.title.toString() : '<title>Foundation Medicine Incorporated</title>'}

      <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6062776/7773772/css/fonts.css" />
      <link rel="stylesheet" href="/index.css?v=${process.env.version}">

      <!-- Favicons & App Icons -->
      <link rel="apple-touch-icon" sizes="57x57" href="/img/touch-icons/apple-touch-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="60x60" href="/img/touch-icons/apple-touch-icon-60x60.png">
      <link rel="apple-touch-icon" sizes="72x72" href="/img/touch-icons/apple-touch-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="76x76" href="/img/touch-icons/apple-touch-icon-76x76.png">
      <link rel="apple-touch-icon" sizes="114x114" href="/img/touch-icons/apple-touch-icon-114x114.png">
      <link rel="apple-touch-icon" sizes="120x120" href="/img/touch-icons/apple-touch-icon-120x120.png">
      <link rel="apple-touch-icon" sizes="144x144" href="/img/touch-icons/apple-touch-icon-144x144.png">
      <link rel="apple-touch-icon" sizes="152x152" href="/img/touch-icons/apple-touch-icon-152x152.png">
      <link rel="apple-touch-icon" sizes="180x180" href="/img/touch-icons/apple-touch-icon-180x180.png">
      <link rel="icon" type="image/png" href="/img/touch-icons/favicon-32x32.png" sizes="32x32">
      <link rel="icon" type="image/png" href="/img/touch-icons/favicon-96x96.png" sizes="96x96">
      <link rel="icon" type="image/png" href="/img/touch-icons/favicon-16x16.png" sizes="16x16">
      <link rel="shortcut icon" href="/img/touch-icons/favicon.ico">

      ${helmet ? helmet.meta.toString() : ''}
      ${helmet ? helmet.link.toString() : ''}

      <script src="//js.hs-scripts.com/174278.js" type="text/javascript" id="hs-script-loader" async defer></script>
    </head>
    <body>
      <div id="fmi-react">${content}</div>
      <script>
        ${includePreviewToken}
        window.__PRELOADED_DATA__ = ${preloadedData};
        window.process = { env: ${environment} };
        if (Object.freeze) {
          Object.freeze(process);
          Object.freeze(process.env);
        }
      </script>
      <script src="/index.js"></script>
    </body>
    </html>
  `;
}
