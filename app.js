//importação de modulos
//Builder - BY - KEY
const {Builder, By, Key} = require('selenium-webdriver');

//importa o obj chrome do modulo selenium-webdriver/chrome 
const chrome = require('selenium-webdriver/chrome');

//importar modulo chromedriver
const chromedriver = require('chromedriver');

//criar um novo obj
const service = ()=> chrome.setDefaultservice(new chrome.ServiceBuilder(chromedriver.path).build())

//definir funçao 
async function run(){
    //criar um novo objeto webdriver 
    let driver = await new Builder().forBrowser('chrome').build();

    //abre a pagina
    await driver.get('https://br.linkedin.com/');

    //encontra o elemento com o nome no navegador 
    const user = await driver.findElement(By.name('session_key'));

    //encontra o elemento com o nome no navegador 
    const senha = await driver.findElement(By.name('session_password'));

    //insere o texto
    await user.sendKeys("email");
      //Pressionar o enter 
      await user.sendKeys(Key.ENTER);

    await senha.sendKeys("senha");
      //Pressionar o enter 
      await senha.sendKeys(Key.ENTER);



  

}

//chama a função
run();