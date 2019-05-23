module.exports = {
    modules: true,
    plugins: {
      'postcss-import': {},
      'postcss-css-variables': {},
      'autoprefixer': {
        grid: 'autoplace'
      },
      'postcss-reporter': {}
    },
    map: true
  }