const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet('1gRNf-Z8Pl5Rl3YQDMV1EH0jAe-Q77FeR4H9S1qjaXko');
  }
  async load() {
    await this.doc.useServiceAccountAuth(require('./credentials.json'));
    await this.doc.loadInfo();
  }
  async addRows(rows) {
    const sheet = this.doc.sheetsByIndex[0];
    await sheet.addRows(rows)
  }
}