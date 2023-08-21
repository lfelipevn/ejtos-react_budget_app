import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses, currency } = useContext(AppContext);
    const [budget, setBudget] = useState('2000');
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBlur = (event) => {
        const newBudget = parseInt(event.target.value);
        if (newBudget > 20000) {
            setBudget(20000);
            alert("Budget can not exceed 20,000");
        }
        if (newBudget < totalExpenses) {
            setBudget(totalExpenses);
            alert("You can not reduce the budget value lower than the spending");
        }
        else{
            setBudget(newBudget);
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        }
        
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    type="number" id="budget" name="budget" placeholder="2000"
                    value={budget}
                    step="10"
                    max="20000"
                    onBlur={handleBlur}
                    onChange={(event) => setBudget(event.target.value)}
                />
            </span>
        </div>
    );
};

export default Budget;