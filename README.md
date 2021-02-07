# Trend Scraper


### Installation

Trend scraper requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and start the server.

```sh
$ cd google_trend_scraper
$ npm install
```

To see it in action you need to create a service account in google cloud platform (it's free)...

```sh
$ go to [API & Services] --> Dashboards
$ click >Enable Apis and Services
$ search for Google sheets and Enable it.
$ go to [API & Services] --> Credentials.
$ create a Service Account (you can name it as you want).
$ you want to be project owner.

$ Create a new sheet in Google Sheets
$ share it with the service account email you just created.
$ click >Edit on the service account
$ create a new key --> JSON
$ add it to the folder and name it credentials.json

$ add google sheet id to your sheet.js

https://docs.google.com/spreadsheets/d/1gRNf-****************-Q77Fe******qjaXko/edit#gid=0

  constructor() {
    this.doc = new GoogleSpreadsheet('1gRNf-****************-Q77Fe******qjaXko');
  }
  
$ such wow. now google sheet is the database for the scraper
```


