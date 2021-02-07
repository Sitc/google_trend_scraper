const fetch = require('node-fetch');
const cheerio = require('cheerio');
const Sheet = require('./sheet');

async function scrapePage(i) {
  const res = await fetch(`https://explodingtopics.com/pets-topics-right-now?page=${i}`);
  const text = await res.text();

  const $ = cheerio.load(text);
  const containers = $('.topicInfoContainer').toArray()

  const trends = containers.map(c => {
    const active = $(c);
    const keyword = active.find('.tileKeyword').text();
    const description = active.find('.tileDescription').text();
    const searches = active.find('.scoreTag').first().text().split('mo')[1];
    const growthData = active.find('.scoreTagItem').text();
    const growth = active.find('.scoreTagItem').text().split('K')[1];
    const trendDirection = growthData.includes('↑') ? 'up' : 'down'
    return { keyword, description, searches, growth, trendDirection }
  })
  return trends
}

(async function() {
  let i = 1;
  let trends = []
  while(true) {
    const newTrends = await scrapePage(i)
    console.log('new trend length', newTrends.length)
    if(newTrends.length === 0) break;
    trends = trends.concat(newTrends)
    i++
  }

  console.log('total trends length', trends)

  const sheet = new Sheet();
  await sheet.load();

  sheet.addRows(trends)
})();