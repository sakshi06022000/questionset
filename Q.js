function sumOfDigits(){
  var allFields =document.querySelectorAll(".register_form")
        //get all input fields zxeZS3SAASDF W
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
  //get the user value   
  {
    var n, remainder, sum = 0;
    n = parseInt(document.getElementById("number").value);
    if (n<0){
      n=n*(-1)
    
    while(n)
    {
      remainder = n % 10;
      sum = sum + remainder;
      n = Math.floor(n/10);
    }
  document.getElementById("sum").value = sum * (-1);
    }
     else{
      n=n*-1
    while(n)
    {
      
      remainder = n % 10;
      sum = sum + remainder;
      n = Math.floor(n/10);
    }
    document.getElementById("sum").value = sum;
    }
  }
}