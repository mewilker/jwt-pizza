import { test, expect } from '@playwright/test';

test('franchiseCreationTest', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('a@jwt.com');
  await page.getByRole('textbox', { name: 'Email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('list')).toBeVisible();
  await page.getByRole('link', { name: '常' }).click();
  await expect(page.getByText('homediner-dashboard')).toBeVisible();
  await expect(page.getByText('admin', { exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.locator('#root div').filter({ hasText: 'Keep the dough rolling and' }).nth(3)).toBeVisible();

  await page.getByRole('button', { name: 'Add Franchise' }).click();
  await page.getByRole('textbox', { name: 'franchise name' }).click();
  await page.getByRole('textbox', { name: 'franchise name' }).fill('testMe');
  await page.getByRole('textbox', { name: 'franchisee admin email' }).click();
  await page.getByRole('textbox', { name: 'franchisee admin email' }).fill('d@jwt.com');
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByRole('table')).toContainText('testMe');
  await page.getByRole('row', { name: 'testMe pizza diner Close' }).getByRole('button').click();
  await expect(page.getByRole('main').locator('div').nth(3)).toBeVisible();
  await expect(page.getByRole('main')).toContainText('testMe');
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.locator('#root div').filter({ hasText: 'Keep the dough rolling and' }).nth(3)).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
});