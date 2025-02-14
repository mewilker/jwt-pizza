import { test, expect } from 'playwright-test-coverage';

test('basic navigation', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page.getByRole('navigation', { name: 'Global' })).toBeVisible();
    await expect(page.locator('.w-screen')).toBeVisible();
    await expect(page.getByText('Order nowMost amazing pizza')).toBeVisible();
    await expect(page.getByText('The web\'s best pizzaOrder')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();

    await page.getByRole('link', { name: 'home' }).click();
    await expect(page.locator('.w-screen')).toBeVisible();
    await expect(page.getByText('Order nowMost amazing pizza')).toBeVisible();
    await expect(page.getByText('The web\'s best pizzaOrder')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();

    await page.getByRole('link', { name: 'About' }).click();
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByText('homeabout')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'At JWT Pizza, our amazing' }).nth(4)).toBeVisible();
    
    await page.getByRole('link', { name: 'History' }).click();
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByText('homehistory')).toBeVisible();
    await expect(page.getByText('Mama Rucci, my my')).toBeVisible();
    await expect(page.getByRole('main').locator('div').nth(3)).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    
    await page.getByRole('link', { name: 'Order' }).click();
    await expect(page.locator('#root div').filter({ hasText: 'Pick your store and pizzas' }).nth(3)).toBeVisible();
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByText('homemenu')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    
    await page.getByLabel('Global').getByRole('link', { name: 'Franchise' }).click();
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByText('homefranchise-dashboard')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    
    await page.getByRole('link', { name: 'Login', exact: true }).click();
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByText('homelogin')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    
    await page.getByRole('link', { name: 'Register' }).click();
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByText('homeregister')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
});