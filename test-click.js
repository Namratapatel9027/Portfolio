const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // A minimal page with exactly our structure
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    .pointer-events-none { pointer-events: none; }
    .pointer-events-auto { pointer-events: auto; }
    
    .btn-17 {
      cursor: pointer;
      overflow: hidden;
      position: relative;
      border-radius: 99rem;
      z-index: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      min-width: 220px !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      background: white;
      padding: 1rem 2rem;
      text-decoration: none;
      color: black;
    }
    .btn-17 .text-container {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
    }
    .btn-17 .text {
      display: flex;
      align-items: center;
      position: relative;
    }
    .btn-17:after,
    .btn-17:before {
      --skew: 0.2;
      background: #00F2FE;
      content: "";
      display: block;
      height: 102%;
      left: calc(-50% - 50% * var(--skew));
      pointer-events: none;
      position: absolute;
      top: -104%;
      transform: skew(calc(150deg * var(--skew))) translateY(var(--progress, 0));
      transition: transform 0.2s ease;
      width: 100%;
      z-index: 1; /* Fix: Above the button background */
    }

    .btn-17:after {
      --progress: 0%;
      left: calc(50% + 50% * var(--skew));
      top: 102%;
      z-index: 1; /* Fix: Above the button background */
    }
    </style>
    </head>
    <body>
      <div class="pointer-events-none" style="padding: 100px;">
        <div class="pointer-events-auto">
          <a href="#success" class="btn-17" id="mybtn">
            <span class="text-container">
              <span class="text">View Projects</span>
            </span>
          </a>
        </div>
      </div>
    </body>
    </html>
  `);
  
  await page.click('#mybtn');
  const url = await page.url();
  console.log("Clicked! Resulting URL:", url);
  await browser.close();
})();
