using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
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
        [FindsBy(How = How.XPath, Using = "/html[1]/body[1]/form[1]/div[4]/div[2]/div[3]/div[2]/div[1]/div[4]/div[5]/a[1]/input[1]")]
        private IWebElement buynowbutton;
        [FindsBy(How = How.XPath, Using = "/html[1]/body[1]/form[1]/div[3]/div[2]/div[1]/div[1]/div[4]/table[1]/tbody[1]/tr[1]/td[3]/input[1]")]
        private IWebElement placeorderButton; 
        [FindsBy(How = How.XPath, Using = "/html[1]/body[1]/form[1]/div[3]/div[1]/div[3]/a[1]")]
        private IWebElement logoutButton;
       
        public void Login(string Email, string Password)
        {
            Thread.Sleep(5000);
            txtEmail.SendKeys(Email);
            txtPassword.SendKeys(Password);
            driver.Quit();
        }
        public DashBoardPage LoginClick()
        {
            Loginbutton.Submit();
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
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(4);
            placeorderButton.Click();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(4);
            logoutButton.Click();
            driver.Quit();
        } 
        

    }
}
