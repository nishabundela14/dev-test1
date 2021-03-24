module.exports = {
    entry: ['./widget/index.js', './widget/style.css'],
    mode: 'development',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              'style-loader', // Creates `style` nodes from JS strings
              'css-loader', // Translates CSS into CommonJS
            ],
          }
        ],
      },
  };