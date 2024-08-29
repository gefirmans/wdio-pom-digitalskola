import Page from './page.js';
import { $ } from '@wdio/globals'

class LoginPage extends Page {

    get usernameTextbox () { return $('#user-name') }
    get passwordTextbox () { return $('#password') }
    get loginButton () { return $('#login-button') }

   async InputUsername(username) {
    await this.usernameTextbox.setValue(username);
   }
   async InputPassword(password) {
    await this.passwordTextbox.setValue(password)
   }
   async ClickLoginButton() {
    await this.loginButton.click()
   }
   async Login(username, password) {
    await this.InputUsername(username)
    await this.InputPassword(password)
    await this.ClickLoginButton()
    await browser.pause(2000)
   }

  open () {
    return super.open('')
  }
}

export default new LoginPage()