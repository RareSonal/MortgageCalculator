
# Mortgage Calculator – Static Web App on Azure 

An interactive web application built with **React.js** to help users estimate their monthly mortgage payments quickly and easily.

# 🛠 Features

- 📊 **Real-time Calculation** of mortgage payments based on:
  - Loan Amount
  - Annual Interest Rate
  - Loan Term (Years)
- 💡 **Tooltips** to assist user inputs
- 🧭 **Step-by-step Guide** for new users
- 🧪 **React State Management** with Hooks
- ⚙️ **CI/CD Pipeline** using GitHub Actions + Azure Static Web Apps

# 🧮 Calculation Formula

```text
Monthly Payment = [P × r × (1 + r)^n] / [(1 + r)^n – 1]

Where:
P = Loan Amount
r = Monthly Interest Rate (Annual Rate / 12 / 100)
n = Number of Payments (Years × 12)

```

# 🧰 Tech Stack

| Layer       | Stack                                            |
|-------------|--------------------------------------------------|
| Frontend    | React.js (Hooks, Functional Components)          |
| Styling     | CSS                                              |
| Backend     | Node.js                                          |
| Hosting     | Azure Static Web Apps                            |
| DevOps      | GitHub Actions                                   |

# ⚙️ Setup Instructions

Clone the repo:
```bash
git clone https://github.com/RareSonal/MortgageCalculator.git
cd MortgageCalculator
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

# 🚢 Deployment

This project uses Azure Static Web Apps for automated deployment via GitHub Actions.
Deployment is triggered on push to the master branch.

# 📬 Contributions
Pull requests and suggestions are welcome! If you'd like to add support for automatic PR-based deploy previews, CI testing, or multi-region deployment — open an issue or PR.
