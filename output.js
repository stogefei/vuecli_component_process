[
  {
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  }
] ag
{
  mode: 'development',
  context: '/Users/aofeizhu/bpmn-project/vue_component_core',
  output: {
    hashFunction: 'xxhash64',
    path: '/Users/aofeizhu/bpmn-project/vue_component_core/dist',
    filename: 'js/[name].js',
    publicPath: '../',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': '/Users/aofeizhu/bpmn-project/vue_component_core/src',
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@packages': '/Users/aofeizhu/bpmn-project/vue_component_core/packages',
      '@utils': '/Users/aofeizhu/bpmn-project/vue_component_core/utils'
    },
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.vue',
      '...'
    ],
    modules: [
      'node_modules',
      '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules',
      '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/@vue+cli-service@5.0.8_oi6gni4mbx65zxrlkxfyvpnite/node_modules/@vue/cli-service/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/@vue+cli-plugin-typescript@5.0.8_7tv3dvral2be6g4s2g7danwmge/node_modules/@vue/cli-plugin-typescript/node_modules',
      '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/@vue+cli-plugin-babel@5.0.8_x2swguav2dw6raoqpp7dhkszkq/node_modules/@vue/cli-plugin-babel/node_modules',
      '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/@vue+cli-service@5.0.8_oi6gni4mbx65zxrlkxfyvpnite/node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat',
      'node_modules',
      '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules',
      '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/@vue+cli-service@5.0.8_oi6gni4mbx65zxrlkxfyvpnite/node_modules/@vue/cli-service/node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('esm') */
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false
        }
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/vue-loader@15.11.1_526zd27ytvz6az6e6fjqep65g4/node_modules/vue-loader/lib/index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              }
            }
          }
        ]
      },
      /* config.module.rule('vue-style') */
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name][ext]'
        }
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/less-loader@8.1.1_less@3.13.1/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  lessOptions: {
                    javascriptEnabled: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/less-loader@8.1.1_less@3.13.1/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  lessOptions: {
                    javascriptEnabled: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/less-loader@8.1.1_less@3.13.1/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  lessOptions: {
                    javascriptEnabled: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/less-loader@8.1.1_less@3.13.1/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  lessOptions: {
                    javascriptEnabled: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: 'css/main.css',
                    auto: () => false
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/postcss-loader@6.2.1_h7ybz3vosd2sabh3expkxy422u/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/babel-loader@8.3.0_z5hqyrl7ys5omqq6tawbtvekhm/node_modules/babel-loader/lib/index.js',
            options: {
              cacheCompression: false,
              cacheDirectory: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.cache/babel-loader',
              cacheIdentifier: '08fc14bc'
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/babel-loader@8.3.0_z5hqyrl7ys5omqq6tawbtvekhm/node_modules/babel-loader/lib/index.js'
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/ts-loader@9.5.1_bytkbgm6m5azloznfowfigw324/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: false
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/babel-loader@8.3.0_z5hqyrl7ys5omqq6tawbtvekhm/node_modules/babel-loader/lib/index.js'
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/ts-loader@9.5.1_bytkbgm6m5azloznfowfigw324/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    realContentHash: false,
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin(
        {
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          },
          parallel: true,
          extractComments: false
        }
      ),
      /* config.optimization.minimizer('css') */
      new CssMinimizerPlugin(
        {
          parallel: true,
          minimizerOptions: {
            preset: [
              'default',
              {
                mergeLonghand: false,
                cssDeclarationSorter: false
              }
            ]
          }
        }
      )
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"../"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'vue_component_core',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        template: '/Users/aofeizhu/bpmn-project/vue_component_core/public/index.html'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      {
        patterns: [
          {
            from: '/Users/aofeizhu/bpmn-project/vue_component_core/public',
            to: '/Users/aofeizhu/bpmn-project/vue_component_core/dist',
            toType: 'dir',
            noErrorOnMissing: true,
            globOptions: {
              ignore: [
                '**/.DS_Store',
                '/Users/aofeizhu/bpmn-project/vue_component_core/public/index.html'
              ]
            },
            info: {
              minimized: true
            }
          }
        ]
      }
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: '/Users/aofeizhu/bpmn-project/vue_component_core/node_modules/.pnpm/vue@2.7.16/node_modules/vue/compiler-sfc/index.js'
            }
          },
          diagnosticOptions: {
            semantic: true,
            syntactic: false
          }
        }
      }
    )
  ],
  entry: {
    app: [
      './src/main.ts'
    ]
  },
  externals: {
    pinia: 'pinia',
    'ant-design-vue': 'ant-design-vue'
  }
}
