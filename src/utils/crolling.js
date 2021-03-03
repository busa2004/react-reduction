import ReactDOM from 'react-dom'
const axios = require("axios");
const cheerio = require("cheerio");

const QQQ_URL = "/finance/quote/QQQ:NASDAQ"
const ARKK_URL = "/finance/quote/ARKK:NYSEARCA"

function delay(ms) {
  return new Promise(function(resolve, reject) {
      setTimeout(function(){
          resolve();
      },ms);
  });
}

function getHTML(url) {
  return new Promise(resolve=>{
      delay(300).then(function() {
          axios.get(url).then(function(data) {
              resolve(data);
          });
      });
  })    
}

function call(URL,name){
  getHTML(URL)
    .then(html => {
      const $ = cheerio.load(html.data);
      const data = { prePrice :  $(".tO2BSb.eExqnb.DnMTof").find("div.YMlKec.fxKbKc").text(),
                     nowPrice :  $(".AHmHk").find("div.YMlKec.fxKbKc").text()
                   }
      return data;
    }).then(e => {
      if(document.getElementById(name+'Price')) {

      ReactDOM.render(e.nowPrice,document.getElementById(name+'Price'))
      ReactDOM.render('$' + (document.getElementById(name+'Count').innerHTML 
                       * e.nowPrice.substr(1)).toFixed(2) ,document.getElementById(name+'Total'))
      }
    })
}

function print(){
  call(QQQ_URL,'QQQ')
  call(ARKK_URL,'ARKK')
}


export const start = () => {
  print()
  setInterval(print,10000);
}



