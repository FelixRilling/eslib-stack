"use strict";

const rollup = require("rollup");
const babel = require("babel-core");
const uglify = require("uglify-es");
const saveOutput = require("./lib/saveOutput");
const packageJson = require("../package.json");
const {
    DIR_SRC,
    DIR_DIST
} = require("./lib/constants");

const saveEs = function (bundle) {
    const result = bundle.generate({
        format: "es"
    });

    saveOutput(`${DIR_DIST}/${packageJson.namespace.file}.esm.js`, result.code, "JS:ES");
};

const saveCjs = function (bundle) {
    const result = bundle.generate({
        format: "cjs"
    });

    saveOutput(`${DIR_DIST}/${packageJson.namespace.file}.common.js`, result.code, "JS:CommonJS");
};

const saveBrowser = function (bundle) {
    const result = bundle.generate({
        moduleName: packageJson.namespace.module,
        format: "iife"
    });

    saveOutput(`${DIR_DIST}/${packageJson.namespace.file}.js`, result.code, "JS:IIFE");
};

rollup
    .rollup({
        entry: `${DIR_SRC}/main.js`,
        plugins: []
    })
    .catch(err => {
        throw err;
    })
    .then(bundle => {
        saveEs(bundle);
        saveCjs(bundle);
        saveBrowser(bundle);
    });
