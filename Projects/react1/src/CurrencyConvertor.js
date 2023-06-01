import React, { useState, useEffect } from 'react';
import './CurrencyConvertor.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [exchangeRates, setExchangeRates] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/a8a3ea6c611feffe7093f051/latest/${fromCurrency}`
        );
        const data = await response.json();
        setExchangeRates(data.conversion_rates);
        console.log(Object.keys(data.conversion_rates))
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };
 
    fetchExchangeRates();
  }, [fromCurrency]);

  const convertCurrency = () => {
    if (!exchangeRates) {
      console.error('Exchange rates not available');
      return;
    }

    const rate = exchangeRates[toCurrency];
    const convertedValue = amount * rate;
    setConvertedAmount(convertedValue.toFixed(2));
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="fromCurrency">From:</label>
        <select
          id="fromCurrency"
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          
          
          {/* Add more currency options as needed */}
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="toCurrency">To:</label>
        <select
          id="toCurrency"
          value={toCurrency}
          onChange={handleToCurrencyChange}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      <button onClick={convertCurrency}>Convert</button>
      {convertedAmount && (
        <div className="result">
          <p>Converted Amount:</p>
          <p>
            {convertedAmount} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
