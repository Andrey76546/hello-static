import { expect, test } from '@playwright/test'

test('страница загружается, а счётчик увеличивается', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Hello Static')
  await expect(page.getByRole('heading', { name: '🚀 Hello Static' })).toBeVisible()
  await expect(page.locator('#counter')).toHaveText('0')

  await page.getByRole('button', { name: 'Увеличить' }).click()

  await expect(page.locator('#counter')).toHaveText('1')
})
