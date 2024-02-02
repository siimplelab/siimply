// const sassPlugin = require("eleventy-sass");

module.exports = function(eleventyConfig) {
  // eleventyConfig.addPlugin(sassPlugin);
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  };
};


