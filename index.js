const puppeteer = require("puppeteer");
// command: pm2 --output out.log --error err.log --max-memory-restart 100M --max-restarts 5 start index.js

(async () => {
  const browser = await puppeteer.launch({
    product: "chrome",
    headless: false,
    defaultViewport: null,
    args: ["--use-fake-ui-for-media-stream"],
  });

  const page = await browser.newPage();
  await page.goto("https://teams.microsoft.com");

  await page.waitForSelector(
    "input.form-control.input.ext-input.text-box.ext-text-box[type='email']"
  );
  await page.type(
    "input.form-control.input.ext-input.text-box.ext-text-box[type='email']",
    "YOUR-USER-NAME-OR-EMAIL-ID",
    {
      delay: 50,
    }
  );

  await page.waitForSelector(
    "input.button.ext-button.primary.ext-primary[type='submit'][value='Next']"
  );
  await page.click(
    "input.button.ext-button.primary.ext-primary[type='submit'][value='Next']"
  );

  await page.waitForSelector(
    "input.form-control.input.ext-input.text-box.ext-text-box[type='password']"
  );
  await page.type(
    "input.form-control.input.ext-input.text-box.ext-text-box[type='password']",
    "YOUR-LOGIN-CREDENTIAL",
    {
      delay: 50,
    }
  );

  await page.waitForSelector(
    "input.button.ext-button.primary.ext-primary[type='submit'][value='Sign in']"
  );
  await page.click(
    "input.button.ext-button.primary.ext-primary[type='submit'][value='Sign in']"
  );

  await page.waitForSelector(
    "input.button.ext-button.secondary.ext-secondary[type='button'][value='No']"
  );
  await page.click(
    "input.button.ext-button.secondary.ext-secondary[type='button'][value='No']"
  );

  await page.waitForSelector("a.use-app-lnk[href='#']");
  await page.click("a.use-app-lnk[href='#']");

  await page.waitForSelector("a[data-tid='team-Bot Test']");
  await page.click("a[data-tid='team-Bot Test']");

  await page.waitForTimeout(5000);

  const xpath = `//div[contains(@class, "ts-meeting-message")]/div[contains(@title, "Click to see details of this meeting")]/div[contains(@class, "title")]/span[text()="Regular Meeting Name"]/../../..`;
  await page.waitForXPath(xpath);
  const [meetingElem] = await page.$x(xpath);
  await meetingElem.click();

  await page.waitForSelector(
    "button.ms-Button.ms-Button--primary.root-88[type='button'][aria-label='Join meeting']"
  );
  await page.click(
    "button.ms-Button.ms-Button--primary.root-88[type='button'][aria-label='Join meeting']"
  );

  try {
    await page.waitForSelector(
      "button.ts-toggle-button[track-summary='Toggle camera OFF in meeting pre join screen']"
    );
    await page.click(
      "button.ts-toggle-button[track-summary='Toggle camera OFF in meeting pre join screen']"
    );

    await page.waitForSelector(
      "button.ts-toggle-button[track-summary='Toggle microphone OFF in meeting pre join screen']"
    );
    await page.click(
      "button.ts-toggle-button[track-summary='Toggle microphone OFF in meeting pre join screen']"
    );
  } catch (e) {
    //TODO: handle case where audio/video could not be turned off
  }

  await page.waitForSelector(
    "button.join-btn.ts-btn.inset-border.ts-btn-primary[data-tid='prejoin-join-button']"
  );
  await page.click(
    "button.join-btn.ts-btn.inset-border.ts-btn-primary[data-tid='prejoin-join-button']"
  );
})();
