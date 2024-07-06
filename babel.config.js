module.exports = {
  presets: [
    [
      '@vue/app',
      {
        jsx: {
          compositionAPI: true,
        },
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: 3,
      },
    ],
    ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }]
  ]
}
