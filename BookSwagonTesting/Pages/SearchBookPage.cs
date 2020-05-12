using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;

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
    }
}
