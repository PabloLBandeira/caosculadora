import { useEffect, useState } from "react";
import { RandonContainer } from "./style";

const RandonNumber = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100));
  }, []); 
  return (
    <RandonContainer>
      <span>{randomNumber}</span> 
    </RandonContainer>
  );
};

export default RandonNumber;