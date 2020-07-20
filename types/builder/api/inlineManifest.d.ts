/**
 * Inline commons scripts.
 *
 * ```js
 * bud.inlineManifest({name: 'runtime'})
 * ```
 */
declare const inlineManifest: InlineManifest;
export { inlineManifest };
import type { bud } from '../';
export interface InlineManifestOptions {
    name?: string;
}
export declare type InlineManifest = (InlineManifestOptions: any) => bud;