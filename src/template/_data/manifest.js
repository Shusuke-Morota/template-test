const fs = require('fs').promises;

module.exports = async () => {
  let file = null;

  if (process.env.NODE_ENV === 'production') {
    file = JSON.parse(await fs.readFile('dist/manifest.json'));
  }

  return file;
};
