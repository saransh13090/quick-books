/* Database interactions for data from QuickBooks API.
 */

//const Transaction = require("./Transaction.interface");
import { ITransaction } from './Transaction.interface';
import { TransactionModel } from '../models/QuickBooksTransactionModel';

/* Sample transaction data.
 * const transactions: Transactions = {
 *     1: {
 *         txn_date: "01/01/1972",
 *         txn_type: "Invoice",
 *         doc_num: "1044",
 *         is_no_post: "Yes",
 *         name_of_company: "Cool Cars",
 *         memo: "West Coast",
 *         account_name: "",
 *         other_account: "Accounts Receivable (A/R)",
 *         txn_amount: 47.60
 *     }
 * };
 */

/* Returns all QuickBooks transactions stored in the database.
*/ 
export const findAllTransactions = () => {
    TransactionModel.findAll()
        .then((quickBookstransactions: typeof TransactionModel[]) => {
            const transactions = [];
            // Map data from QuickBooksTransaction model to the Transaction interface.
            for (var t_num = 0; t_num < quickBookstransactions.length; t_num++) {
                const transaction: ITransaction = {
                    txn_date: quickBookstransactions[t_num].txn_date,
                    txn_type: quickBookstransactions[t_num].txn_type,
                    doc_num: quickBookstransactions[t_num].doc_num,
                    is_no_post: quickBookstransactions[t_num].is_no_post,
                    name_of_company: quickBookstransactions[t_num].name_of_company,
                    memo: quickBookstransactions[t_num].memo,
                    account_name: quickBookstransactions[t_num].account_name,
                    other_account: quickBookstransactions[t_num].other_account,
                    txn_amount: quickBookstransactions[t_num].txn_amount,
                };
                
                transactions.push(transaction);
            }
            return transactions;
        });
};

/* Inserts all QuickBooks Transactions into the database.
 * @param {Object} transactions - Array of all transactions returned from Quickbooks API.
 */
export const insertTransactions = (transactions: any) => {
    for (var t_num = 0; t_num < transactions.length; t_num++) {
        TransactionModel.create({
            // Map data from Transactions Model tl QuickBooksTransaction
            txn_date: transactions[t_num].txn_date,
            txn_type: transactions[t_num].txn_type,
            // doc_num is an int but Quickbooks API returns it as a string.
            doc_num: parseInt(transactions[t_num].doc_num),
            is_no_post: transactions[t_num].is_no_post,
            name_of_company: transactions[t_num].name_of_company,
            memo: transactions[t_num].memo,
            account_name: transactions[t_num].account_name,
            other_account: transactions[t_num].other_account,
            // txn_amount is a float but Quickbooks API returns it as a string.
            txn_amount: parseFloat(transactions[t_num].txn_amount),
        }).then((transaction: typeof TransactionModel) => {
            console.log("Inserted a new transaction with ID: ", transaction.id);
        });
    };
}