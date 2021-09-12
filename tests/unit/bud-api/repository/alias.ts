import {factory, Framework} from '@roots/bud'
import alias from '@roots/bud-api/src/Api/Repository/alias'

describe('webpack.resolve.alias', function () {
  let bud: Framework

  beforeAll(() => {
    bud = factory()
  })

  afterAll(done => {
    bud.close(done)
  })

  it('is a function', () => {
    expect(alias).toBeInstanceOf(Function)
  })

  it('is configurable by bud.alias', () => {
    alias.bind(bud)({'@foo': 'bar'})

    expect(bud.build.config.resolve.alias).toEqual({
      '@foo': bud.path('project', 'bar'),
    })
  })
})
