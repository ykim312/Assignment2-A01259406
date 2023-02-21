import { test, devices, expect } from '@playwright/test';

test.use({
    browserName:'chromium',
    ...devices['iPad XR'],
    viewport: { width: 414, height: 896 }
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('Testing for title none on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/movies')

        const mainContainer = page.locator('#none');

        const checkingDisplay = await mainContainer.evaluate((ele) =>{
            return window.getComputedStyle(ele).getPropertyValue("display")
        })
        console.log(checkingDisplay);
        expect(checkingDisplay).toBe('none');
    })
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('Testing for width of card on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/movies')

        const mainCont = page.locator('#img');

        const checkingWidth = await mainCont.evaluate((ele) =>{
            return window.getComputedStyle(ele).getPropertyValue("width")
        })
        console.log(checkingWidth);
        expect(checkingWidth).toBe('100px');
    })
})