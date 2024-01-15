const axios = require("axios");
const cheerio = require("cheerio");

const FIRST_CERTIFICATE_URL =
  "https://distribution.giftlov.com/api/Orders/95ccc5cc-dec2-480f-a0b9-37233c064133/49f5520479158e085a8d10000cc7740a0834bbde49493a0493415cae2a57ad6a/o/15642927?r=5.611925132178843";
async function main() {
  const pageHTML = await getHTML();

  printGiftCode(pageHTML);
}

function getHTML() {
  return axios.get(FIRST_CERTIFICATE_URL);
}
function printGiftCode(html) {
  const $ = cheerio.load(html.data);
  const giftCode = $("#card-number").text();

  console.log(`The claim code for the Gift Card is: ${giftCode}`);
}
main();
