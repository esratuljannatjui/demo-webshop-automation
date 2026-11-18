class ProductListPage {
  constructor(page) {
    this.page = page;
    this.productTitles = page.locator('.product-item .product-title a');
  }

  async openProduct(name) {
    await this.productTitles.filter({ hasText: name }).first().click();
  }
}

module.exports = { ProductListPage };