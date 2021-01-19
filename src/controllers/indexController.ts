import { findAllTransactions } from '../helpers/QuickBooksTransactions.service';
var router = require('express').Router();

/* Return back all the transactions.
/* TODO: Return back a view with visualizations instead of raw transactions.
 */
router.get('/dashboard', async (req: any, res: any) => {
    return res.json({transactions: findAllTransactions()});
});

export default router;