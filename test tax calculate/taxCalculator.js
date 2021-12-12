function taxCalculator(income){
   if(income<250000)  return 0;
    
    else if(income>=250000 && income<=500000){
      taxAmount = income/2;
      return (taxAmount*10)/100;
    }
    else if(income>=500000 && income<=1000000){
      taxAmount = income - (income*30)/100;
      return (taxAmount*20)/100;
    }
    else if(income>1000000){
      taxAmount = income-(income*10)/100;
      return (taxAmount * 30)/100;
    }
  }

 module.exports={taxCalculator};