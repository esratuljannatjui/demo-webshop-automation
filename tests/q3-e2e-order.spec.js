const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');
const { HomePage } = require('../pages/HomePage');
const { ProductListPage } = require('../pages/ProductListPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { generateUser, billingAddress } = require('../utils/testData');

test('Q3: Search product, add to cart and complete order (E2E)', async ({ page }) => {
  const user = generateUser();
  const productName = 'Computing and Internet';
  const quantity = 3;

  const registerPage = new RegisterPage(page);
  const homePage = new HomePage(page);
  const productList = new ProductListPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  
  await registerPage.goto();
  await registerPage.register(user);
  await expect(registerPage.result).toContainText('Your registration completed');
  await registerPage.clickContinue();


  await homePage.search('Computing');
    await expect(productList.productTitles.filter({ hasText: productName }).first()).toBeVisible();

 
  await productList.openProduct(productName);
  await productPage.setQuantity(quantity);
  await productPage.addToCart();
  await expect(productPage.notification).toContainText('The product has been added to your shopping cart');

  
  await cartPage.goto();
  await expect(cartPage.productNames.first()).toContainText(productName);
  await expect(cartPage.quantityInputs.first()).toHaveValue(String(quantity));
  await cartPage.acceptTerms();
  await cartPage.checkout();

 
  await checkoutPage.completeCheckout(billingAddress);


  await expect(checkoutPage.successTitle).toContainText('successfully processed');
  const orderNumberText = await checkoutPage.orderNumber.innerText();
  console.log('Order placed ->', orderNumberText);


  await checkoutPage.openOrderDetails();
  await expect(checkoutPage.orderDetailsPage).toBeVisible();
  await expect(checkoutPage.orderDetailsPage).toContainText(productName);
});