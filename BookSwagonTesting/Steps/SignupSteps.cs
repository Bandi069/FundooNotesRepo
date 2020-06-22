using BookSwagonTesting.Pages;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;
using TechTalk.SpecFlow.Assist;

namespace BookSwagonTesting.Steps
{
    [Binding]
    class SignupSteps
    {
        IWebDriver driver = new ChromeDriver();

        [Given(@"I have navigate to signup page of the application")]
        public void GivenIHaveNavigateToSignupPageOfTheApplication()
        {
            //// For the window maximize
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://www.bookswagon.com/signup");
        }
        [Given(@"I have fill the details  (.*),(.*) and (.*)")]
        public void GivenIHaveFillTheDetailsAnd(string Email, string Password, string ConfirmPassword)
        {
            SignupPage signupPage = new SignupPage(driver);
            signupPage.Signup(Email, Password, ConfirmPassword);
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
            driver.Navigate().GoToUrl("https://www.bookswagon.com/signup");
        }
        [When(@"I should enter the (.*) and (.*)")]
        public void WhenIShouldEnterTheAnd(string p0, string p1, Table table)
        {
            SignupPage signup = new SignupPage(driver);
            dynamic values = table.CreateDynamicInstance();
            signup.AccountLogin(values.p0, values.p1);
        }
        [Then(@"I have to click on LoginButton")]
        public void ThenIHaveToClickOnLoginButton()
        {
            SignupPage signup = new SignupPage(driver);
            // PropertyCollection.CurrentPage = 
            // signup.clicklogin();
        }

        [Then(@"I should see the Home page")]
        public void ThenIShouldSeeTheHomePage()
        {
            SignupPage signup = new SignupPage(driver);
            signup.LoginClick();
        }
        [When(@"I should press on Search area")]
        public void WhenIShouldPressOnSearchArea()
        {
            SignupPage signup = new SignupPage(driver);
            signup.Searchbox();
        }

        [When(@"I should enter a text to search list")]
        public void WhenIShouldEnterATextToSearchList()
        {
            SignupPage signupPage = new SignupPage(driver);
            signupPage.Searchtext();
        }

        [When(@"I click on the search button in homepage")]
        public void WhenIClickOnTheSearchButtonInHomepage()
        {
            SignupPage signupPage = new SignupPage(driver);
            signupPage.ClickSearch();

        }
        [Then(@"It result should be Books list on Homepage")]
        public void ThenItResultShouldBeBooksListOnHomepage()
        {
            SignupPage signupPage = new SignupPage(driver);
        }
        [When(@"I should press buynow option in the list of books")]
        public void WhenIShouldPressBuynowOptionInTheListOfBooks()
        {
            SignupPage signupPage = new SignupPage(driver);
            signupPage.buyclick();
        }
        [Then(@"it should display place order page")]
        public void ThenItShouldDisplayPlaceOrderPage()
        {

        }
        [When(@"I click placeorder button for Place an order")]
        public void WhenIClickPlaceorderButtonForPlaceAnOrder()
        {
            SignupPage signupPage = new SignupPage(driver);
            signupPage.placeorder();
        }

        [Then(@"It should show continue to order")]
        public void ThenItShouldShowContinueToOrder()
        {

        }
        [When(@"I click on the Logout button")]
        public void WhenIClickOnTheLogoutButton()
        {
            SignupPage signupPage = new SignupPage(driver);
            signupPage.logout();
        }

        [Then(@"It should navigate to Login page")]
        public void ThenItShouldNavigateToLoginPage()
        {

        }
    }
}
