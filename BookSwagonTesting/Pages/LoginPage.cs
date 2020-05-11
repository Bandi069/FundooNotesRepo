using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookSwagonTesting.Pages
{
    class LoginPage
    {
        IWebDriver webDriver;
        public LoginPage(IWebDriver webDriver)
        {
            PageFactory.InitElements(webDriver,this);
            this.webDriver = webDriver;
        }

    }
}
