## API Report File for "@roots/bud-cache"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as Bud from '@roots/bud-framework';

// @public
class Cache_2 extends Bud.Cache.Abstract implements Bud.Cache.Interface {
    // (undocumented)
    boot(): Promise<void>;
    // (undocumented)
    directory: string;
    get enabled(): boolean;
    // (undocumented)
    hashFileContents(): Promise<string>;
    get type(): 'memory' | 'filesystem' | false;
    // (undocumented)
    version: string;
}
export { Cache_2 as Cache }

```