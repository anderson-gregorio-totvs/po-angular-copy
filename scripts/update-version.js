const fs = require('fs');

const packageDistPath = `${__dirname}/../package.json`;
const packageContent = fs.readFileSync(packageDistPath);
const packageJson = JSON.parse(packageContent);

if (process.argv.length != 4){
  console.error('Expected at least one argument!');
  process.exit(1);
}

const versaoBeta = process.argv[2];
const versaoPoStyle= process.argv[3];

packageJson.version = versaoBeta;
packageJson.dependencies['@po-ui/style'] = versaoPoStyle;

fs.writeFileSync(packageDistPath, JSON.stringify(packageJson, null, 2));


console.log(JSON.stringify(packageJson, null, 2))
