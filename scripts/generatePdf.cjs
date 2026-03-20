const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const htmlPath = 'file:///' + path.resolve('out/JantarExecutivos8Edicao.html').replace(/\\/g, '/');
  await page.goto(htmlPath, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.pdf({
    path: 'out/JantarExecutivos8Edicao.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' }
  });
  await browser.close();
  console.log('PDF gerado: out/JantarExecutivos8Edicao.pdf');
})();
