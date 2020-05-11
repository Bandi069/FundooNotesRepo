using BookSwagonTesting.Pages;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace BookSwagonTesting.Steps
{
    [Binding]
    public class SignupSteps
    {
        IWebDriver driver = new ChromeDriver();

        [Given(@"I have navigate to signup page of the application")]
        public void GivenIHaveNavigateToSignupPageOfTheApplication()
        {
            //// For the window maximize
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://www.bookswagon.com/signup");
        }
        
        [Given(@"I have fill the details  bandivenu(.*)@gmail\.com,sanVedha(.*)\$ and sanVdeha(.*)\$")]
        public void GivenIHaveFillTheDetailsBandivenuGmail_ComSanVedhaAndSanVdeha(string p0, string p1, string p2)
        {
            SignupPage signupPage = new SignupPage(driver);
            signupPage.Signup(p0,p1,p2);
            
        }
        
        [When(@"I click on the creataccount button")]
        public void WhenIClickOnTheCreataccountButton()
        {
            SignupPage signupPage = new SignupPage(driver);
            signupPage.SignupClick();
        }
        
        [Then(@"I navigate to the login page")]
        public void ThenINavigateToTheLoginPage()
        {
            //ScenarioContext.Current.Pending();
        }
    }
}
