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

  // Collections
  // config.addCollection('posts', collection => {
  //   return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  // });

  config.addCollection('posts', collection => {
    if (process.env.ELEVENTY_ENV !== 'production')
      return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    else
      return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse()
      .filter((post) => !post.data.draft)
  })

  // Minify
  config.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Set directories to pass through to the public folder
  config.addPassthroughCopy('./src/uploads/');

  // Limit amount of items displayed
  config.addFilter('limit', function (arr, limit) {
    return arr.slice(0, limit);
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
