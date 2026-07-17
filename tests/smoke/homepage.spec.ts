import { test, expect } from '../../src/fixtures/test';

test.describe('Strona główna', () => {
  test('powinna otworzyć adres ustawiony w konfiguracji', async ({page,homePage,}) => {
    await homePage.open();

    await expect(page).toHaveURL(/playwright\.dev/);
    await expect(page).toHaveTitle(/Playwright/);
    await expect(homePage.getStartedLink).toBeVisible();
  });
});