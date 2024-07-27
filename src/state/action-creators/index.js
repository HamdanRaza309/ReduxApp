// state/action-creators/index.js
export const handleDeposit = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        });
    };
};

export const handleWithdraw = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        });
    };
};
