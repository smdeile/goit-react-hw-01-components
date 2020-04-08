import React from 'react';
import styles from './transction.module.css';
const TransactionHistory = ({ transactions }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.thead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.tbody}>
      {transactions.map(el => (
        <tr className={styles.tr} key={el.id}>
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default TransactionHistory;
