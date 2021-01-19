const axios = require("axios");
var cron = require("node-cron");
var QuickBooksTransactions = require("../app/helpers/QuickBooksTransactions.service");

// Constants
const AUTH_TOKEN = process.env.AUTH_TOKEN || 'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..1LvpPq3oD5gwrSmtKhutJQ.JCdtOVOvHS1-jfXaSJBb8m3Gf8R6JpJKnSpeczyGea-VL9rcukXtv1t0qQUu6kQweQP9Mk2nIMBk2nnrUnNLJArJXPTBjFgx0VIF7riwqdHlAVQGO3GSjfeKe96G33mCyO5Li8C1MtQQEXxYLJQwp94pRwCYCu6i3tbVsXWD2nEZ1xiLmGecgrbYmmd6aXli_1CjOAl3BiW5KgO7-7cmuNSQjTwfM9m7GMLR-J8e4yRP7kT8kkYwfR7QHJPQOOpeTC4bKCqf7cLZc0tPlHVfNAxTZA4qRMOR__PP047fKgTIDe-IdfcSL8p2vhVIM1zw7QjUw9QyztNc8EfuZKt7tRO59uCvemK1FIi3d8ZEUSqctdoaPIEPdAQO4qwSCCkRKh6a--c1hFIrxAhWyE6nghBQs29tzF3Njk-xKwdnYzQEDFufEq2flGCpl5HYgdVwTb57yiP_TnUXlK3UgeZAGRWjgZLuDwzHEd9CWcHpatTwhBz5YswMypuBk70do60UxQ_zQ040XY3yX8yJLQS9NEeauM9xAF7ktWK8AhNMdr5KJKf540EQSfcKcelxTsPL6X-2NbO3HjhIkITWY9Kho8RnRkCtPvACzn1kW8lYvNdrXXnLvgMYoMtCFAHqaNnQXyRsTsozT3PrVf_2jYpJnmyCfsM6ZGUyz_krRvic0rIcTwMMEG70cUxY-8vesKozsPZG9mCPenrkHoKPGdZFhIsbxZm7zjBAXl-hI7l6RhSMWA4whZWVU8h4yLjWqKnI.P9vD2ULriYzBjOpAzJSQnQ';
const API_DOMAIN = process.env.API_DOMAIN || "https://sandbox-quickbooks.api.intuit.com";
const API_PATH = process.env.API_PATH || "/v3/company/4620816365157776740/reports/TransactionList";


// Let's schedule a cron job every day at 2300 hours to update Transactions in the database.
cron.schedule("* * 23 * *", () => {
  QuickBooksTransactions.insertTransactions(getTransactions);
})

const getTransactions = async () => {
    try {
        return axios.get('https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365157776740/reports/TransactionList?start_date=2020-12-15&end_date=2020-12-30', {
            headers: {
                'Authorization': 'Bearer ' + AUTH_TOKEN,
            }
        });
      } catch (error) {
        console.error(error)
      }
};

module.exports = getTransactions;
