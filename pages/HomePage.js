class HomePage {
  constructor(page) {
    this.page = page;
    this.logoutLink = page.locator('a.ico-logout');
    this.searchBox = page.locator('#small-searchterms');
    this.searchButton = page.locator('input.search-box-button');
  }

  async goto() {
    await this.page.goto('/');
  }

  async openCategory(name) {
    await this.page.locator('.top-menu').getByRole('link', { name, exact: true }).first().click();
  }

  async search(term) {
    await this.searchBox.fill(term);
    await this.searchButton.click();
  }

  async logout() {
    await this.logoutLink.click();
  }
}

module.exports = { HomePage };