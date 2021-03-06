export default {
  treeShaking: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: true,
        },
        antd: true,
        routes: {
          exclude: [
            /components\//,
            /hooks\//,
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
          ],
        },
        locale: {},
        dynamicImport: {
          webpackChunkName: true,
        },
        dll: false,
        hardSource: false,
        pwa: false,
        hd: false,
        fastClick: false,
        title: 'learn-mapbox',
      },
    ],
  ],
  history: 'hash',
  targets: {
    ie: 9,
  },
  chainWebpack: function(config) {
    config.module
      .rule('workerize')
      .test(/\.workerize\.js$/i)
      .use('workerize')
      .loader('workerize-loader')
      .end();
    config.output.globalObject('this');
  },
  theme: {
    '@border-radius-base': '2px',
    '@table-padding-vertical': '10px',
    '@table-padding-horizontal': '12px',
  },
  define: {
    'process.env.MapboxAccessToken': process.env.MapboxAccessToken,
  },
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'react-use', libraryDirectory: 'lib', camel2DashComponentName: false },
    ],
  ],
};
