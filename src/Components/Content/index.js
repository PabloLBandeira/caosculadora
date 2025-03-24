import React, { useState, useEffect } from 'react';
import Button from '../Button'; 
import Input from '../Input';
import RandonNumber from '../Randon';

import { Content as ContentLayout, Row, Column, Display } from './style'; 

const generateButtonValues = () => {
  const fixedValues = ['C', '⌫', '=', '&'];
  
  const possibleButtonValues = ['6', '4', '5', '8', '9', '7', '3', '1', '2', '0', '.'];
  const possibleOperatorValues = ['÷', 'X', '-', '%', '+'];

  const shuffle = (array) => {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  const shuffledButtons = shuffle(possibleButtonValues);
  const shuffledOperators = shuffle(possibleOperatorValues);

  const buttonLabelsTemplate = [
    'C', '⌫', '%', '÷',
    '7', '8', '9', 'X',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '&', '0', '.', '='
  ];

  let buttonIndex = 0;
  let operatorIndex = 0;

  const finalButtonValues = buttonLabelsTemplate.map(label => {
    if (fixedValues.includes(label)) {
      return label; 
    } else if (possibleButtonValues.includes(label)) {
      return shuffledButtons[buttonIndex++]; 
    } else if (possibleOperatorValues.includes(label)) {
      return shuffledOperators[operatorIndex++]; 
    } else {
      return label; 
    }
  });

  return finalButtonValues;
};

const ContentComponent = () => { 
  const [currentNumber, setCurrentNumber] = useState("0");
  const [randomValues, setRandomValues] = useState([]);
  const [randomKey, setRandomKey] = useState(0);

  const buttonLabels = [
    'C', '⌫', '%', '÷',
    '7', '8', '9', 'X',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '&', '0', '.', '='
  ];

  const handleClick = (label) => {
    if (label === 'C') {
      setCurrentNumber("0");
      setRandomKey(prevKey => prevKey + 1);

    } else if (label === '⌫') {
      setCurrentNumber(prev => prev.slice(0, -1) || "0");
      setRandomKey(prevKey => prevKey + 1);
    } else if (label === '=') {
      try {
        const expression = currentNumber.replace(/X/g, '*').replace(/÷/g, '/');
        if (expression.includes('%')) {
          const parts = expression.split('%');
          const a = parseFloat(parts[0].trim());
          const b = parseFloat(parts[1].trim());
          let res = (a * b) / 100
          setCurrentNumber(String(res)) 
        } else {
          const result = eval(expression); 
          setCurrentNumber(String(result));
        }
      } catch (e) {
        setCurrentNumber("Erro");
      }
    } else if (['+', '-', 'X', '÷', '%'].includes(label)) {
      setCurrentNumber(prev => prev + '' + label + '');
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
    value: randomValues[index] || label
  }));

  return (
    <ContentLayout>
      <Display>
        <RandonNumber key={randomKey}/>
        <Column span={4}>
          <Input value={currentNumber} />
        </Column>
      </Display>

      <Row>
        {combinedButtons.map((button, index) => (
          <Column key={index} span={3}>
            <Button
              label={button.label}
              onClick={() => handleClick(button.value)} 
            />
          </Column>
        ))}
      </Row>
    </ContentLayout>
  );
};

export default ContentComponent;
