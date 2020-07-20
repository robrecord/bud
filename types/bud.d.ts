import { configs } from "./base/configs";
import { features } from "./base/features";
import { Hooks } from "./base/hooks";
import { options } from "./base/options";
import { paths } from "./base/paths";
import { alias } from "./api/alias";
import { auto } from "./api/auto";
import { babel } from "./api/babel";
import { bundle } from "./api/bundle";
import { copy } from "./api/copy";
import { copyAll } from "./api/copyAll";
import { dashboard } from "./api/dashboard";
import { debug } from "./api/debug";
import { dependencyManifest } from "./api/dependencyManifest";
import { dev } from "./api/dev";
import { devtool } from "./api/devtool";
import { dist } from "./api/dist";
import { distPath } from "./api/distPath";
import { dump } from "./api/dump";
import { env } from "./api/env";
import { hash } from "./api/hash";
import { hot } from "./api/hot";
import { inlineManifest } from "./api/inlineManifest";
import { map } from './api/map';
import { mini } from "./api/mini";
import { postCss } from "./api/postcss";
import { preset } from "./api/preset";
import { project } from "./api/project";
import { projectPath } from "./api/projectPath";
import { publicPath } from "./api/publicPath";
import { purge } from "./api/purge";
import { register } from "./api/register";
import { setEnv } from "./api/setEnv";
import { src } from "./api/src";
import { srcPath } from "./api/srcPath";
import { sync } from "./api/sync";
import { target } from "./api/target";
import { translate } from "./api/translate";
import { vendor } from "./api/vendor";
import { watch } from "./api/watch";
export declare type bud = {
    configs: configs;
    features: features;
    inProduction: any;
    mode: any;
    options: options;
    hooks: Hooks;
    paths: paths;
    alias: alias;
    auto: auto;
    babel: babel;
    bundle: bundle;
    copy: copy;
    copyAll: copyAll;
    dashboard: dashboard;
    debug: debug;
    dependencyManifest: dependencyManifest;
    dev: dev;
    devtool: devtool;
    dist: dist;
    distPath: distPath;
    dump: dump;
    env: env;
    hash: hash;
    hot: hot;
    inlineManifest: inlineManifest;
    map: map;
    mini: mini;
    plugins: any;
    postCss: postCss;
    preset: preset;
    project: project;
    projectPath: projectPath;
    publicPath: publicPath;
    purge: purge;
    register: register;
    setEnv: setEnv;
    src: src;
    srcPath: srcPath;
    sync: sync;
    target: target;
    translate: translate;
    vendor: vendor;
    watch: watch;
    webpackPlugins: any;
};