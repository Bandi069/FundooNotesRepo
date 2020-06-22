using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Threading;

namespace BookSwagonTesting.Pages
{
    class SearchBookPage
    {
        IWebDriver driver;
        public SearchBookPage(IWebDriver webDriver)
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
        [FindsBy(How = How.XPath, Using = "/html[1]/body[1]/form[1]/div[4]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/input[1]")]
        private IWebElement searchboxpress;
        [FindsBy(How = How.XPath, Using = "/html[1]/body[1]/form[1]/div[4]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/input[1]")]
        private IWebElement searchbutton;
        //[FindsBy(How = How.XPath, Using = "/html[1]/body[1]/form[1]/div[4]/div[2]/div[3]/div[2]/div[2]/div[4]/div[5]/a[1]/input[1]")]
        [FindsBy(How = How.XPath, Using = "/html[1]/body[1]/form[1]/div[4]/div[2]/div[3]/div[2]/div[2]/div[4]/div[5]/a[1]/input[1]")]
        private IWebElement buynowbutton;
        [FindsBy(How = How.XPath, Using = "/html/body/form/div[3]/div[2]/div/div/div[4]/table/tbody/tr/td[3]/input")]
        //  [FindsBy(How = How.Id, Using = "BookCart_lvCart_imgPayment")]
        private IWebElement placeorderButton;
        [FindsBy(How = How.XPath, Using = "/html[1]/body[1]/form[1]/div[3]/div[1]/div[3]/a[1]")]
        private IWebElement logoutButton;

        public void Login(string Email, string Password)
        {
            Thread.Sleep(5000);
            txtEmail.SendKeys(Email);
            txtPassword.SendKeys(Password);
            // driver.Quit();
        }
        public DashBoardPage LoginClick()
        {
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(3);
            Loginbutton.Submit();
            // Thread.Sleep(3000);
            return new DashBoardPage(driver);
        }
        public void Searchbox()
        {
            searchboxpress.Click();
        }
        public void Searchtext(string book)
        {
            searchboxpress.SendKeys(book);
        }
        public void ClickSearch()
        {
            searchbutton.Click();
        }
        public void buyclick()
        {
            buynowbutton.Click();

            // placeorderButton.Click();
            // driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(3);
            // logoutButton.Click();
            //Thread.Sleep(2000);
            //driver.Quit();
        }
        public void placeorder()
        {
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(7);
            driver.SwitchTo().Frame(0);
            placeorderButton.Click();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            logoutButton.Click();
            //Thread.Sleep(2000);
            driver.Quit();
        }
    }
}
