const hamburger = document.querySelector(".hamburger");
const ham_btn = document.querySelector(".ham_btn");
const trans_lines = document.querySelector(".trans_lines");
const clicked = document.querySelector(".clicked");
const pText = document.querySelector("#primary_text");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
        btn.addEventListener("click", () => {
        hamburger.classList.toggle("hidden");
        trans_lines.classList.toggle("hidden");
        clicked.classList.toggle("hidden");
        pText.classList.toggle("hidden");
        
        for(let i = 1; i <= 3; i++){
            trans_lines.classList.toggle("line_rotate" + i.toString());
        }
    
    })
});


ham_btn.addEventListener("click", () => {
    hamburger.classList.toggle("hidden");
    trans_lines.classList.toggle("hidden");
    clicked.classList.toggle("hidden");
    pText.classList.toggle("hidden");

    for(let i = 1; i <= 3; i++){
        trans_lines.classList.toggle("line_rotate" + i.toString());
    }

})

//CHECKPOINT .............................................................