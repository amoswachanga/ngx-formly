const fs = require("fs"),
  packages = [
    'core',
    'bootstrap',
    'material',
  ];

// update `FORMLY-VERSION` in package.json for all sub-packages
const version = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;
packages.map(package => {
  const packagePath = `dist/${package}/package.json`;
  package = fs.readFileSync(packagePath, 'utf8');
  fs.writeFileSync(packagePath, package.replace(/FORMLY-VERSION/g, version));
});
