export const handleWithdraw = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}

export const handleDeposit = (amount) => {
    return (dispatch) => {
        dispatch = {
            type: 'deposit',
            payload: amount
        }
    }
}