module.exports = {
  presets: [['@babel/preset-env'], ['@babel/preset-react'], ['@babel/preset-typescript']],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/plugin-transform-runtime',
    [
      'import',
      {
        libraryName: 'jim-lin-ui',
        libraryDirectory: 'lib',
        style: true,
      },
    ],
  ],
  env: {
    esm: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            useBuiltIns: 'entry',
            corejs: '3.24',
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true, // 使用esm形式的helper
          },
        ],
      ],
    },
  },
};
