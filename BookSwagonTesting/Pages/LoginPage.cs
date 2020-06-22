using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace BookSwagonTesting.Pages
{
    class LoginPage
    {
        IWebDriver driver;
        public LoginPage(IWebDriver webDriver)
        {
            PageFactory.InitElements(webDriver, this);
            this.driver = webDriver;
        }
        [FindsBy(How = How.ClassName, Using = "new-txt-box")]
        private IWebElement txtEmail;
        [FindsBy(How = How.Id, Using = "ctl00_phBody_SignIn_txtPassword")]
        private IWebElement txtPassword;
        [FindsBy(How = How.Name, Using = "ctl00$phBody$SignIn$btnLogin")]
        private IWebElement Loginbutton;
        public void Login(string Email, string Password)
        {
            Thread.Sleep(5000);
            txtEmail.SendKeys("bandivenu89@gmail.com");
            txtPassword.SendKeys("venub818");
            // driver.Quit();
        }
        public DashBoardPage LoginClick()
        {
            Loginbutton.Submit();
            return new DashBoardPage(driver);

        }
    }
}
