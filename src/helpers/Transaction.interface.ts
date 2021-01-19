/* A common interface used to map data from various sources.
 */
export interface ITransaction {
    txn_date: string;
    txn_type: string;
    doc_num: number;
    is_no_post: string,
    name_of_company: string,
    memo: string,
    account_name: string,
    other_account: string,
    txn_amount: number,
}