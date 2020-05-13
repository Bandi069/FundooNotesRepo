using Microsoft.VisualStudio.TestPlatform.ObjectModel.DataCollection;
using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using UnitTestProject.Pages;

namespace SeleniumNUnitTestProject.Pages
{
    class LogoutPage
    {
        IWebDriver webDriver;
        public LogoutPage(IWebDriver driver)
        {
            PageFactory.InitElements(driver, this);
            this.webDriver = driver;
        }
        [FindsBy(How = How.Id, Using = "btnlogout")]
        private IWebElement btnlogout;

        public LoginPage ClickSignout()
        {
            btnlogout.Click();
            return new LoginPage(webDriver);
        }
    }
}
