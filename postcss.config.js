module.exports = {
    modules: true,
    plugins: {
      'postcss-import': {},
      'postcss-css-variables': {},
      'autoprefixer': {
        grid: 'autoplace'
      },
      'cssnano': {
        preset: 'default'
      },
      'postcss-reporter': {}
    },
    map: true
  }