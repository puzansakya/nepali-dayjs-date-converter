const { build } = require("esbuild");
const { dependencies, peerDependencies, devDependencies } = require('../package.json');
const { Generator } = require('npm-dts');

new Generator({
    entry: 'src/index.ts',
    output: 'build/index.d.ts',
}).generate();

let external_deps = [];

if (dependencies) {
    external_deps = external_deps.concat(Object.keys(dependencies))
}
if (peerDependencies) {
    external_deps = external_deps.concat(Object.keys(peerDependencies))
}
if (devDependencies) {
    external_deps = external_deps.concat(Object.keys(devDependencies))
}

const sharedConfig = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    external: external_deps
};

build({
    ...sharedConfig,
    platform: 'node', // for CJS
    outfile: "build/index.js",
});

build({
    ...sharedConfig,
    outfile: "build/index.esm.js",
    platform: 'node', // for ESM
    format: "esm",
});