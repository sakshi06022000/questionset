var allFields =document.querySelectorAll(".register_form")
        //get all input fields
  for(var i=0; i<allFields.length;i++){
  //access one by one input fields
          
  allFields[i].addEventListener("keyup",function (event){
                
     debugger;
    if (event.code === 'Enter'){
        console.log(event.key);
        console.log("Enter clicked");
        event.preventDefault();
        if (this.parentElement.nextElementSiblings.querySelectorAll("input")){
           (this.parentElement.nextElementSiblings.querySelectorAll("input").focus());
          }
       }
   });
 }
  
const calculateBtn = document.querySelector("#calculate");
const resultElem = document.querySelector("#result");
calculateBtn.addEventListener("click", function () {
  const numbers = document.querySelector("#numbers").value.split(",").map(Number);
  let positiveEvenSum = 0, negativeOddSum = 0;
  for (const number of numbers) {
    if (number > 0 && number % 2 === 0) {
      positiveEvenSum += number;
    } else if (number < 0 && number % 2 !== 0) {
      negativeOddSum += number;
    }
  }
  resultElem.innerHTML = `<b>Sum of positive even numbers: ${positiveEvenSum}</b><b><br>Sum of negative odd numbers: ${negativeOddSum}</b>`;
});
// part
function valid(event) {
  var value = event.target.value;
  var regex = /^[0-9-,\b]+$/;
  if (!regex.test(value)) {
    alert('Please Enter a number with comma separated');
  }
}


/*function POsNeg() {

    var myArray = [];
    var add = 0;
    var odd = 0;
    for (var i = 0; i < 6; i++) {

        myArray[i] = parseInt(document.getElementById(i).value);

    }
    console.log(myArray);


    for (i = 0; i < 6; i++) {

        if (myArray[i] % 2 == 0 && myArray[i] >= 0) {
            add = add + myArray[i];
        }
        else if (myArray[i] % 2 != 0 && myArray[i] < 0) {
            odd = odd + myArray[i];
        }
    }
    document.getElementById("res1").innerHTML = add;
    document.getElementById("res2").innerHTML = odd;


}*/
