using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using SeleniumNUnitTestProject.Pages;
using System;
using TechTalk.SpecFlow;

namespace SeleniumNUnitTestProject
{
    [Binding]
    public class RegisterSteps
    {
        IWebDriver driver = new ChromeDriver();
        [Given(@"I have navigate to Register application")]
        public void GivenIHaveNavigateToRegisterApplication()
        {
            driver.Navigate().GoToUrl("http://localhost:4200/register");
        }

        [Given(@"I have fill the details  Venu,Bandi,bandivenu(.*)@gmail\.com and sanVedha(.*)")]
        public void GivenIHaveFillTheDetailsVenuBandiBandivenuGmail_ComAndSanVedha(int p0, int p1)
        {
            RegisterPage registerPage = new RegisterPage(driver);
          //registerPage.Register(p0, p1);
        }
        [When(@"I click on the submit button")]
        public void WhenIClickOnTheSubmitButton()
        {
            RegisterPage registerPage = new RegisterPage(driver);
            registerPage.ClickRegister();
            driver.Close();
        }

        [Then(@"I navigate to the login page")]
        public void ThenINavigateToTheLoginPage()
        {
            ///ScenarioContext.Current.Pending();
        }
    }
}
