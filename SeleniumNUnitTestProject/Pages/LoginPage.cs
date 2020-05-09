using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
//using SeleniumExtras.PageObjects;
using SeleniumNUnitTestProject.Pages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace UnitTestProject.Pages
{
   public class LoginPage
    {
        IWebDriver driver;
        public LoginPage(IWebDriver currentDriver)
        {
            PageFactory.InitElements(currentDriver, this);
        }

        [FindsBy(How = How.Id, Using = "mat-input-0")]
        public IWebElement textEmail;

        [FindsBy(How = How.Id, Using = "mat-input-1")]
        public IWebElement textPassword;

        [FindsBy(How = How.ClassName, Using = "mat-raised-button")]
        public IWebElement loginbutton;
        public void Login(string Email, string Password)
        {
            Thread.Sleep(5000);
            textEmail.SendKeys(Email);
            textPassword.SendKeys(Password);
        }
        public DashboardPage ClickLogin()
        {
            loginbutton.Submit();
            return new DashboardPage(driver);
        }
    }
}
