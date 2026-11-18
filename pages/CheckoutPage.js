class CheckoutPage {
  constructor(page) {
    this.page = page;
    
    this.country = page.locator('#BillingNewAddress_CountryId');
    this.state = page.locator('#BillingNewAddress_StateProvinceId');
    this.city = page.locator('#BillingNewAddress_City');
    this.address1 = page.locator('#BillingNewAddress_Address1');
    this.zip = page.locator('#BillingNewAddress_ZipPostalCode');
    this.phone = page.locator('#BillingNewAddress_PhoneNumber');
    this.billingContinue = page.locator('#billing-buttons-container .button-1');
    
    this.shippingAddressContinue = page.locator('#shipping-buttons-container .button-1');
    this.shippingMethodContinue = page.locator('#shipping-method-buttons-container .button-1');
    this.paymentMethodContinue = page.locator('#payment-method-buttons-container .button-1');
    this.paymentInfoContinue = page.locator('#payment-info-buttons-container .button-1');
    this.confirmButton = page.locator('#confirm-order-buttons-container .button-1');
    
    this.successTitle = page.locator('.order-completed .title');
    this.orderNumber = page.locator('.order-completed .details li').first();
    this.detailsLink = page.locator('.order-completed a[href*="orderdetails"]');
    this.orderDetailsPage = page.locator('.order-details-page');
  }

  async fillBilling(addr) {
    await this.country.selectOption({ label: addr.country });
    await this.state.selectOption({ label: addr.state });
    await this.city.fill(addr.city);
    await this.address1.fill(addr.address);
    await this.zip.fill(addr.zip);
    await this.phone.fill(addr.phone);
    await this.billingContinue.click();
  }

  async completeCheckout(addr) {
    await this.fillBilling(addr);
    await this.shippingAddressContinue.click();
    await this.shippingMethodContinue.click();
    await this.paymentMethodContinue.click();
    await this.paymentInfoContinue.click();
    await this.confirmButton.click();
  }

  async openOrderDetails() {
    await this.detailsLink.click();
  }
}

module.exports = { CheckoutPage };