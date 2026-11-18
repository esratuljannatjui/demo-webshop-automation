class ProductPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.product-name h1');
    this.quantityInput = page.locator('input.qty-input');
    this.addToCartButton = page.locator('input.add-to-cart-button');
    this.notification = page.locator('#bar-notification');
  }

  async setQuantity(qty) {
    await this.quantityInput.fill(String(qty));
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}

module.exports = { ProductPage };