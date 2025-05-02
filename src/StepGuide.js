// src/StepGuide.js
import React from 'react';

const StepGuide = () => {
    return (
        <div className="step-guide">
            <p>How to Use the Mortgage Calculator</p>
            <ol>
                <li>Enter the total amount of money you want to borrow as your Loan Amount.</li>
                <li>Input the Annual Interest Rate as a percentage.</li>
                <li>Specify the Loan Term in years.</li>
                <li>Click on the "Calculate" button to see your estimated monthly payment.</li>
            </ol>
        </div>
    );
};

export default StepGuide;
