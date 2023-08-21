import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const updateCurrency = (newCurrency) => {
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    }

    return (
        <div className='currency'>
            <span>
                <select className="form-select bg-light text-black" name="currency" id="currency" onChange={(event) => updateCurrency(event.target.value)}>
                    <option value="$">$ Dollar</option>
                    <option value="£" selected>£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            </span>
        </div>
    );
}

export default Currency;