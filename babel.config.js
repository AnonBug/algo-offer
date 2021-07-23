/* jest 支持 import 写法
  https://github.com/twn39/code/issues/295
*/

// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};