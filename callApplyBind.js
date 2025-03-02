//Problem 1---
// function Application(t, an, ll,m){
//     this.timestamps = t;
//     this.applicationName = an;
//     this.logLevel = ll;
//     this.message = m;
//     }
    
//     let app1 = new Application(new Date(), "Flipkart", "info", "Application has started.")
    
//     let app2 = new Application(new Date(), "Amazon", "error", "Application has stopped working.")
    
//     function logUtility(){
//     console.log("timestamps is : ",this.timestamps)
//     console.log("application name : ",this.applicationName)
//     console.log("log level : ",this.logLevel)
//     console.log("message : ",this.message)
//     }
    
//     logUtility.call(app1);
//     console.log()
//     logUtility.call(app2);

  
//Problem 2---

// function MCQquestions(t,o1,o2,o3,o4,ca){
//    this.title = t;
//    this.option1 = o1;
//    this.option2 = o2;
//    this.option3 = o3;
//    this.option4 = o4;
//    this.correctAnswer = ca
// }

// MCQquestions.prototype.checkAnswer= function(selectedValue){
//    if(this.correctAnswer==selectedValue){
//       console.log('right answer')
//    }
//    else{
//       console.log('wrong answer')
//    }
// }

// let value = new MCQquestions('Answer the uestion 2+2',2,3,4,1,4) 

// value.checkAnswer(4)

//Problem 3 ----

// function eCommerce(product,discount){
//    this.product = product;
//    this.discount = discount
// }

// eCommerce.prototype.getzdiscount = function(price){
//    const discount = price*(this.discount/100)
//    finalprice = price-discount
//    console.log(`Product Category ${this.product}, Discount ${this.discount} and price ${finalprice}`)
// }

// let product1 = new eCommerce('Bag',5)

// product1.getzdiscount(2000)

//Problem 5----

// function paymentProcess(transactionFee){
//     this.transactionFee = transactionFee;
//  }
 
//  paymentProcess.prototype.processPayment = function (amount) {
//     const fee = amount * (this.transactionFee / 100);
//     const totalAmount = amount + fee;
//     console.log(`Payment Method Fee: ${this.transactionFee}%, Total Amount Charged: ₹${totalAmount}`);
//  };
 
//  const creditCardPayment = new paymentProcess(2.5);
//  let upiPayment = new paymentProcess(2)
//  let netBankingPayment = new paymentProcess(1)
 
//  const payWithCreditCard = creditCardPayment.processPayment.bind(creditCardPayment);
//  const payWithUPI = upiPayment.processPayment.bind(upiPayment)
//  const payWithNetBanking = netBankingPayment.processPayment.bind(netBankingPayment)
 
//  //creditCardPayment.processPayment(2000)
//  payWithCreditCard(2000)
//  payWithUPI(2000)
//  payWithNetBanking(2000)