let youRock1 = "samar"
let youRock2 = "sara"
function youRock(name) {
  
    console.log("You Rock " + name);
  }
  ​
  var name = "ahmed";
  youRock(name);
  



function square(num) {
  
    num1 =  num * num ;
    console.log(num1); 
    }
    ​
    var num = 2;
    square(num);
    
    function cube(num) {
  
        num1 =  num * num * num ;
        console.log(num1); 
        }
        ​
        var num = 3;
        cube(num);
        
        function toTheFourth(num) {
  
            num1 =  num * num * num * num;
            console.log(num1); 
            }
            ​
            var num = 3;
            toTheFourth(num);
            ​
            
            function calc(num1,num2,math) {
                if (math == "add"){
                 var num = num1 + num2 ;
                  console.log(num);
                }else if (math == "sub"){
                     var num = num1 - num2 ;
                  console.log(num);
                }else if (math == "div"){
                     var num = num1 / num2 ;
                  console.log(num);
                }else if (math == "mul"){
                     var num = num1 * num2 ;
                  console.log(num);
                }else if (math !== "add" || math !== "sub" || math !== "div" || math !== "mul"){
                     
                  console.log("calculator can only add, subtract, divide, or multiply");
                }else if ( sNaN(num2) !== true) {
                  console.log("calculator only accepts numbers");
                }
              ​
              }
              ​
              var num1 ;
              var num2 ;
              var math ;
              calc(3 , "e" , "sub");
              
