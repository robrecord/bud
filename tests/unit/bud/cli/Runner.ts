/* eslint-disable no-console */
import {Runner} from '@roots/bud/src/cli/Runner'
import {Framework} from '@roots/bud-framework'

import {mocks} from './__mocks__/index'

describe('Runner', () => {
  let runner: Runner
  let bud: Framework

  beforeEach(async () => {
    bud = mocks.bud as unknown as Framework
    runner = new Runner({args: [], flags: {}}, null, bud)
  })

  afterEach(() => {
    // spies
    jest.restoreAllMocks()
    // mocked fn
    jest.clearAllMocks()
  })

  it('make', () => {
    expect(runner.make).toBeInstanceOf(Function)
  })

  it('build', () => {
    expect(runner.build).toBeInstanceOf(Function)
  })

  it('setEnv', () => {
    expect(runner.setEnv).toBeInstanceOf(Function)
  })

  it('app property matches mock', () => {
    expect(runner.app).toMatchSnapshot(bud)
  })

  it('has options property', () => {
    expect(runner.options).toBeDefined()
  })

  it('has cli property', () => {
    expect(runner.cli).toBeDefined()
  })

  it('setEnv sets process.env.NODE_ENV', () => {
    runner.setEnv('production')
    expect(process.env.NODE_ENV).toBe('production')
  })

  it('setEnv sets process.env.BABEL_ENV', () => {
    runner.setEnv('development')
    expect(process.env.BABEL_ENV).toBe('development')
  })
})