const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 2 });

  await page.setContent(`
    <html>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 1080px;
          height: 1920px;
          font-family: 'Inter', sans-serif;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0;
        }
        .header {
          width: 100%;
          height: 360px;
          background: linear-gradient(135deg, #ff9700, #ff6253, #fc4696, #c964e2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .header-badge {
          background: rgba(255,255,255,0.2);
          border-radius: 40px;
          padding: 14px 36px;
          color: #fff;
          font-size: 26px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .header h1 {
          color: #FFFFFF;
          font-size: 60px;
          font-weight: 700;
          text-align: center;
          line-height: 1.2;
        }
        .header h1 span {
          display: block;
          font-size: 32px;
          font-weight: 500;
          margin-top: 10px;
          opacity: 0.9;
        }
        .content {
          flex: 1;
          width: 100%;
          padding: 28px 56px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0;
        }
        .speaker {
          display: flex;
          align-items: center;
          gap: 28px;
          background: #f8f9fa;
          border-radius: 20px;
          padding: 28px;
        }
        .speaker img {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid #ff9700;
        }
        .speaker-info h3 {
          font-size: 42px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 10px;
        }
        .speaker-info p {
          font-size: 26px;
          color: #6b7280;
          line-height: 1.5;
        }
        .topics {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .topic {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .topic-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff9700, #fc4696);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 38px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .topic-text h4 {
          font-size: 36px;
          font-weight: 600;
          color: #ff9700;
          margin-bottom: 4px;
        }
        .topic-text p {
          font-size: 26px;
          color: #6b7280;
          line-height: 1.4;
        }
        .details {
          background: #f8f9fa;
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .detail-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          font-size: 30px;
        }
        .detail-label {
          font-weight: 600;
          color: #1a1a2e;
          min-width: 170px;
        }
        .detail-value {
          color: #6b7280;
        }
        .contribution {
          text-align: center;
          padding: 22px;
          border: 2px solid #ff9700;
          border-radius: 20px;
        }
        .contribution p {
          font-size: 30px;
          color: #1a1a2e;
          font-weight: 600;
        }
        .contribution .amount {
          font-size: 52px;
          color: #ff9700;
          font-weight: 700;
          margin-top: 6px;
        }
        .cta {
          text-align: center;
          padding-bottom: 0;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #ff9700, #ff6253);
          color: #fff;
          font-size: 36px;
          font-weight: 700;
          padding: 28px 80px;
          border-radius: 50px;
          text-decoration: none;
          letter-spacing: 0.5px;
        }
        .cta-link {
          margin-top: 10px;
          font-size: 26px;
          color: #6b7280;
        }
        .footer {
          width: 100%;
          text-align: center;
          padding: 20px;
          background: #f8f9fa;
        }
        .footer p {
          font-size: 20px;
          color: #9ca3af;
        }
        .footer strong {
          color: #1a1a2e;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="header-badge">Convite Exclusivo</div>
        <h1>8&ordf; Edi&ccedil;&atilde;o do Jantar<br>de Executivos
          <span>Fundo Patrimonial Patronos</span>
        </h1>
      </div>

      <div class="content">
        <div class="speaker">
          <img src="https://www2.unicamp.br/unicamp/sites/default/files/banco_imagens/2019/04/05/20190329_4-5_anderson-de-rezende-rocha-posse-no-IC-instituto-eldorado_scarpa_AJS_2443.jpg" alt="Prof. Anderson Rocha" />
          <div class="speaker-info">
            <h3>Prof. Anderson Rocha</h3>
            <p>Top 2% cientistas do mundo (Stanford)<br>Microsoft &amp; Google Research Fellow<br>Pr&ecirc;mio Zeferino Vaz 2025</p>
          </div>
        </div>

        <div class="topics">
          <div class="topic">
            <div class="topic-icon">1</div>
            <div class="topic-text">
              <h4>O Futuro da IA</h4>
              <p>Vis&atilde;o &uacute;nica sobre o impacto estrat&eacute;gico da Intelig&ecirc;ncia Artificial para o Brasil</p>
            </div>
          </div>
          <div class="topic">
            <div class="topic-icon">2</div>
            <div class="topic-text">
              <h4>Brasil como L&iacute;der Global</h4>
              <p>Como a IA pode impulsionar o pa&iacute;s em diversas &aacute;reas estrat&eacute;gicas</p>
            </div>
          </div>
          <div class="topic">
            <div class="topic-icon">3</div>
            <div class="topic-text">
              <h4>O Papel da Unicamp</h4>
              <p>Vanguarda da pesquisa e inova&ccedil;&atilde;o tecnol&oacute;gica no pa&iacute;s</p>
            </div>
          </div>
        </div>

        <div class="details">
          <div class="detail-row">
            <span class="detail-label">Onde:</span>
            <span class="detail-value">Sociedad Gastronomica - Itaim Bibi, S&atilde;o Paulo</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Quando:</span>
            <span class="detail-value">14 de abril de 2026, Ter&ccedil;a-feira</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Hor&aacute;rio:</span>
            <span class="detail-value">19h &agrave;s 23h</span>
          </div>
        </div>

        <div class="contribution">
          <p>Contribui&ccedil;&atilde;o m&iacute;nima</p>
          <p class="amount">R$ 1.000</p>
        </div>

        <div class="cta">
          <div class="cta-button">Confirme sua Presen&ccedil;a</div>
          <p class="cta-link">tally.so/r/KY0AMX</p>
        </div>
      </div>

      <div class="footer">
        <p><strong>Fundo Patrimonial Patronos</strong> &mdash; Acelerando a miss&atilde;o acad&ecirc;mica da Unicamp</p>
      </div>
    </body>
    </html>
  `, { waitUntil: 'networkidle2', timeout: 30000 });

  await page.screenshot({
    path: 'out/JantarExecutivos8Edicao-whatsapp.png',
    clip: { x: 0, y: 0, width: 1080, height: 1920 },
    type: 'png'
  });

  await browser.close();
  console.log('Imagem gerada: out/JantarExecutivos8Edicao-whatsapp.png');
})();
