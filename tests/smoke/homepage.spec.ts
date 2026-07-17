import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  
  test('should open the configured base URL', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveURL(/playwright\.dev/);
    await expect(page).toHaveTitle(/Playwright/);
  });
});
