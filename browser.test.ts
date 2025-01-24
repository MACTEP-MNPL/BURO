import { test } from '@playwright/test'

test('test browser', async ({ page }) => {

    await page.pause()

  // point this to wherever you want
  await page.goto('http://127.0.0.1:7777/src/index.html')

  // keep browser open

  
})
