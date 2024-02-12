import { useState } from 'react';
import './Calculater.css';
const Calculater = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(0);

    const FirstNumberChangeHandler = (e) => {
        setX(e.target.value);
    }

    const SecondNumberChangeHandler = (e) => {
        setY(e.target.value);
    }

    const calculationHandler = (opr) => {
        let X = parseFloat(x);
        let Y = parseFloat(y);
        setOperator(opr);
        switch (opr) {
            case '+':
                setResult(X + Y);
                break;
            case '-':
                setResult(X - Y);
                break;
            case '*':
                setResult(X * Y);
                break;
            case '/':
                setResult(X / Y);
                break;
            case '%':
                setResult(X % Y);
                break;
            default:
                break;
        }
    }


    return (
        <div className="calc-div">
            <table >
                <tr className="input-row">
                    <td>
                        <span>First Number:</span><br />
                        <input type="number" value={x} onChange={FirstNumberChangeHandler} />
                    </td>
                    <td>
                        <span>Second Number:</span><br />
                        <input type="number" value={y} onChange={SecondNumberChangeHandler} />
                    </td>
                </tr>
            </table>
            <div className="buttons-row">
                <button onClick={()=>{calculationHandler("+")}}>+</button>
                <button onClick={()=>{calculationHandler("-")}}>-</button>
                <button onClick={()=>{calculationHandler("*")}}>*</button>
                <button onClick={()=>{calculationHandler("/")}}>/</button>
                <button onClick={()=>{calculationHandler("%")}}>%</button>
            </div>
            <div className="result-row">
                Result:<br />
                <h3>{x} {operator} {y} = {result}</h3>
            </div>
        </div>
    );
};

export default Calculater;
