const dotenv = require("dotenv");
const axios = require("axios");
const cheerio = require("cheerio");

dotenv.config();

async function main() {
  const pageHTML = await getHTML();

  printGiftCode(pageHTML);
}

function getHTML() {
  return axios.get(process.env.FIRST_CERTIFICATE_URL);
}
function printGiftCode(html) {
  const $ = cheerio.load(html.data);
  const giftCode = $("#card-number").text();

  console.log(`The claim code for the Gift Card is: ${giftCode}`);
}
main();
