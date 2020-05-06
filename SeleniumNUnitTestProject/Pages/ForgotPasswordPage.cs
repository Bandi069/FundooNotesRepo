using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using UnitTestProject.Pages;

namespace SeleniumNUnitTestProject.Pages
{
    public class ForgotPasswordPage
    {
        IWebDriver webDriver;
        public ForgotPasswordPage(IWebDriver driver)
        {
            PageFactory.InitElements(driver, this);
            this.webDriver = driver;
        }
        [FindsBy(How = How.Id, Using = "mat-input-0")]
        private IWebElement txtEmail;
        [FindsBy(How = How.ClassName, Using = "mat-raised-button")]
        private IWebElement forgotbutton;
        public void Forgot(string Email)
        {
            Thread.Sleep(5000);
            txtEmail.SendKeys(Email);
        }
        public LoginPage ClickForgot()
        {
            forgotbutton.Submit();
            return new LoginPage(webDriver);
        }

    }
}
