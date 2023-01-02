var search = document.querySelector("#search");
      
      search.addEventListener("input", ()=>{
      // alert("ok")
       var input = document.getElementById("search");
       var filter = input.value.toUpperCase();
       var li = document.querySelector(".for_value");
       
       var a = li.getElementsByTagName("a");
       
       for (i = 0; i < a.length; i++) {
         txtValue = a[i].textContent || a[i].innerText;
         if (txtValue.toUpperCase().indexOf(filter) > -1) {
           a[i].parentElement.style.display = "flex";
         } else {
           a[i].parentElement.style.display = "none";
           // console.log(a[i])
         }
       }
 
       
      })





//function openPage() {
 //   var x = document.getElementById("search").value;
//    if (x === "ict") {
 //       window.open("ict.html");
 //   }
 //   if(x === "dog"){
//        window.open("../page/11-12/banglafirst");
 //   }
//}