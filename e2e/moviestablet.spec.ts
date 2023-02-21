import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 }
})



test.describe("Testing for home tablet card center", () => {
    test("Testing if the cards are in the center on tablet", async ({ page }) => {
        await page.goto("http://localhost:3000/movies")

        const mainContainer = page.locator('#card');

        const checkingCenter = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("justify-content")
        })

        console.log(checkingCenter);
        expect(checkingCenter).toBe("center");
    })
})

test.describe("Testing for home tablet background color", () => {
    test("Testing color on tablet", async ({ page }) => {
        await page.goto("http://localhost:3000/movies")

        const mainContainer = page.locator('#titlecolor');

        const checkingCenter = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        })

        console.log(checkingCenter);
        expect(checkingCenter).toBe("rgb(0, 0, 0)");
    })
})