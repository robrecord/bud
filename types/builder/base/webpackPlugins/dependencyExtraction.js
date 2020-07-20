"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.dependencyExtraction = void 0;
var dependency_extraction_webpack_plugin_1 = __importDefault(require("@wordpress/dependency-extraction-webpack-plugin"));
var dependencyExtraction = function (bud) { return ({
    options: bud.options.dependencyManifest,
    make: function () {
        return new dependency_extraction_webpack_plugin_1["default"](this.options);
    },
    when: function () {
        return this.bud.features.dependencyManifest;
    }
}); };
exports.dependencyExtraction = dependencyExtraction;