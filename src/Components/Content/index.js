import React, { useState, useEffect } from 'react';
import Button from '../Button'; 
import { Content as ContentLayout, Row, Column } from './style'; 
import Input from '../Input';

const ContentComponent = () => { 
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
    
      <ContentLayout> {}

            <Column span={4}>
              <Input value={currentNumber} />
            </Column>

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
