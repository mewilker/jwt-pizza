import { test, expect } from '@playwright/test';

test('Authentication test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('nodice@notaplace.com');
  await page.getByRole('textbox', { name: 'Email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('nodice');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('{"code":404,"message":"')).toBeVisible();
  await page.getByRole('main').getByText('Register').click();

  await expect(page.locator('form')).toBeVisible();
  await expect(page.locator('form')).toContainText('Register');

  await page.getByRole('textbox', { name: 'Full name' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).fill('test test');
  await page.getByRole('textbox', { name: 'Full name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email address' }).fill('testme@testme.com');
  await page.getByRole('textbox', { name: 'Email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');

  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByRole('list')).toBeVisible();

  await expect(page.getByRole('link', { name: 'tt' })).toBeVisible();
  await page.getByRole('link', { name: 'tt' }).click();


  await expect(page.getByText('name: test testemail: testme@testme.comrole: dinerHow have you lived this long')).toBeVisible();
  await expect(page.getByRole('main')).toContainText('diner');
  await page.getByLabel('Global').getByRole('link', { name: 'Franchise' }).click();
  await expect(page.locator('div').filter({ hasText: /^If you are already a franchisee, pleaseloginusing your franchise account$/ }).nth(1)).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByRole('list')).toBeVisible();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('testme@testme.com');
  await page.getByRole('textbox', { name: 'Email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('notcorrect');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('{"code":404,"message":"')).toBeVisible();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('link', { name: 'tt' })).toBeVisible();
});