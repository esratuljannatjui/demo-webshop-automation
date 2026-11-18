class CartPage {
  constructor(page) {
    this.page = page;
    this.productNames = page.locator('.cart-item-row .product-name');
    this.quantityInputs = page.locator('.cart-item-row input.qty-input');
    this.termsCheckbox = page.locator('#termsofservice');
    this.checkoutButton = page.locator('#checkout');
  }

  async goto() {
    await this.page.goto('/cart');
  }

  async acceptTerms() {
    await this.termsCheckbox.check();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };
