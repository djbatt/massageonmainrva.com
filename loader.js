function imageLoader({ src }) {
    return `/public/${src}`; // REPLACE WITH YOUR IMAGE DIRECTORY
  }
  
  module.exports = imageLoader;