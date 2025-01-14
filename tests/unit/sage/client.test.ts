import * as pkg from '@roots/sage'
import * as client from '@roots/sage/client'
import domReady from '@roots/sage/client/dom-ready'

describe('@roots/sage', () => {
  it('@roots/sage:client', () => {
    expect(pkg.client).toBe(client)
  })

  it('@roots/sage/client', () => {
    expect(client).toMatchSnapshot()
  })

  it('@roots/sage/client/dom-ready', () => {
    expect(client.domReady).toBe(domReady)
  })
})
