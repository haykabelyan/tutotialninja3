
import { test, expect } from '@playwright/test';


test.describe('Search Products', () => {

    const searchTerms = [
        { term: 'Mac', heading: 'Search - Mac' },
        { term: 'iPhone', heading: 'Search - iPhone' }
      ];

    test.skip( ({browserName})=> browserName === 'webkit', 'Skipping Webkit on Linux');

    test.beforeAll(()=>{
        console.log('beforeAll');
        
    })

    test.beforeEach(async ({ page }) => {
        console.log('beforeEach');
      await page.goto('https://tutorialsninja.com/demo/');
    })
    


    for(const {term, heading} of searchTerms){

        test(`Search for ${term}`, async({page})=>{
            console.log(`Search for ${term} ..`);
            await page.getByRole('textbox', { name: 'Search' }).fill(term);
            await page.getByRole('button', { name: '' }).click();

            await expect( page.getByRole('heading', { name: heading })).toBeVisible();

            const products = await page.locator('h4').allTextContents();
            for (const product of products) {
              expect(product.toLowerCase()).toContain(term.toLowerCase());
            }
        })
    }
    

    test('Empty field @smoke', async ({ page }) => {
        console.log('Empty field');
        await page.getByRole('button', { name: '' }).click();
        
        await  expect(page.getByRole('heading', { name: 'Products meeting the search' })).toBeVisible();
        await expect( page.getByText('There is no product that') ).toBeVisible();
        
    });


});






