function fib(){
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
    var num = parseInt(document.getElementById("seq").value);


    
        function fibonacci(num) {
            if (num < 2) {
                return num;
            }
            else {
                return fibonacci(num - 1) + fibonacci(num - 2);
            }
        }

        // take nth term input from the user

        if (num <= 0) {
            alert("Enter a positive integer.")
        }
        else {
            for (let i = 0; i < num; i++) {
                if(i === 0 || i === 1){
                    document.getElementById("result").innerHTML=document.getElementById("result").innerHTML + `element${i + 1} : ` +  fibonacci(i) + "<br>";
                }
                else{
                    document.getElementById("result").innerHTML=document.getElementById("result").innerHTML + `element${i + 1} = element${i-1} + element${i}: ` +  fibonacci(i) + "<br>";
                }
            }
        }
    }
  }

 /* document.write( " Adding " + n1 + " and " + next_term + " = " + (n1 + n2) + "<br>" );*/

 /*  var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));*/
 
   //initalization
/*const number = parseInt(document.getElementById("seq").value);;
let n1 = 0, n2 = 1, nextTerm;

document.getElementById("result").innerHTML=("<b>Fibonacci series of the number : <b>");

for (let i = 1; i <= number; i++) 
{
    if(i<=1){
    nextTerm =i;
    }
    else{
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
      }
     /*{ nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }*/
    /*document.getElementById("result").innerHTML= document.getElementById("result").innerHTML+ "<br>"+n1;
    /*document.write( " Adding " + n1 + " and " + next_term + " = " + (n1 + n2) + "<br>" );*/




/*function fibonacci(n){
var number = 8;   
var num1 = 0, num2 = 1;  
var next_term = 0;  
document.write (" Fibonacci series of the number 8: " + "<br>");  
for (i = 1; i < number; i++) // use for loop to iterate the series till given number   
{  
if ( i<= 1)   
next_term = i; // assign the variable i to next_term  
else  
{  
next_term = num1 + num2; // sum the num1 and num2  
num1 = num2;  
num2 = next_term;  
}  
// print the sum of the series  
document.write( " Adding " + num1 + " and " + next_term + " = " + (num1 + num2) + "<br>" );  
document.write( " Adding " + n1 + " and " + next_term + " = " + (n1 + n2) + "<br>" ); 
}  
}}*/