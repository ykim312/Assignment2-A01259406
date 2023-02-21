import { test, devices, expect } from '@playwright/test';

test.use({
    browserName:'chromium',
    ...devices['iPad XR'],
    viewport: { width: 414, height: 896 }
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('Testing for position on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#logo');

        const checkingPosition = await mainContainer.evaluate((ele) =>{
            return window.getComputedStyle(ele).getPropertyValue("top")
        })
        console.log(checkingPosition);
        expect(checkingPosition).toBe('260px');
    })
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('Testing for logo size on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#logo');

        const checkingLogo = await mainContainer.evaluate((ele) =>{
            return window.getComputedStyle(ele).getPropertyValue("width")
        })
        console.log(checkingLogo);
        expect(checkingLogo).toBe('160px');
    })
})