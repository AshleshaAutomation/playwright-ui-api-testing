import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async expectProduct(productName: string) {
    await expect(this.page.locator('.cart_item').filter({ hasText: productName })).toBeVisible();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
