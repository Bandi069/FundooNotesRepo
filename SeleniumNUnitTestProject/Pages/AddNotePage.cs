using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace SeleniumNUnitTestProject.Pages
{
    class AddNotePage
    {
        IWebDriver webDriver;

        public AddNotePage(IWebDriver webDriver)
        {
            PageFactory.InitElements(webDriver, this);
            this.webDriver = webDriver;
        }

        [FindsBy(How = How.Id, Using = "mat-input-0")]
        private IWebElement txtEmail;

        [FindsBy(How = How.Id, Using = "mat-input-1")]
        private IWebElement txtPassword;

        [FindsBy(How = How.ClassName, Using = "mat-raised-button")]
        private IWebElement buttonLogin;

        [FindsBy(How = How.ClassName, Using = "takeNote")]
        private IWebElement txtMatCard;

        [FindsBy(How = How.Id, Using = "taketitle")]
        private IWebElement txtTitle;

        [FindsBy(How = How.Id, Using = "takedes")]
        private IWebElement txtDescription;

        [FindsBy(How = How.ClassName, Using = "closecls")]
        private IWebElement buttonClose;
        public void Login(string Email, string Password)
        {
           Thread.Sleep(5000);
            txtEmail.SendKeys(Email);
            txtPassword.SendKeys(Password);
        }

        public void Clicklogin()
        {
            buttonLogin.Click();
        }
        public void Addnote(string Title, string Description)
        {
           
            txtMatCard.Click();
            Thread.Sleep(4000);
            txtTitle.SendKeys(Title);
            txtDescription.SendKeys(Description);
        }
        public DashboardPage ClickClose()
        {
            buttonClose.Click();
            return new DashboardPage(webDriver);
        }

    }
}
