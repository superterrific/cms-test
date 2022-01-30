const { DateTime } = require('luxon');
const CleanCSS = require('clean-css');

module.exports = config => {

  // Date filters
  config.addFilter('longDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('LLLL dd, yyyy');
  });

  config.addFilter('isoDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  config.addFilter('w3Date', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toISO();
  });

  // to make posts list newest first add '.reverse(); to the end of each line that starts with 'return'
  config.addCollection('posts', collection => {
    if (process.env.ELEVENTY_ENV !== 'production')
      return [...collection.getFilteredByGlob('./src/posts/*.md')];
    else
      return [...collection.getFilteredByGlob('./src/posts/*.md')].filter((post) => !post.data.draft);
  });

  // Minify
  config.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Set directories to pass through to the public folder
  config.addPassthroughCopy('./src/img/');
  config.addPassthroughCopy('./src/admin/');

  // Limit amount of items displayed
  config.addFilter('limit', function (arr, limit) {
    return arr.slice(0, limit);
  });

  // Open the browser on launch
  config.setBrowserSyncConfig({
    open: true,
    ghostMode: false
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public'
    }
  };
};
