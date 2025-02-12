import { getShortcuts } from './getShortcuts'

describe('getShortcuts', () => {
  it('should get shortcuts successfully', async () => {
    const shortcuts = await getShortcuts()
    // Simple check to make sure we got some definitions
    expect(shortcuts.length).toBeGreaterThan(0)
  })

  it('should get shortcuts successfully for a specific app', async () => {
    const shortcuts = await getShortcuts(['ubeswap'])
    // Simple check to make sure we got some definitions
    expect(shortcuts.length).toBeGreaterThan(0)
    for (const shortcut of shortcuts) {
      expect(shortcut.appId).toBe('ubeswap')
    }
  })

  it("should throw an error if the app doesn't exist", async () => {
    await expect(getShortcuts(['does-not-exist'])).rejects.toThrow(
      /No app with id 'does-not-exist' found, available apps: \w+/,
    )
  })
})
