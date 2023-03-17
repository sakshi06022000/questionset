function bucketList() {
    var allFields =document.querySelectorAll(".register_form")
      //get all input fields  
      for(var i=0; i<allFields.length;i++){
      //access one by one input fields      
       allFields[i].addEventListener("keyup",function (event){
                      
      
         if (event.code === 'Enter'){
         console.log(event.key);
         console.log("Enter clicked");
         event.preventDefault();
         document.getElementById("mug").focus();
         if (this.parentElement.nextElementSiblings.querySelectorAll("input")){
            console.log(this.parentElement.nextElementSiblings);    
            }
            (this.parentElement.nextElementSiblings.querySelectorAll("input").focus());
            /*(this.parentElement.nextElementSiblings.querySelectorAll("input").focus());*/
                }
          }
     )};     
     //intialization of js


    let buk = parseInt(document.getElementById("bucket").value);
    let mug = parseInt(document.getElementById("mug").value);
    if(buk>=0 && mug>=0){
    let result1,result2 = 0;
    result1 = buk%mug;
    result2 = buk/mug;
    
    document.getElementById('output1').value = result1;
    document.getElementById('output2').value = parseInt(result2);
}    

else{
    alert("Enter the capacity of mug");
}
}

