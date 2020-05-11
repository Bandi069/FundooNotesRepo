using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace BookSwagonTesting.Pages
{
    class SignupPage
    {
        IWebDriver webDriver;
        public SignupPage(IWebDriver webDriver)
        {
            PageFactory.InitElements(webDriver, this);
            this.webDriver = webDriver;
        }
        [FindsBy(How = How.ClassName, Using = "new-txt-box")]
        private IWebElement txtEmail;
        [FindsBy(How = How.Id, Using = "ctl00_phBody_SignUp_txtPassword")]
        private IWebElement txtPassword;
        [FindsBy(How = How.Id, Using = "ctl00_phBody_SignUp_txtConfirmPwd")]
        private IWebElement txtConfirmPassword;
        [FindsBy(How = How.Id, Using = "ctl00_phBody_SignUp_btnSubmit")]
        private IWebElement signuprbutton;
        public void Signup(string Email, string Password, string ConfirmPassword)
        {
            Thread.Sleep(5000);
            txtEmail.SendKeys(Email);
            txtPassword.SendKeys(Password);
            txtConfirmPassword.SendKeys(ConfirmPassword);
        }
        public SignupPage SignupClick()
        {
            signuprbutton.Submit();
            return new SignupPage(webDriver);
        }
    }
}
