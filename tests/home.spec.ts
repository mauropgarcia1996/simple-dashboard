import { test, expect } from "@playwright/test"

test('home test', async ({ page }) => {
    await page.goto("localhost:3000");
    await expect(page.locator('data-testid=home-title')).toHaveText("Home");
    await expect(page.locator('data-testid=home-description')).toBeVisible();
    await expect(page.locator('li')).toHaveCount(5);
})