let i  = document.getElementById("i");
let j  = document.querySelectorAll("button");

let s = '';

let arr = Array.from(j);

arr.forEach(button =>{
     button.addEventListener("click" , (e) =>{
        if (e.target.innerHTML == '='){
            s = eval(s);
            i.value = s;
        }

        else if (e.target.innerHTML =="C"){
        s = "";
        i.value = s;

        }
        else if (e.target.innerHTML == "DEL"){
            s = s.substring(0,s.length-1);
            i.value = s;
        }
        else{
        s +=  e.target.innerHTML;
        i.value = s;
        }
     })
})