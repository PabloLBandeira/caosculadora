import React, { useState, useEffect } from 'react';
import Button from '../Button'; 
import { ContentContainer } from './style'; 
import { Container, Row, Column } from '../../style';

const Content = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [randomValues, setRandomValues] = useState([]);
  
  const buttonLabels = [
    'C', '⌫', '%', '÷',
    '7', '8', '9', 'X',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '&', '0', '.', '='
  ];

  const generateButtonValues = () => {
    const fixedValues = ['C', '⌫', '='];
    const possibleValues = ['6', '4', '5', '-', 'X', '8', '9', '7', '3', '1', '2', '+', '&', '0', '.', '%'];
    const values = possibleValues.filter(value => !fixedValues.includes(value));

    for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [values[i], values[j]] = [values[j], values[i]];
    }

    return values;
  };

  const handleClick = (label) => {
    if (label === 'C') {
      setCurrentNumber("0");
    } else if (label === '⌫') {
      setCurrentNumber(prev => prev.slice(0, -1) || "0");
    } else if (label === '=') {
      try {
        const result = eval(currentNumber); 
        setCurrentNumber(String(result));
      } catch (e) {
        setCurrentNumber("Erro");
      }
    } else if (['+', '-', 'X', '÷'].includes(label)) {
      setCurrentNumber(prev => prev + ' ' + label + ' ');
    } else {
      setCurrentNumber(prev => prev === "0" ? label : prev + label);
    }
  };

  useEffect(() => {
    if (currentNumber !== "0") {
      setRandomValues(generateButtonValues()); 
    }
  }, [currentNumber]);

  const combinedButtons = buttonLabels.map((label, index) => ({
    label,
    value: label === 'C' || label === '⌫' || label === '=' ? label : randomValues[index] || label
  }));

  return (
    <ContentContainer>
      <div>{currentNumber}</div> {}
      {combinedButtons.map((button, index) => (
        <Button
          key={index}
          label={button.label}
          onClick={() => handleClick(button.value)} 
        />
      ))}
    </ContentContainer>
  );
};

export default Content;
