import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CalculatorDescription.css';
import { FaMoneyBillWave, FaPercentage, FaCreditCard, FaPiggyBank, FaCalculator, FaChartLine, FaCoins, FaWallet, FaHandHoldingUsd } from 'react-icons/fa';
import { GiMoneyStack, GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { MdSavings, MdOutlineCurrencyExchange } from 'react-icons/md';

const calculators = [
  {
    name: 'Simple Interest Calculator',
    path: '/simple-interest',
    description: 'Calculate interest on a principal amount over time using a fixed interest rate.'
  },
  {
    name: 'Compound Interest Calculator',
    path: '/compound-interest',
    description: 'Calculate compound interest where interest is added back to the principal.'
  },
  {
    name: 'EMI Calculator',
    path: '/emi',
    description: 'Calculate your monthly EMI for any loan amount with tenure and interest rate.'
  },
  {
    name: 'SIP Calculator',
    path: '/sip',
    description: 'Calculate future returns from systematic monthly investments in mutual funds.'
  },
  {
    name: 'Lumpsum Investment Calculator',
    path: '/lumpsum',
    description: 'Estimate the future value of one-time investments in mutual funds or stocks.'
  },
  {
    name: 'GST Calculator',
    path: '/gst',
    description: 'Add or remove GST to/from a price at different GST rates like 5%, 12%, 18%, 28%.'
  },
  {
    name: 'CAGR Calculator',
    path: '/cagr',
    description: 'Calculate the Compound Annual Growth Rate of your investment.'
  },
  {
    name: 'FD Calculator',
    path: '/fd',
    description: 'Calculate the interest and maturity amount for fixed deposits.'
  },
  {
    name: 'RD Calculator',
    path: '/rd',
    description: 'Estimate the maturity value of recurring monthly deposits.'
  },
  {
    name: 'Retirement Calculator',
    path: '/retirement',
    description: 'Estimate how much you need to save to retire comfortably based on your goals.'
  },
  {
    name: 'Inflation Calculator',
    path: '/inflation',
    description: 'See how inflation affects your purchasing power over time.'
  },
  {
    name: 'Income Tax Calculator',
    path: '/income-tax',
    description: 'Estimate your annual income tax liability as per latest slabs.'
  },
  {
    name: 'Credit Card Interest Calculator',
    path: '/credit-card-interest',
    description: 'Calculate the interest on your unpaid credit card dues.'
  },
  {
    name: 'Currency Converter',
    path: '/currency-converter',
    description: 'Convert values between different international currencies.'
  },
  {
    name: 'Business Profit Margin Calculator',
    path: '/profit-margin',
    description: 'Calculate gross and net profit margins from revenue and cost.'
  }
];

const iconMap = {
  'Simple Interest Calculator': <FaMoneyBillWave size={36} color="#00bfff" />, 
  'Compound Interest Calculator': <FaPercentage size={36} color="#fc5185" />, 
  'EMI Calculator': <FaCreditCard size={36} color="#ffaa00" />, 
  'SIP Calculator': <FaPiggyBank size={36} color="#1dd1a1" />, 
  'Lumpsum Investment Calculator': <GiMoneyStack size={36} color="#ff6b6b" />, 
  'GST Calculator': <FaCalculator size={36} color="#5f27cd" />, 
  'CAGR Calculator': <FaChartLine size={36} color="#ff9f43" />, 
  'FD Calculator': <FaCoins size={36} color="#54a0ff" />, 
  'RD Calculator': <MdSavings size={36} color="#f368e0" />, 
  'Retirement Calculator': <FaHandHoldingUsd size={36} color="#ff6b81" />, 
  'Inflation Calculator': <FaWallet size={36} color="#48dbfb" />, 
  'Income Tax Calculator': <GiPayMoney size={36} color="#c8d6e5" />, 
  'Credit Card Interest Calculator': <GiReceiveMoney size={36} color="#ff9f1a" />, 
  'Currency Converter': <MdOutlineCurrencyExchange size={36} color="#10ac84" />, 
  'Business Profit Margin Calculator': <FaWallet size={36} color="#ff4757" />
};

const CalculatorDescription = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className='mainc'>
      <h1 className='h11'>Helping You Meet Your Life Gooals</h1>
    <div className="desc-page">
      <div className="card-grid">
        {calculators.map((calc, index) => (
          <div className="calc-card" key={index}>
            {iconMap[calc.name]}
            <h3>{calc.name}</h3>
            <p>{calc.description}</p>
            <button onClick={() => navigate(calc.path)}>Open Calculator</button>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default CalculatorDescription;
