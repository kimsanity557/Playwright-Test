import { test } from '@playwright/test';
import * as checkoutPage from '../pages/checkout.page.ts';

test.describe('Checkout Flow User Journey', () => {
  test.beforeEach(async ({ page }) => {
    await checkoutPage.navigateToSite(page);
  });

  test('Verify User Can Complete Checkout Flow', async ({ page }) => {
    await checkoutPage.addProductsToCart(page);
    await checkoutPage.loginAndProceedToCheckout(page);
    await checkoutPage.verifyCheckoutPageLoaded(page);
  });
});