const { DateTime } = require('luxon');


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
  config.addCollection('posts', collection => {
  return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
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
