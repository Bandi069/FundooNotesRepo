using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using SeleniumNUnitTestProject.Pages;
using System;
using TechTalk.SpecFlow;

namespace SeleniumNUnitTestProject
{
    [Binding]
    public class ColorSteps
    {
        IWebDriver driver = new ChromeDriver();
        [Given(@"I have navigated to displaysashboard application page")]
        public void GivenIHaveNavigatedToDisplaysashboardApplicationPage()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("http://localhost:4200/dashBoard/display?page=notes");
            ColorPage color = new ColorPage(driver);
            //ScenarioContext.Current.Pending();
        }
        
        [Given(@"I have click the ColorPalette icon")]
        public void GivenIHaveClickTheColorPaletteIcon()
        {
            ColorPage colorPage= new ColorPage(driver);
            colorPage.ColorPalette();
        }
        
        [Then(@"I click on the color from colorPalette")]
        public void ThenIClickOnTheColorFromColorPalette()
        {
            ColorPage color = new ColorPage(driver);
            color.selectColor();
           driver.Quit();
        }
    }
}
