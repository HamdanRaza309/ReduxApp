import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

export default function Shop() {

    const dispatch = useDispatch();
    const { handleDeposit, handleWithdraw } = bindActionCreators(actionCreators, dispatch)
    return (
        <div>
            <h1>Deposit/Withdraw Money</h1>
            <button className="btn btn-primary m-5" onClick={() => handleDeposit(100)}>Deposit</button>
            Update Balance
            <button className="btn btn-primary m-5" onClick={() => handleWithdraw(100)}>Withdraw</button>
        </div>
    )
}
