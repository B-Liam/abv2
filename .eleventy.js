const embedEverything = require("eleventy-plugin-embed-everything");
const markdownShortcode = require("eleventy-plugin-markdown-shortcode");

module.exports = function(eleventyConfig) {
    let markdownIt = require("markdown-it");
    let options = {
        html: true,
        breaks: true,
        linkify: true
      };
    eleventyConfig.setLibrary("md", markdownIt(options));
    eleventyConfig.addShortcode("liamMark", function(text) {
        var md = require('markdown-it')({html:true,breaks:true,linkify:true});
        var result = md.render(text);
            return result;
      });
    eleventyConfig.addPlugin(markdownShortcode);
    eleventyConfig.addPassthroughCopy("src/_redirects");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPlugin(embedEverything);
    return  {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data"
        }
    };
};