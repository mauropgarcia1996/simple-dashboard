import { test, expect } from "@playwright/test"

test('home test', async ({ page }) => {
    await page.goto("localhost:3000/users");
    await expect(page.locator('data-testid=users-title')).toHaveText("Users");
    await expect(page.locator('data-testid=table')).toBeVisible();
})