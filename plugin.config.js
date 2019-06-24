const path = require('path');

module.exports = {
  entry: 'src/lib/index.ts',
  babel: true,
  typescript: {
    tsconfigOverride: {
      include: [path.join(__dirname, 'src/lib/**/*')],
      exclude: [path.join(__dirname, 'types')],
    },
  },
  vue: true,
  sass: false,
  postcss: false,
  autoprefixer: false,
  external: [
    'vue',
    '@dadajam4/scroller',
    '@dadajam4/ev',
    '@dadajam4/visibility',
  ],
  globals: {
    vue: 'Vue',
    '@dadajam4/scroller': 'Scroller',
    '@dadajam4/event': 'EV',
    '@dadajam4/visibility': 'Visibility',
  },
};
