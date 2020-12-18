module.exports = {
    'challenge test' : function (browser) {
      browser
        .url(browser.launchUrl)
        .waitForElementVisible('#shellmenu_1', 1000)
        .waitForElementVisible('#shellmenu_2', 1000)
        .waitForElementVisible('#shellmenu_3', 1000)
        .waitForElementVisible('#shellmenu_4', 1000)
        .click('#shellmenu_2')
        .waitForElementVisible('#c-shellmenu_54', 3000)
        .click('#c-shellmenu_54')
        .click('#search')
        .pause(2000)
        .sendKeys('#search', 'Visual Studio')
        .click('#search')
        .assert.containsText('#coreui-productplacement-30l7ywa_0 > div:nth-child(2) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1)', '899')
        //.waitForElementVisible('#R1MarketRedirect-close', 10000)
        //.click('#R1MarketRedirect-close')
        //.pause(1000)
        //.click('#search')
        //.assert.containsText('#main', 'Night Watch')
        //Diferent methods a used to try to print 
        //document.getElementsByClassName("data-class-idn").options;
        //var elements = document.getElementsByClassName("data-class-idn")
        //console.log(elements)
        /*browser.elements("css selector", "data-class-idn", function(tags) {
          console.log(tags.value);
          console.log(tags.value[9]);*/
        .end();   
    }
    
  };