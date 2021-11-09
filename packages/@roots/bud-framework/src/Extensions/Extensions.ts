import {Service} from '../'
import {CompilerPlugin, Module} from './Extension'

/**
 * Extensions Service interface
 *
 * @core @public @container
 */
export interface Extensions extends Service {
  /**
   * Extensions to be processed before build
   *
   * @public
   */
  queue: Array<CompilerPlugin | Module>

  /**
   * Add an extension
   *
   * @public
   */
  add(extension: CompilerPlugin | Module): Promise<void>

  /**
   * @public
   */
  enqueue(extension: CompilerPlugin | Module): void

  /**
   * Register event for all extensions
   *
   * @public
   */
  registerExtensions(): Promise<void>

  /**
   * Boot event for all extensions
   *
   * @public
   */
  bootExtensions(): Promise<void>

  /**
   * Get {@link ApplyPlugin} instances to be included in compilation
   *
   * @public
   */
  make(): {[key: string]: any; apply: CallableFunction}[]

  /**
   * @public
   */
  processQueue(): Promise<void>
}
