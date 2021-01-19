const { Sequelize } = require('sequelize');
import database from '../config/database';

export const TransactionModel = database.define('transaction', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    txn_date: {
        type: Sequelize.STRING
    },
    txn_type: {
        type: Sequelize.STRING
    },
    doc_num: {
        type: Sequelize.NUMBER
    },
    is_no_post: {
        type: Sequelize.STRING
    },
    name_of_company: {
        type: Sequelize.STRING
    },
    memo: {
        type: Sequelize.STRING
    },
    account_name: {
        type: Sequelize.STRING
    },
    other_account: {
        type: Sequelize.STRING
    },
    txn_amount: {
        type: Sequelize.NUMBER
    },
});