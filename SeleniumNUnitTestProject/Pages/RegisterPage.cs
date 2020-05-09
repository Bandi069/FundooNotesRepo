using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using UnitTestProject.Pages;

namespace SeleniumNUnitTestProject.Pages
{
    public class RegisterPage
    {
        IWebDriver webdriver;
        public RegisterPage(IWebDriver driver)
        {
            PageFactory.InitElements(driver, this);
            this.webdriver = driver;
        }
        [FindsBy(How = How.Id, Using = "mat-input-0")]
        private IWebElement txtFirstName;
        [FindsBy(How = How.Id, Using = "mat-input-1")]
        private IWebElement txtLastName;
        [FindsBy(How = How.Id, Using = ("mat-input-2"))]
        private IWebElement txtEmail;
        [FindsBy(How = How.Id, Using = ("mat-input-3"))]
        private IWebElement txtPassword;
        [FindsBy(How = How.ClassName, Using = ("mat-raise-button"))]
        private IWebElement registerbutton;

        public  void  Register(string FirstName,string LastName,string Email,string Password)
        {
            Thread.Sleep(5000);
            txtFirstName.SendKeys(FirstName);
            txtLastName.SendKeys(LastName);
            txtEmail.SendKeys(Email);
            txtPassword.SendKeys(Password);
        }
        public LoginPage ClickRegister()
        {
            registerbutton.Submit();
            return new LoginPage(webdriver);
        }
    }
}
