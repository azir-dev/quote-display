let quotes = [];
// 获取 dom 节点
const quoteContent = document.getElementById("quote-content");
const quoteAuth = document.getElementById("quote--author");
const newQuoteBtn = document.getElementById("new-quote");
const postTwitterBtn = document.getElementById("twitter-button");

function displayQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  // 名句太长时对文字大小限制
  if (quote.text.length > 120) {
    quoteContent.classList.add("long-quote");
  } else {
    quoteContent.classList.remove("long-quote");
  }
  // 显示名句内容
  quoteContent.textContent = quote.text;
  // 显示名句作者或是佚名
  quoteAuth.textContent = quote.author || "Unknown";
}

function postTwitter() {
  console.log("post twitter");
  const url = `https://twitter.com/intent/tweet?text=${quoteContent.textContent} - ${quoteAuth.textContent}`;
  window.open(url, "_blank");
}

async function getQuotes() {
  const url = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(url);
    quotes = await response.json();
    displayQuote();
  } catch (error) {
    alert(error);
  }
}

// 事件处理
// 给显示名句按钮添加点击事件，随机一条新的名句
newQuoteBtn.addEventListener("click", displayQuote);
// 给分享到推特按钮添加点击事件
postTwitterBtn.addEventListener("click", postTwitter);

// onload
getQuotes();
