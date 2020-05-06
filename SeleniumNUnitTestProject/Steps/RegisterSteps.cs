using System;
using TechTalk.SpecFlow;

namespace SeleniumNUnitTestProject
{
    [Binding]
    public class RegisterSteps
    {
        [Given(@"I have navigate to register application form")]
        public void GivenIHaveNavigateToRegisterApplicationForm()
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I click on the submit button")]
        public void WhenIClickOnTheSubmitButton()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Then(@"Isee the login page")]
        public void ThenIseeTheLoginPage()
        {
            ScenarioContext.Current.Pending();
        }
    }
}
