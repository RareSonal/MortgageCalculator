// src/MortgageCalculator.js
import React, { useState } from 'react';
import './MortgageCalculator.css';
import StepGuide from './StepGuide'; // Import StepGuide

const MortgageCalculator = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);

    const calculateMortgage = (e) => {
        e.preventDefault();

        const principal = parseFloat(loanAmount);
        const calculatedInterest = parseFloat(interestRate) / 100 / 12;
        const calculatedPayments = parseFloat(loanTerm) * 12;

        // Monthly Payment Formula
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal * x * calculatedInterest) / (x - 1);

        if (isFinite(monthly)) {
            setMonthlyPayment(monthly.toFixed(2));
        } else {
            setMonthlyPayment(null);
        }
    };

    return (
        <div className="calculator-container">
            <h2>Mortgage Calculator</h2>
            <StepGuide /> {/* Include the StepGuide */}
            <p>Find out your monthly mortgage payment easily!</p>
            <form onSubmit={calculateMortgage}>
                <div className="input-group">
                    <label>Loan Amount ($)
                        <span 
                            className="tooltip" 
                            onMouseEnter={() => setShowTooltip(true)} 
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            &#9432;
                            {showTooltip && <span className="tooltip-text">Enter the total loan amount you wish to borrow.</span>}
                        </span>
                    </label>
                    <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Annual Interest Rate (%)
                        <span 
                            className="tooltip" 
                            onMouseEnter={() => setShowTooltip(true)} 
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            &#9432;
                            {showTooltip && <span className="tooltip-text">Enter the yearly interest rate for the loan.</span>}
                        </span>
                    </label>
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Loan Term (Years)
                        <span 
                            className="tooltip" 
                            onMouseEnter={() => setShowTooltip(true)} 
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            &#9432;
                            {showTooltip && <span className="tooltip-text">Enter the length of time you plan to take the loan.</span>}
                        </span>
                    </label>
                    <input
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Calculate</button>
            </form>
            {monthlyPayment !== null && (
                <div className="result">
                    <h3>Your Monthly Payment: ${monthlyPayment}</h3>
                </div>
            )}
        </div>
    );
};



export default MortgageCalculator;
