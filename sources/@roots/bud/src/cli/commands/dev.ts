import {Command} from 'clipanion'

import {BuildCommand} from './build.js'

/**
 * @public
 */
export class DevCommand extends BuildCommand {
  public static paths = [[`dev`], [`serve`]]

  public static usage = Command.Usage({
    category: `Compile`,
    description: `Compile and serve source assets`,
    examples: [
      [`Start dev server and compile assets in dev mode`, `$0 dev`],
      [
        `Limit to one or more target compilers`,
        `$0 dev --target [compiler-name]`,
      ],
    ],
  })

  /**
   * --mode
   */
  public mode: 'development' = 'development'
}
