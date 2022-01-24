import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("contains large dataset example text", async () => {
    await page.goto("http://localhost:5000");
    await page.waitForSelector(".MuiTypography-h6");
    const text = await page.$eval(".MuiTypography-h6", (e) => e.textContent);
    expect(text).toContain("Large Data Set Example");
  });

  afterAll(() => browser.close());
});
