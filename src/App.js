
import './App.css';
import CreditCardForm from "./Components/CreditCardForm"
import DisplayCreditCard from "./Components/DisplayCreditCard"
import { useState } from 'react';




function App() {
  const [holderName, setName] = useState('Jane Appleseed');
  const [cardNumber, setCardNumber] = useState('0000 0000 000 000');
  const [month, setExpMonth] = useState('00');
  const [year, setExpYear] = useState('00');
  const [cvc, setCvc] = useState('000');

  const handleFormChange = (props) => {
    setName(props.holderName);
    setCardNumber(props.cardNumber);
    setExpMonth(props.month);
    setExpYear(props.year);
    setCvc(props.cvc);
  };

  return (
    <main>
      <div className='App'>
        <div class="leftSection">
          <DisplayCreditCard
          holderName={holderName}
          cardNumber={cardNumber}
         month={month}
          year={year}
          cvc={cvc}
        /></div>
        
        <div className='rightSection'>
          <CreditCardForm onFormChange={handleFormChange} />
        </div>
      </div>
    </main>
  );
}

export default App;