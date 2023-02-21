import { test, devices, expect } from '@playwright/test'
import exp from 'constants'

var homePage = 'http://localhost:3000'
var moviesPage = 'http://localhost:3000/movies'

test('check the headings', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto(moviesPage)
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h1')).toContainText('Choose your movies')
})

test('should navigate to the home page from the movies page', async ({ page }) => { 
  await page.goto(moviesPage)

  await page.click('text=Back')

  await expect(page).toHaveURL(homePage)
})


