import { test, expect } from '@playwright/test';


test.describe('Tutorial ninja add shopping cart', () => {
  

    test.skip( ({browserName})=> browserName === 'webkit', 'Skipping Webkit on Linux');


  test.beforeEach(async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
  });

  test('Add shopping cart @smoke', async ({ page }) => {
    
    await page.getByRole('textbox', { name: 'Search' }).fill('mac');
    await page.getByRole('textbox', { name: 'Search' }).press('Enter');

    
    const alert = page.locator('.alert-success');

    await page.getByRole('button', { name: ' Add to Cart' }).first().click();
    await expect(alert).toBeVisible();
    await expect(alert).toContainText('Success: You have added');

    await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
    await expect(alert).toBeVisible();
    await expect(alert).toContainText('Success: You have added');


    await page.getByRole('button', { name: ' 2 item(s) - $' }).click();
    await page.getByRole('link', { name: ' View Cart' }).click();



    await expect(page.locator('td.text-right strong', { hasText: 'Sub-Total:' }).first()).toBeVisible();
    await expect(page.locator('td.text-right strong', { hasText: 'Eco Tax (-2.00):' }).first()).toBeVisible();
    await expect(page.locator('td.text-right strong', { hasText: 'VAT (20%):' }).first()).toBeVisible();
    await expect(page.locator('td.text-right strong', { hasText: 'Total:' }).first()).toBeVisible();
  });

});