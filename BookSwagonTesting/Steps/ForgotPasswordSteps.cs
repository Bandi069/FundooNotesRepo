using BookSwagonTesting.Pages;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace BookSwagonTesting.Steps
{
    [Binding]
    public class ForgotPasswordSteps
    {
        IWebDriver driver = new ChromeDriver();

        [Given(@"I have navigate to Forgotpassword application")]
        public void GivenIHaveNavigateToForgotpasswordApplication()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://www.bookswagon.com/forgetpassword");
        }
        
        [Given(@"I have entetered credential (.*)")]
        public void GivenIHaveEnteteredCredential(string Email)
        {
            ForgotPasswordPage forgotPasswordPage = new ForgotPasswordPage(driver);
            forgotPasswordPage.Forgot(Email);
        }
        [When(@"I Click on Submit Button")]
        public void WhenIClickOnSubmitButton()
        {
            ForgotPasswordPage forgotPasswordPage = new ForgotPasswordPage(driver);
            forgotPasswordPage.ClickForgot();

        }
        
        [Then(@"I display the login page of my application")]
        public void ThenIDisplayTheLoginPageOfMyApplication()
        {
          //  ScenarioContext.Current.Pending();
        }
    }
}
