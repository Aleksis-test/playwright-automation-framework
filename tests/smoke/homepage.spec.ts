import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test.describe('Strona główna', () => {
  test('powinna otworzyć adres ustawiony w konfiguracji', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await expect(page).toHaveURL(/playwright\.dev/);
    await expect(page).toHaveTitle(/Playwright/);
    await expect(homePage.getStartedLink).toBeVisible();
  });
});