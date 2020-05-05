

using OpenQA.Selenium;

using SeleniumExtras.PageObjects;
//using SeleniumExtras.PageObjects;
using SeleniumNUnitTestProject.Pages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitTestProject.Pages
{
    class LoginPage
    {
        IWebDriver driver;
        public LoginPage(IWebDriver currentDriver)
        {
            PageFactory.InitElements(currentDriver, this);
        }

        [FindsBy(How = How.Name, Using = "Emailid")]
        public IWebElement textEmailid;

        [FindsBy(How = How.Name, Using = "Password")]
        public IWebElement textPassword;

        [FindsBy(How = How.Name, Using = "Login")]
        public IWebElement loginbutton;
        public void Login(string Emailid, string Password)
        {
            textEmailid.SendKeys(Emailid);
            textPassword.SendKeys(Password);
        }
        public DashboardPage ClickLogin()
        {
            loginbutton.Submit();
            return new DashboardPage(driver);
            // throw new NotImplementedException();
        }
    }
}
