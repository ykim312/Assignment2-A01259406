import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 }
})

test.describe("Testing for home tablet font size", () => {
    test("Testing for colours on tablet", async ({ page }) => {
        await page.goto("http://localhost:3000/")

        const mainContainer = page.locator('#hsize');

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("62px");
    })
})

test.describe("Testing for home tablet btn size", () => {
    test("Testing for colours on tablet", async ({ page }) => {
        await page.goto("http://localhost:3000/")

        const mainContainer = page.locator('#btnsize');

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("26px");
    })
})