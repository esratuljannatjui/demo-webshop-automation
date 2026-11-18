const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { ProductListPage } = require('../pages/ProductListPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { generateUser } = require('../utils/testData');

test('Q2: Register, login and add product to cart', async ({ page }) => {
  const user = generateUser();
  const productName = 'Computing and Internet';

  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const productList = new ProductListPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  
  await registerPage.goto();
  await registerPage.register(user);
  await expect(registerPage.result).toContainText('Your registration completed');
  await registerPage.clickContinue();


  await homePage.logout();
  await loginPage.goto();
  await loginPage.login(user.email, user.password);
  await expect(loginPage.logoutLink).toBeVisible();

 
  await homePage.openCategory('Books');
  await productList.openProduct(productName);
  await productPage.addToCart();
  await expect(productPage.notification).toContainText('The product has been added to your shopping cart');


  await cartPage.goto();
  await expect(cartPage.productNames).toHaveCount(1);
  await expect(cartPage.productNames.first()).toContainText(productName);
  await expect(cartPage.quantityInputs.first()).toHaveValue('1');
});