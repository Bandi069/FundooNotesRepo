using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
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
            chromeOptions.AddArguments("--start maximized");
            driver = new ChromeDriver(chromeOptions);
            driver.Navigate().GoToUrl("");
        }
        
        [Given(@"I have entetered the (.*)")]
        
        public void GivenIHaveEnteteredThe(string p0)
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I Click on Submit Button")]
        public void WhenIClickOnSubmitButton()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Then(@"I display the login page of my application")]
        public void ThenIDisplayTheLoginPageOfMyApplication()
        {
            ScenarioContext.Current.Pending();
        }
    }
}
