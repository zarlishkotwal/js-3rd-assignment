// alert("hello world");

// var student_array={};

// var student_array2 = new Array();

// var string_array = new Array (1, 2, 3, 4, 5);

// var number_array = new Array (1, 2, 3, 4, 5);

// var boolean_array = [true , true , false ,true] ;

// var mixed_array = new Array (1, 2, "Ahmed", 4, true);

// var array = ["<b> SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD </b>"]

// document.write("<b> Qualifications;   <br><br>") 

// for(var i = 0;i<array.length;i++){
//     document.write("<br>"+(i+1)+ ") "+array[i]);
// }

// var student_name =["<b>  Michael","John","Tony"];
// var score =[320 , 230  , 480 ];
// for(var i = 0;i<student_name.length;i++){
//     per=score[i]*100/500;
//     document.write("<br>  Score of  "+student_name[i]+" is "+score[i]+". Percentage: "+per);
//     }


// var student_Score = [320,230,480,120];
// document.write( "Scores of Student :  " + " " + student_Score + "<br>")
//  student_Score.sort()
// document.write( "Order Scores of Student :  " + " " + student_Score)

// var cities = ["karachi" , "Lahore" , "Islamabad" , "Queeta" , "Peshawar"];
// var selectedCities = cities.slice(2,4)
// document.write(`<br> Cities list : <br> ${cities} <br> <br>  
//                 Selected Cities list <br> ${selectedCities}`)

//  var string = [" <br> This" , "is" , "my" , "cat"];
// var array = string.join(" ")            
// document.write("String : "+ array) 

// var devices = ["keyboard" , "mouse" , "printer" , "monitor"];
// for(var i = 0 ; i<devices.length;i++){
//     document.write(` <br> Out: <br>
//  ${devices[i]}  `)
// }        
// var devices = ["keyboard" , "mouse" , "printer" , "monitor"];
// document.write(`out : <br>${devices[3]} <br>out : <br>${devices[2]} <br>out : <br>${devices[1]} <br>out : <br>${devices[0]} <br>`)

// var mobiles = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// document.write("<select>")
// for(var i=0;i<mobiles.length;i++){
//     document.write("<option>" + mobiles[i]  +"</option>")
// }            
// document.write("</select>")


// var multiArray = [[]];

// var multidimensionalArray = new Array(3);
// multidimensionalArray[0] = new Array(0 , 1 , 2 , 3)
// multidimensionalArray[1] = new Array(1 , 0 , 1, 2)
// multidimensionalArray[2] = new Array(2 , 1 , 0 , 1)
// document.write(multidimensionalArray[0].join(" ") + "<br />")
// document.write(multidimensionalArray[1].join(" ") + "<br />")
// document.write(multidimensionalArray[2].join(" ") + "<br />")

// for(var i = 1 ; i<=10 ; i++){
//     document.write(i + "<br />")
// }

// var tabNum = parseInt(prompt("Enter Table Number :"));
// var tabLenght = parseInt(prompt("Enter Table Lenght :"));
// document.write(`Multiplication table of ${tabNum} <br / > Lenght ${tabLenght } <br />`  ) 
// for(var i = 1  ; i<=tabLenght ; i++){
//         document.write(`${tabNum} x ${i} = ${tabNum * i} <br /> `)
// }


// document.write(`<b>Counting:</b> <br / > <br />`)
// for (var i = 1; i <= 15; i++) {
//         document.write(i + ",")
// }
// document.write(` <br /> <br /> <b>Reverse Counting:</b> <br / > <br />`)
// for (var a = 10; a >= 1; a--) {
//         document.write(a + ", ")
// }

// document.write(` <br /> <br /> <b>Even:</b> <br / > <br />`)
// for (var b = 0; b <=20; b = b + 2) {
//         document.write(b + ", ")
// }


// document.write(` <br /> <br /> <b>Odd:</b> <br / > <br />`)
// for (var c = 0; c <=20; c = c + 3) {
//         document.write(c + ", ")
// }


// document.write(` <br /> <br /> <b>Series:</b> <br / > <br />`)
// for (var d = 2; d <=20; d = d + 2) {
//         document.write(d + "K" + ", ")
// }


// var arr = [24, 53, 78, 91, 12];
// var largestt = Math.max(...arr)
// console.log(largestt)
// var largest = 0;
// for (var i = 0; i < arr.length; i++) {
//         if(arr > largest){
//                 var largest = arr[i]
//         }
// }
// console.log(largest)

// var arr2 = [24, 53, 78, 91, 12];
// var smallest = arr2[0] ;
// for(var a = 0 ; a<arr2.length ; a++){
//         if( smallest > arr2[a]){
//                 var smallest = arr2[a]
//         }
// }
// console.log(smallest)
// var smallestt = Math.min(...arr2)
// console.log(smallestt)

for (var i = 5 ; i<=100 ; i = i +5  ){
    document.write(i + ",")
}