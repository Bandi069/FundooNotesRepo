using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using SeleniumNUnitTestProject.Pages;
using System;
using TechTalk.SpecFlow;

namespace SeleniumNUnitTestProject.Steps
{
    [Binding]
    public class ForgotPasswordSteps
    {
        IWebDriver driver = new ChromeDriver();
        [Given(@"I have navigate to Forgotpassword application")]
        public void GivenIHaveNavigateToForgotpasswordApplication()
        {
            ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.AddArguments("start maximized");
            driver = new ChromeDriver(chromeOptions);
            driver.Navigate().GoToUrl("http://localhost:4200/forgot");
        }
        
        [Given(@"I have entetered the (.*)")]
        
        public void GivenIHaveEnteteredThe(string p0)
        {
            ForgotPasswordPage forgotobj = new ForgotPasswordPage(driver);
            forgotobj.Forgot(p0);

        }
        
        [When(@"I Click on Submit Button")]
        public void WhenIClickOnSubmitButton()
        {
            ForgotPasswordPage forgotPasswordPage = new ForgotPasswordPage(driver);

            //ScenarioContext.Current.Pending();
        }
        
        [Then(@"I display the login page of my application")]
        public void ThenIDisplayTheLoginPageOfMyApplication()
        {
           // ScenarioContext.Current.Pending();
        }
    }
}
