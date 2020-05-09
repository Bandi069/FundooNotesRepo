using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace SeleniumNUnitTestProject.Pages
{
   public class DashboardPage 
    {

        public DashboardPage(IWebDriver currentDriver)
        {
            PageFactory.InitElements(currentDriver, this);
           // this.currentDriver = currentDriver;
        }
    }
}
