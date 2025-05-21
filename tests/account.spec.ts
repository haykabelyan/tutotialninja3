import { test, expect } from '@playwright/test';

test.describe('Account Tests', () => {

  test.skip( ({browserName})=> browserName === 'webkit', 'Skipping Webkit on Linux');

  
  test.beforeEach(async ({ page}) => {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
  });


  test('Login', async ({ page }) => {
    
  
  });

  

});
