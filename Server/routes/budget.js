var express = require('express');
var router = express.Router();

/* GET Available Budget. */
router.get('/', function(req, res, next) {
    const availableBudget = 20500.00;
    res.send(JSON.stringify(availableBudget));
});

/* GET Income. */
router.get('/income', function(req, res, next) {
    //let updateIncome = req.body?.headers?.ammount;
    //console.log(req.body);
    const income = 30500.00;
    res.send(JSON.stringify(income));
});




/* POST Income. */
router.post('/income', function(req, res, next) {
    console.log(req.body)
    //console.log(req.body.ammount)
    let updateIncome = req.body?.ammount;
    //console.log(updateIncome)
    res.send(JSON.stringify(updateIncome));
 });





















/* GET Expense. */
router.get('/expense', function(req, res, next) {
    const expense = 10000.00;
    res.send(JSON.stringify(expense));
});

module.exports = router;
