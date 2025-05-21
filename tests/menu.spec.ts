import { test, expect } from '@playwright/test';

test.describe('Desktop tests', () => {

  test.skip( ({browserName})=> browserName === 'webkit', 'Skipping Webkit on Linux');

  test.beforeEach(async ({ page}) => {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
  });

  test('Desktop', async ({ page }) => {

    await page.getByRole('link', { name: 'Desktops', exact: true }).hover();
    await page.getByRole('link', { name: 'PC (0)', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'PC', exact: true })).toBeVisible();

    await page.getByRole('link', { name: 'Desktops', exact: true }).first().hover();
    await page.getByRole('link', { name: 'Mac (1)', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Mac', exact: true })).toBeVisible();
  });

  test('Laptops & Notebooks', async({page})=>{

      await page.getByRole('link', { name: 'Laptops & Notebooks', exact: true }).hover();
      await page.getByRole('link', { name: 'Macs (0)' }).click();
      await expect( page.getByRole('heading', { name: 'Macs' }) ).toBeVisible();

      await page.getByRole('link', { name: 'Laptops & Notebooks', exact: true }).first().hover();
      await page.getByRole('link', { name: 'Windows (0)', exact: true }).click();
      await expect( page.getByRole('heading', { name: 'Windows' }) ).toBeVisible();

      await page.getByRole('link', { name: 'Laptops & Notebooks', exact: true }).first().hover();
      await page.getByRole('link', { name: 'Show AllLaptops & Notebooks' }).click();
      await expect( page.getByRole('heading', { name: 'Laptops & Notebooks' }) ).toBeVisible();

  
  });

});
