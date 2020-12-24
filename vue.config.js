module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {

      postcss: {
        plugins: [
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('postcss-px2rem')({
            remUnit: 100
          })
        ]
      }
    }
  }
}
