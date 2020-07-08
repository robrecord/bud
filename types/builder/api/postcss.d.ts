/**
 * Configure PostCSS.
 *
 * If you prefer, you may utilize a postcss.config.js file in the project root,
 * either alongside or in lieue of this configuration.
 *
 * Conflicts between supplied configs will be resolved in favor of bud.config.js.
 */
export type postCss = (arg0: {
    enabled: boolean;
    plugins: any[];
}) => {
    bud: import('./../index');
};
/**
 * Configure PostCSS.
 *
 * If you prefer, you may utilize a postcss.config.js file in the project root,
 * either alongside or in lieue of this configuration.
 *
 * Conflicts between supplied configs will be resolved in favor of bud.config.js.
 *
 * @typedef {function ({enabled: boolean, plugins: array}) => {bud: import('./../index')}} postCss
 * @param   {{enabled: boolean, plugins: array}} options
 * @param   {boolean}  options.enabled
 * @param   {array}    options.plugins
 * @return  {import('./../index')} bud
 */
export function postCss(options: {
    enabled: boolean;
    plugins: any[];
}): import('./../index');
//# sourceMappingURL=postcss.d.ts.map