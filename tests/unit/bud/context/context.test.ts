import {Bud, factory} from '@repo/test-kit/bud'

describe('unit', function () {
  describe('context', () => {
    let bud: Bud

    beforeAll(async () => {
      bud = await factory()
    })

    it('has expected context.disk', () => {
      expect(bud.context.disk.config).toStrictEqual({
        '.eslintrc.js': expect.stringContaining('project/.eslintrc.js'),
        'bud.config.cjs': expect.stringContaining(
          'project/bud.config.cjs',
        ),
        'docker-compose.yml': expect.stringContaining(
          'project/docker-compose.yml',
        ),
        'package.json': expect.stringContaining('project/package.json'),
        'tailwind.config.js': expect.stringContaining(
          'project/tailwind.config.js',
        ),
        'tsconfig.json': expect.stringContaining('project/tsconfig.json'),
      })
    })
  })
})
