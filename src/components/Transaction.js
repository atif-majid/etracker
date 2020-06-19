import React, {useContext} from 'react';
import ReactTooltip from "react-tooltip";
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount  < 0 ? '-' : '+';
    const styleName = transaction.amount < 0 ? 'minus' : 'plus';

    return (<li className={styleName} data-tip data-for="registerTip">
    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
    <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)} >x</button>
    <ReactTooltip id="registerTip" place="top" effect="solid">
        {transaction.DateAdded}
      </ReactTooltip>
</li>)
}