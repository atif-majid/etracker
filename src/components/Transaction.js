import React from 'react';

export const Transaction = ({transaction}) => {
    const sign = transaction.amount  < 0 ? '-' : '+';
    const styleName = transaction.amount < 0 ? 'minus' : 'plus';

    return (<li className={styleName}>
    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
    <button className="delete-btn">x</button>
</li>)
}