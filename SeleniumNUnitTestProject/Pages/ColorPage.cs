using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace SeleniumNUnitTestProject.Pages
{
    class ColorPage
    {
        IWebDriver webDriver;

        public ColorPage(IWebDriver driver)
        {
            PageFactory.InitElements(driver, this);
            this.webDriver = driver;
        }
        [FindsBy(How = How.ClassName, Using = "closedmatcard")]
        private IWebElement txtCard;

        [FindsBy(How = How.Id, Using = "colorPalette")]
        private IWebElement color;

        [FindsBy(How = How.XPath, Using = "//div[@class='ng-star-inserted']//div[1]//div[2]//button[1]")]
        private IWebElement changeColor;

        public void ColorPalette()
        {
            txtCard.Click();
            webDriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            color.Click();

        }
        public void selectColor()
        {
            webDriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            changeColor.Click();
        }
    }
}
