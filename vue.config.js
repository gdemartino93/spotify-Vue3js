module.exports = {
    configureWebpack: config => {
      config.output.globalObject = 'this';
      config.output.libraryTarget = 'umd';
      config.output.library = 'myLibrary';
      config.output.filename = '[name].js';
      config.output.chunkFilename = '[name].js';
      config.output.umdNamedDefine = true;
      config.output.sourceMap = true;
      config.output.path = path.resolve(__dirname, 'dist');
    },
    chainWebpack: config => {
      config.optimization.splitChunks({
        cacheGroups: {
          vendors: {
            priority: -10,
            test: /[\\/]node_modules[\\/]/
          }
        },
        chunks: 'async',
        minChunks: 1,
        minSize: 30000,
        name: true
      });
      config.optimization.runtimeChunk('single');
    },
    transpileDependencies: [
      'vuetify'
    ],
    productionSourceMap: false
  };