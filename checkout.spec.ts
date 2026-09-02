import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { checkoutData, users } from '../../test-data/testData';

test('user can complete a purchase', async ({ page }) => {
  const productName = 'Sauce Labs Backpack';
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await productsPage.expectLoaded();

  await productsPage.addProduct(productName);
  await productsPage.openCart();
  await cartPage.expectProduct(productName);
  await cartPage.checkout();

  await checkoutPage.enterCustomerDetails(
    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.postalCode
  );
  await checkoutPage.finishOrder();
  await checkoutPage.expectOrderComplete();
});
