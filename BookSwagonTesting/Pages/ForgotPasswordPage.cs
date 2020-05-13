using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace BookSwagonTesting.Pages
{
    class ForgotPasswordPage
    {

        IWebDriver webDriver;
        public ForgotPasswordPage(IWebDriver driver)
        {
            PageFactory.InitElements(driver, this);
            this.webDriver = driver;
        }
        [FindsBy(How = How.Name, Using = "ctl00$phBody$ForgotPassword$txtEmail")]
        private IWebElement txtEmail;
        [FindsBy(How = How.ClassName, Using = "btn-red")]
        private IWebElement forgotbutton;
        public void Forgot(string Email)
        {
            Thread.Sleep(5000);
            txtEmail.SendKeys(Email);
        }
        public LoginPage ClickForgot()
        {
            forgotbutton.Submit();
            return new LoginPage(webDriver);
        }
    }
}
