import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import cartPage from '../pageobjects/cart.page.js'
import dataInformation from '../pageobjects/data-information.js';
import detailCheckout from '../pageobjects/detail-checkout.js';

describe ('login test', () => {
    it ('Test 1 - login successfully', async () => {
        await LoginPage.open()
        await LoginPage.Login('standard_user', 'secret_sauce')
    });

    it('test 2 - add to cart successfully', async () => {
        await HomePage.open()
        await HomePage.AddToCart()
        await cartPage.validateOnCartPage()
    });

    it('Test 3 - checkout successfully', async () => {
        await cartPage.open()
        await cartPage.Checkout()
        await dataInformation.validateOnDataInformationPage()
    });

    it('Test 4 - checkout step one successfully', async () => {
        await dataInformation.open()
        await dataInformation.CheckoutStepOne('Garuda', 'Firmansyah', '12345')
        await detailCheckout.validateOnDetailCheckoutPage()
    });

    it('Test 5 - checkout step two successfully', async () => {
        await detailCheckout
        await detailCheckout.FinishCheckout()
    });
})