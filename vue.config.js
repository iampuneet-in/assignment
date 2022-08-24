const path = require('path');

module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src/'),
        },
        extensions: ['.js', '.vue', '.json'],
      },
      devServer: {
        host: '0.0.0.0',
        public: '0.0.0.0:8080',
        port: 8080,
        watchOptions: {
          poll: true,
        },
        overlay: true,
        disableHostCheck: true,
        },
    },
};