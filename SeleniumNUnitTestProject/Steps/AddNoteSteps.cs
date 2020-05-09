using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using SeleniumNUnitTestProject.Pages;
using System;
using TechTalk.SpecFlow;

namespace SeleniumNUnitTestProject
{
    [Binding]
    public class AddNoteSteps
    {
        IWebDriver driver = new ChromeDriver();

        [Given(@"I should navigated to my application")]
        public void GivenIShouldNavigatedToMyApplication()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("http://localhost:4200/login");
        }
        
        [Given(@"I type the credentials")]
        public void GivenITypeTheCredentials(Table table)
        {
            AddNotePage add = new AddNotePage(driver);
          //  dynamic data = table.CreateDynamicInstance();
            //add.Login(data.Email, data.Password);
        }
        [When(@"I click Login Button in the login page")]
        public void WhenIClickLoginButtonInTheLoginPage()
        {
            AddNotePage add = new AddNotePage(driver);
            add.Clicklogin();
        }

        [Given(@"I should see the Dashborad page")]
        public void GivenIShouldSeeTheDashboradPage()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("http://localhost:4200/dashboard/note?page=notes");
        }

        [Given(@"I have write (.*) and (.*)")]
        public void GivenIHaveWriteAnd(string p0, string p1)
        {
            AddNotePage add = new AddNotePage(driver);
            add.Addnote(p0, p1);
        }
        
        [When(@"I click on the close button")]
        public void WhenIClickOnTheCloseButton()
        {
            AddNotePage addnote = new AddNotePage(driver);
            addnote.ClickClose();
        }
    }
}
