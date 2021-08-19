import * as execa from 'execa'
import {readFile} from 'fs-extra'
import {join} from 'path'

jest.setTimeout(60000)

describe('node-api', () => {
  beforeAll(async () => {
    await execa('yarn', ['node', './bud.config.js'], {
      cwd: `${process.cwd()}/examples/node-api`,
    })
  })

  describe('snapshots', () => {
    it('package.json', async () => {
      const artifact = await readFile(
        join(process.cwd(), 'examples/node-api/package.json'),
      )

      expect(artifact.toString()).toMatchSnapshot()
    })

    it('dist/manifest.json', async () => {
      const artifact = await readFile(
        join(
          process.cwd(),
          'examples/node-api/dist/manifest.json',
        ),
      )

      expect(artifact.toString()).toMatchSnapshot()
    })

    it('dist/app.js', async () => {
      const artifact = await readFile(
        join(process.cwd(), 'examples/node-api/dist/app.js'),
      )

      expect(artifact.toString()).toMatchSnapshot()
    })

    it('.budfiles/bud.webpack.config.js', async () => {
      let artifact = await import(
        join(
          process.cwd(),
          'examples/node-api/.budfiles/bud.webpack.config.js',
        )
      )

      artifact = artifact()

      expect(artifact.entry).toMatchSnapshot()
      expect(artifact.mode).toMatchSnapshot()
      expect(artifact.optimization).toMatchSnapshot()
      expect(artifact.bail).toMatchSnapshot()
      expect(artifact.cache).toMatchSnapshot()
    })
  })
})
