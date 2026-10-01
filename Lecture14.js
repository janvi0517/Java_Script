// let p = document.getElementById("p");
// let p1 = document.getElementById("p1");
// let rdm = document.getElementById("rdm");
// let rdl = document.getElementById("rdl");

// p.addEventListener("click", function(){
//     rdl.style.display = "block";
//     p1.style.display = "block";
//     p.style.display = "none";
//     rdm.style.display = "none";
// })

// p1.addEventListener("click", function(){
//     rdl.style.display = "none";
//     p1.style.display = "none";
//     p.style.display = "block";
//     rdm.style.display = "block";
// })

let p = document.getElementById("p");   
let p1 = document.getElementById("p1");   
let rdm = document.getElementById("rdm");
let rdl = document.getElementById("rdl"); 

rdm.addEventListener("click", function(){
    p1.style.display = "block";
    rdl.style.display = "block";
    p.style.display = "none";
    rdm.style.display = "none";
});

rdl.addEventListener("click", function(){
    p.style.display = "block";
    rdm.style.display = "block";
    p1.style.display = "none";
    rdl.style.display = "none";
});
