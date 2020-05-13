using OpenQA.Selenium;
using OpenQA.Selenium.Interactions;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace BookSwagonTesting.Pages
{
    class LogoutPage
    {
        IWebDriver driver;
        public LogoutPage(IWebDriver webDriver)
        {
            PageFactory.InitElements(webDriver, this);
            this.driver = webDriver;
        }
        [FindsBy(How = How.XPath, Using = "/html[1]/body[1]/form[1]/div[4]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/input[1]")]
        private IWebElement txtEmail;
        [FindsBy(How = How.Id, Using = "ctl00_phBody_SignIn_txtPassword")]
        private IWebElement txtPassword;
        [FindsBy(How = How.Name, Using = "ctl00$phBody$SignIn$btnLogin")]
        private IWebElement Loginbutton;
        [FindsBy(How = How.XPath, Using = "/html[1]/body[1]/form[1]/div[4]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[1]/a[1]/span[1]")]
        private IWebElement profileButton;
        [FindsBy(How = How.XPath, Using = "/html[1]/body[1]/form[1]/div[4]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[1]/div[1]/div[1]/div[1]/ul[1]/li[8]/a[1]")]
        private IWebElement logoutButton;
        public void Login(string Email, string Password)
        {
            Thread.Sleep(5000);
            txtEmail.SendKeys("bandivenu89@gmail.com");
            txtPassword.SendKeys("venub818");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(4);
            Loginbutton.Click();
            // driver.Quit();
        }

        public void ProfileClick()
        {
            //  Actions actions = new Actions(driver);
            //actions.MoveToElement(driver.FindElement(By.XPath("/html[1]/body[1]/form[1]/div[4]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[1]/a[1]/span[1]/span[1]"))).Click().Build().Perform();
            Thread.Sleep(3000);
            profileButton.Click();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(4);
            logoutButton.Click();
        }
        //public LoginPage LoginClick()
        //{
        //    Loginbutton.Submit();
        //    driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(4);

        //    return new LoginPage(driver);
        //}
        //public LoginPage LogoutClick()
        //{
        //    Thread.Sleep(3000);
        //    logoutButton.Click();
        //    return new LoginPage(driver);
        //}
    }
}
