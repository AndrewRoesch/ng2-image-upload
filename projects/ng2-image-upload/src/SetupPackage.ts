const fs = require('fs');

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {
    const outerPack = fs.readFileSync(__dirname + "/../../../package.json").toString('utf-8');
    const source = fs.readFileSync(__dirname + "/../package.json").toString('utf-8');
    const sourceObj = JSON.parse(source);
    const outerPackObj = JSON.parse(outerPack);

    sourceObj.version = outerPackObj.version;
    sourceObj.scripts = {};
    sourceObj.devDependencies = {};
    fs.writeFileSync(__dirname + "/../../../dist/package.json", Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8") );
    fs.writeFileSync(__dirname + "/../../../dist/version.txt", Buffer.from(outerPackObj.version, "utf-8") );

    fs.copyFileSync(__dirname + "/../../.npmignore", __dirname + "/../../../dist/.npmignore");
}

main();