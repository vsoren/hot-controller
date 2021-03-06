const { findConfig, loadConfig } = require('shuri');

const configName = '.controllersrc';
const pkgField = 'controllers';

function getOptions(cwd = process.cwd()) {
  const defaultConfig = {
    distDir: 'dist/controllers',
    dir: 'controllers'
  };

  return new Promise(resolve => {
    findConfig(cwd, { configName, pkgField }).then(configFile => {
      if (configFile !== null) {
        loadConfig(configFile, { pkgField }).then(config => {
          resolve(Object.assign(defaultConfig, config));
        });
      } else {
        resolve(defaultConfig);
      }
    });
  });
}

module.exports = getOptions;
