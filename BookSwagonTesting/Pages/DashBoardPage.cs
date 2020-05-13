using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookSwagonTesting.Pages
{
    class DashBoardPage
    {
        IWebDriver driver;
        public DashBoardPage(IWebDriver webDriver)
        {
            PageFactory.InitElements(webDriver, this);
           // this.driver = driver;

        }
    }
}
