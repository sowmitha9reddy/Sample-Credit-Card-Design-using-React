import React, { useState } from 'react'
import  './formstyle.css'

export default function Form(props) {
   
    let [values,setValues]=useState({
        holderName:'',
        cardNumber:'',
        month:'',
        year:'',
        cvc:'',



    })
    let { onFormChange }=props;


    let[errors,setErrors]=useState({})
     const changeHandler =(e) =>{
        let {name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

     const [completeState, setCompleteState] = useState(false);
   
  
    const isUpperCase=(string) => /^[A-Z]*$/.test(string);
    const isNumber=(string) => /^[0-9]{16}$/.test(string);
    const isYear=(string) =>/^\d{2}$/.test(string);
     const isMonth=(string) =>/^(0[1-9]|1[0-2])$/.test(string);
     const isCvc=(string) => /^\d{3}$/.test(string);
   
   
     const validateForm =() =>{

        const formErrors={};

        if(!values.holderName){
            formErrors.holderName="name should not be blank";
           
        }
    
           for(let i=0;i<values.holderName.length;i++){
                 if(!isUpperCase(values.holderName[i])){
                     formErrors.holderName="All the letters should be in uppercase";
                     
                   }
           }
           if(!isYear(values.year)){
                   formErrors.year="year should be in 2 digit number";
                   
            }
           if(!isMonth(values.month)){
                 formErrors.month="Month should be 2 digit number";
                
           }
            if(!isCvc(values.cvc)){
                 formErrors.cvc="cvc should be in 3 digit number";
                 
            }


           if(!isNumber(values.cardNumber)){
           formErrors.cardNumber="Alphabets,special are not allowed,only numbers are allowed";
          
           }
       return formErrors;


   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      await new Promise((r) => setTimeout(r, 500));
      setCompleteState(true);
      onFormChange(values);
       
    }
  };


  return (
    <div className="formBox">
        {completeState ? (
        <div>
          
          <h1 className="successHeading">THANK YOU!</h1>
          <h3 className="successDescription">We've added your card details</h3>
          <button type="button" className="confirmBtn">
            Continue
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
       
          
             <label >CARDHOLDER NAME</label>
             <input  type='text' 
             name='holderName'
             value={values.holderName} 
             placeholder='e.g. Jane Applessed'
             onChange={changeHandler}
             maxLength={25}/>

             {errors.holderName &&<p className="error">{errors.holderName}</p>}
             
          
          
           
                <label>CARD NUMBER</label>
                <input type='text'
                name='cardNumber'
                value={values.cardNumber}
                placeholder='e.g 1234 5678 9123 0000'
                 onChange={changeHandler}/>
                  {errors.cardNumber &&<p className="error">{errors.cardNumber}</p>}
         
           
            <div className="date">
                <div>
                     <label> Exp.DATE(MM/YY)</label>
                
                <div className='flexDiv'>
                    <div >
                    <input className="exp-input"   
                    type='text'
                name='month'
                value={values.month}
                placeholder='MM'
                 onChange={changeHandler}/>
               {errors.month &&<p className="error">{errors.month}</p>}

               </div>
               <div >
              <input  className="exp-input"
              type='text'
              name='year'
              value={values.year} 
              placeholder='YY'
              onChange={changeHandler}/>
                {errors.year &&<p className="error">{errors.year}</p>}
               </div>
               </div>
               </div>
               <div>
                  <label>CVC</label>
                <input className='date-cvc'
                type='text'
               name='cvc'
              value={values.cvc} 
              placeholder='e.g. 123'
             onChange={changeHandler}/>
                {errors.cvc &&<p className="error">{errors.cvc}</p>}
              
                </div>
             
            </div>
               <button type='submit'
                onClick={handleSubmit} className="confirmBtn">Confirm
                </button>
        </form> 
      )}
    </div>
  );
}
