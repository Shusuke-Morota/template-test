const httpProxy = require('http-proxy');

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/');
  const pathPrefix = '/';

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (_err, browserSync) {
        const proxy = httpProxy.createProxyServer();

        browserSync.addMiddleware('*', (req, res) => {
          proxy.web(req, res, { target: 'http://localhost:3000' });
        });
      },
    },
  });

  return {
    dir: {
      input: 'src/template',
      output: 'dist',
      includes: '_includes',
      data: '_data',
    },
    pathPrefix: pathPrefix,
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
