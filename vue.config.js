module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/styles/_variables.scss";
        @import "@/styles/base.scss";
        `
      }
    }
  }
};