/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-kjo",
factory: function (require) {
var plugin = (() => {
  var F = Object.create,
    m = Object.defineProperty
  var M = Object.getOwnPropertyDescriptor
  var I = Object.getOwnPropertyNames
  var R = Object.getPrototypeOf,
    T = Object.prototype.hasOwnProperty
  var E = e => m(e, '__esModule', {value: !0})
  var s = e => {
    if (typeof require != 'undefined') return require(e)
    throw new Error(
      'Dynamic require of "' + e + '" is not supported',
    )
  }
  var K = (e, t) => {
      for (var i in t) m(e, i, {get: t[i], enumerable: !0})
    },
    W = (e, t, i) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let n of I(t))
          !T.call(e, n) &&
            n !== 'default' &&
            m(e, n, {
              get: () => t[n],
              enumerable: !(i = M(t, n)) || i.enumerable,
            })
      return e
    },
    r = e =>
      W(
        E(
          m(
            e != null ? F(R(e)) : {},
            'default',
            e && e.__esModule && 'default' in e
              ? {get: () => e.default, enumerable: !0}
              : {value: e, enumerable: !0},
          ),
        ),
        e,
      )
  var D = {}
  K(D, {default: () => z})
  var v = r(s('@yarnpkg/cli')),
    C = r(s('@yarnpkg/core')),
    B = r(s('@yarnpkg/shell')),
    P = 1,
    p = 0,
    a = class extends v.BaseCommand {
      async getManifest() {
        return await C.Manifest.tryFind(this.context.cwd)
      }
      async $(t) {
        let i
        return (
          Array.isArray(t)
            ? (i = await t.reduce(
                this.sequential.bind(this),
                this.promiseOK(),
              ))
            : (i = await this.runTask(t)),
          this.taskFailed(i) && process.exit(P),
          Promise.resolve(p)
        )
      }
      async sequential(t, i) {
        let n = await t
        return this.taskFailed(n) ? P : this.$(i)
      }
      runTask(t) {
        let [i, ...n] = t.split(' ')
        return (0, B.execute)(i, n)
      }
      taskFailed(t) {
        return Array.isArray(t)
          ? t.filter(i => i !== p).length > 0
          : t !== p
      }
      async promiseOK() {
        return p
      }
    }
  a.usage = {category: 'kjo'}
  var j = r(s('clipanion')),
    h = class extends a {
      constructor() {
        super(...arguments)
        this.cjs = j.Option.Boolean('-c,--cjs', !1)
        this.esm = j.Option.Boolean('-e,--esm', !1)
        this.commands = {
          all: 'yarn workspaces foreach --topological-dev --no-private --exclude @roots/bud-typings -i -p -v run build',
          cjs: 'yarn workspaces foreach --topological-dev --no-private --exclude @roots/bud-typings -i -p -v run build:cjs',
          esm: 'yarn workspaces foreach --topological-dev --no-private --exclude @roots/bud-typings -i -p -v run build:esm',
        }
      }
      async execute() {
        let t = []
        this.cjs && t.push(this.commands.cjs),
          this.esm && t.push(this.commands.esm),
          !this.cjs && !this.esm && t.push(this.commands.all),
          await this.$(t)
      }
    }
  h.paths = [['kjo', 'build']]
  var O = r(s('clipanion')),
    u = class extends a {
      constructor() {
        super(...arguments)
        this.dfx = O.Option.Boolean('-d,--dfx', !1)
      }
      async execute() {
        if (this.dfx) {
          await this.$('git clean -dfx'),
            await this.$('yarn cache clean')
          return
        }
        console.log('rimraf packages/**/.budfiles'),
          await this.$('yarn rimraf packages/**/.budfiles'),
          console.log('rimraf examples/*/node_modules'),
          await this.$('yarn rimraf examples/*/node_modules'),
          console.log('rimraf packages/@roots/*/lib'),
          await this.$('yarn rimraf packages/@roots/*/lib'),
          console.log('rimraf packages/@roots/*/types'),
          await this.$('yarn rimraf packages/@roots/*/types'),
          console.log('rimraf packages/@roots/*/node_modules'),
          await this.$(
            'yarn rimraf packages/@roots/*/node_modules',
          ),
          console.log('rimraf node_modules'),
          await this.$('yarn rimraf node_modules'),
          console.log('cache clean'),
          await this.$('yarn cache clean')
      }
    }
  u.paths = [['kjo', 'clean']]
  var c = r(s('clipanion')),
    d = class extends a {
      constructor() {
        super(...arguments)
        this.all = c.Option.Boolean('-a,--all', !1)
        this.prettier = c.Option.Boolean('-p,--prettier', !1)
        this.eslint = c.Option.Boolean('-e,--eslint', !1)
        this.skypack = c.Option.Boolean('-s,--skypack', !1)
      }
      async execute() {
        let t =
          (!this.prettier && !this.skypack && !this.eslint) ||
          this.all
        ;(this.eslint || t) &&
          (await this.$(
            'yarn eslint packages/**/src/**/*.{js,jsx,ts,tsx} --fix',
          ),
          await this.$(
            'yarn eslint dev/**/*.{js,jsx,ts,tsx} --fix',
          )),
          (this.prettier || t) &&
            (await this.$(
              'yarn prettier packages/**/src/**/*.{ts,js,tsx,jsx} --fix --ignore-unknown --loglevel silent --no-error-on-unmatched-pattern',
            ),
            await this.$(
              'yarn prettier dev/**/*.{ts,js,tsx,jsx} --fix --ignore-unknown --loglevel silent --no-error-on-unmatched-pattern',
            ),
            await this.$(
              'yarn prettier site/**/*.{ts,js,tsx,jsx,md,mdx} --fix --ignore-unknown --loglevel silent --no-error-on-unmatched-pattern',
            )),
          (this.skypack || t) &&
            (await this.$(
              'yarn workspaces foreach --no-private --exclude @roots/bud-typings -p -v run pkg',
            ))
      }
    }
  d.paths = [['kjo', 'lint']]
  var l = r(s('clipanion')),
    f = class extends a {
      constructor() {
        super(...arguments)
        this.all = l.Option.Boolean('-a,--all', !1)
        this.integration = l.Option.Boolean(
          '-i,--integration',
          !1,
        )
        this.unit = l.Option.Boolean('-u,--unit', !1)
        this.workers = l.Option.String('-w,--workers', '50%')
        this.update = l.Option.Boolean('--update', !1)
      }
      async execute() {
        let t = (!this.unit && !this.integration) || this.all
        if (
          ((this.unit || t) &&
            (await this.$(
              `yarn jest unit --maxWorkers=${this.workers} ${
                this.update ? '--updateSnapshot' : '--coverage'
              }`,
            )),
          this.integration || t)
        ) {
          let i = 'node ./jest.integration.js'
          this.update && (i = i.concat(' --update')),
            await this.$(i)
        }
      }
    }
  f.paths = [['kjo', 'test']]
  var o = r(s('clipanion')),
    q = r(s('@yarnpkg/fslib')),
    S = r(s('@yarnpkg/core'))
  var g = class {
    get string() {
      let t = `${this.major}.${this.minor}.${this.patch}`
      return this.tag &&
        this.tag !== 'stable' &&
        this.tag !== 'latest'
        ? t.concat(
            `-${this.tag}${
              this.increment ? `.${this.increment}` : ''
            }`,
          )
        : t
    }
    get object() {
      return {
        major: this.major,
        minor: this.minor,
        patch: this.patch,
        increment: this.increment,
        tag: this.tag,
      }
    }
    get setCommand() {
      let t = `yarn workspaces foreach --no-private version ${this.string}`
      return this.tag && (t = t.concat(` --tag ${this.tag}`)), t
    }
    constructor(t) {
      let [, i, n, _] = t.match(/(\d*)\.(\d*)\.(\d*)/)
      ;(this.major = i), (this.minor = n), (this.patch = _)
      let k = t.match(/.*-(next|feature-\w*)\.?/)
      this.tag = k && k[1] ? k[1] : 'stable'
      let w = t.match(/.*-(next|feature-\w*)\.(\d*)?/)
      this.increment = w && w[2] ? w[2] : null
    }
    setTag(t) {
      if (
        t !== 'stable' &&
        t !== 'latest' &&
        t !== 'next' &&
        !t.startsWith('feature-')
      )
        throw new Error(`Invalid tag specified: ${t}`)
      this.tag = t
    }
  }
  var b = class extends a {
    constructor() {
      super(...arguments)
      this.version = o.Option.String('-v,--version', {
        required: !1,
      })
      this.major = o.Option.String('--major', {required: !1})
      this.minor = o.Option.String('--minor', {required: !1})
      this.patch = o.Option.String('--patch', {required: !1})
      this.tag = o.Option.String('-t,--tag', {required: !1})
      this.increment = o.Option.String('-i,--increment', {
        required: !1,
      })
      this.set = o.Option.Boolean('-s,--set', {required: !1})
      this.publish = o.Option.Boolean('-p,--publish', {
        required: !1,
      })
    }
    async execute() {
      let {raw: t} = await S.Manifest.tryFind(this.context.cwd),
        i
      if (
        (this.version
          ? (i = new g(this.version))
          : (i = new g(t.manifest.version)),
        this.major && (i.major = this.major),
        this.minor && (i.minor = this.minor),
        this.patch && (i.patch = this.patch),
        this.increment && (i.increment = this.increment),
        this.tag && i.setTag(this.tag),
        (t.manifest.version = i.string),
        this.set)
      ) {
        q.xfs.writeJsonSync(
          this.context.cwd.concat('/package.json'),
          t,
        ),
          process.exit(),
          await this.$(i.setCommand)
        return
      }
      if (this.publish) {
        console.log(
          `I want to publish version ${i.string}, tagged ${i.tag}`,
        )
        return
      }
      console.log(`${i.string}`)
    }
  }
  b.paths = [['kjo', 'version']]
  var A = r(s('clipanion')),
    x = class extends a {
      constructor() {
        super(...arguments)
        this.dfx = A.Option.Boolean('-d,--dfx', !1)
      }
      async execute() {
        await this.$('yarn kjo clean'),
          await this.$('yarn install --immutable'),
          await this.$('yarn kjo build'),
          await this.$('yarn kjo test --unit --integration'),
          await this.$('yarn'),
          await this.$('yarn kjo lint')
      }
    }
  x.paths = [['kjo', 'make']]
  var $ = r(s('clipanion')),
    y = class extends a {
      constructor() {
        super(...arguments)
        this.site = $.Option.Boolean('-s,--site', !1)
        this.readme = $.Option.Boolean('-r,--readme', !1)
      }
      async execute() {
        let t = !this.site && !this.readme
        ;(this.site || t) &&
          (await this.$(
            'yarn workspace @roots/bud-docs run docusaurus build',
          )),
          (this.readme || t) &&
            (await this.$('yarn ts-node ./dev/readme'))
      }
    }
  y.paths = [['kjo', 'md']]
  var J = {
      hooks: {
        afterAllInstalled: () => {
          console.log('What a great install, am I right?')
        },
      },
      commands: [h, u, d, x, y, f, b],
    },
    z = J
  return D
})()
return plugin;
}
};
