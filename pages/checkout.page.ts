import { Page, expect } from '@playwright/test';

export async function navigateToSite(page: Page): Promise<void> {
  await page.goto('/?i=1', {
    timeout: 60000,
    waitUntil: 'domcontentloaded',
  });
  await page.waitForTimeout(5000);
  await page.keyboard.press('Escape');
}

export async function addProductsToCart(page: Page): Promise<void> {
  const categoriesNav = page.getByRole('navigation').getByRole('link', { name: 'Categorías' });
  await expect(categoriesNav).toBeVisible({ timeout: 30000 });
  await categoriesNav.click();

  const householdLink = page.getByRole('link', { name: 'Menaje y Organización' });
  await expect(householdLink).toBeVisible();
  await householdLink.click();

  await page.waitForTimeout(2000);

  await page.getByRole('article').filter({ hasText: 'Menaje y Organización Abridor' }).getByRole('button').click();
  await page.getByRole('article').filter({ hasText: 'Menaje y Organización Azucarero Blanco Mallorca CASA JOVEN S/ 14.19 Agregar Ir' }).getByRole('button').click();
  await page.getByRole('article').filter({ hasText: 'Menaje y Organización Balde' }).getByRole('button').click();
  await page.getByRole('article').filter({ hasText: 'Menaje y Organización Balde' }).getByRole('button').click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Carrito 4' }).click();
}

export async function loginAndProceedToCheckout(page: Page): Promise<void> {
  const miCuentaLink = page.getByRole('link', { name: 'Mi cuenta' });
  await expect(miCuentaLink).toBeVisible();
  await miCuentaLink.click();

  await page.waitForTimeout(2000);

  const loginForm = page.locator('form').filter({ hasText: 'Ingresar' });
  await loginForm.getByPlaceholder('Correo').click();
  await loginForm.getByPlaceholder('Correo').fill(process.env.TEST_USER_EMAIL || '');
  await loginForm.getByPlaceholder('Correo').press('Tab');
  await loginForm.getByPlaceholder('Contraseña').fill(process.env.TEST_USER_PASSWORD || '');
  await page.getByRole('button', { name: 'Ingresar' }).click();

  const usarEnCheckoutBtn = page.getByRole('link', { name: 'Usar en checkout' });
  await expect(usarEnCheckoutBtn).toBeVisible({ timeout: 15000 });
  await usarEnCheckoutBtn.click();
}

export async function verifyCheckoutPageLoaded(page: Page): Promise<void> {
  await expect(page).toHaveURL(/.*checkout.*/i);
}