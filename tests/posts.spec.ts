import { test, expect } from "@playwright/test"

test('home test', async ({ page }) => {
    await page.goto("localhost:3000/posts");
    await expect(page.locator('data-testid=posts-title')).toHaveText("Posts");
    await expect(page.locator('data-testid=table')).toBeVisible();
})