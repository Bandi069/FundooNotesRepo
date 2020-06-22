using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace BookSwagonTesting.Pages
{
    class SignupPage
    {
        IWebDriver webDriver;
        public SignupPage(IWebDriver webDriver)
        {
            PageFactory.InitElements(webDriver, this);
            this.webDriver = webDriver;
        }
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignUp_txtEmail']")]
        private IWebElement txtEmail;
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignUp_txtPassword']")]
        private IWebElement txtPassword;
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignUp_txtConfirmPwd']")]
        private IWebElement txtConfirmPassword;
        [FindsBy(How = How.Id, Using = "ctl00_phBody_SignUp_btnSubmit")]
        private IWebElement signuprbutton;
       
        public void Signup(string Email, string Password, string ConfirmPassword)
        {
            Thread.Sleep(5000);
            txtEmail.SendKeys(Email);
            txtPassword.SendKeys(Password);
            txtConfirmPassword.SendKeys(ConfirmPassword);
        }
        public void SignupClick()
        {
            signuprbutton.Submit();
            webDriver.Quit();
        }
       /// <summary>
       /// login
       /// </summary>
        [FindsBy(How = How.Id, Using = "ctl00_phBody_SignIn_txtEmail")]
        private IWebElement loginEmail;
        [FindsBy(How = How.Id, Using = "ctl00_phBody_SignIn_txtPassword")]
        private IWebElement LoginPassword;
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignIn_btnLogin']")]
        private IWebElement Loginbutton;
        public void AccountLogin(string Email, string Password)
        {
            Thread.Sleep(5000);
            loginEmail.SendKeys(Email);
            LoginPassword.SendKeys(Password);
          //  webDriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(3);
        }
        //public void clicklogin()
        //{
        //    webDriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(3);
        //    Loginbutton.Submit();
        //}
        public DashBoardPage LoginClick()
        {
            Loginbutton.Submit();
            return new DashBoardPage(webDriver);
        }

        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_TopSearch1_txtSearch']")]
        private IWebElement searchboxpress;
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_TopSearch1_Button1']")]
        private IWebElement searchbutton;

        public void Searchbox()
        {
            searchboxpress.Click();
        }
        public void Searchtext()
        {
            searchboxpress.SendKeys("Textbooks");
        }
        public void ClickSearch()
        {
            searchbutton.Click();
        }
        [FindsBy(How = How.XPath, Using = "//div[1]//div[4]//div[5]//a[1]//input[1]")]
        private IWebElement buynowbutton;
        [FindsBy(How = How.XPath, Using = "//input[@id='BookCart_lvCart_imgPayment']")]
        private IWebElement placeorderButton;
        public void buyclick()
        {
            webDriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(7);
            buynowbutton.Click();
        }
        public void placeorder()
        {
            webDriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(7);
            webDriver.SwitchTo().Frame(0);
            placeorderButton.Click();
        }

        [FindsBy(How = How.CssSelector, Using = "#ctl00_lnkbtnLogout")]
        private IWebElement logoutButton;

        public void logout()
        {
            webDriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            logoutButton.Click();
            webDriver.Quit();
        }























    }
}
