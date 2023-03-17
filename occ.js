function countOccurrences() {
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
       if (this.parentElement.nextElementSiblings.querySelectorAll("input"))
       {
          (this.parentElement.nextElementSiblings.querySelectorAll("input").focus());
              }
        }
   });     
    // Get the input string
    var input = document.getElementById("text & number").value;
    
    // Initialize an object to store the count of each character
    var count = {};
    
    // Iterate through each character in the string
    for (var i = 0; i < input.length; i++) {
      var char = input[i];
      if (count[char]) {
        count[char]++;
      } else {
        count[char] = 1;
      }
    }
    
    // Convert the count object to an array of strings
    var result = [];
    for (var char in count) {
      result.push(char + ": " + count[char]);
    }
    
    // Display the result
    document.getElementById("result").innerHTML = result.join("<br>");
  }
}

