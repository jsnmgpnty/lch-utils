const path = require('path');

export default {
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: {
      name: 'lchColorUtils',
    },
  },
};
