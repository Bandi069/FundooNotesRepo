using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace SeleniumNUnitTestProject.Pages
{
    class ReminderPage
    {
        IWebDriver webDriver;
        public ReminderPage(IWebDriver currentDriver)
        {
            PageFactory.InitElements(currentDriver, this);
            this.webDriver = currentDriver;
        }

        [FindsBy(How = How.Id, Using ="reminder")]
        private IWebElement txtreminder;

        [FindsBy(How = How.Id, Using = "select")]
        private IWebElement txtselect;
        [FindsBy(How = How.ClassName, Using = "date")]
        private IWebElement txtdate;
        [FindsBy(How = How.ClassName, Using = "time")]
        private IWebElement txttime;
        [FindsBy(How = How.ClassName, Using = "btnsave")]
        private IWebElement btndatesave;

        public void reminder()
        {
            txtreminder.Click();
        }
        public void select()
        {
            txtselect.Click();
        }
        public void date(string Date,string Time)
        {
            Thread.Sleep(5000);
            txtdate.SendKeys(Date);
            txttime.SendKeys(Time);

        }
        public DashboardPage clicksave()
        {
            btndatesave.Submit();
            return new DashboardPage(webDriver);
        }

    }
}
