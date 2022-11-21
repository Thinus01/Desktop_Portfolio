const hamburger = document.querySelector('.hamburger');
const hamBtn = document.querySelector('.ham_btn');
const transLines = document.querySelector('.trans_lines');
const clicked = document.querySelector('.clicked');
const pText = document.querySelector('#primary_text');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
    hamburger.classList.toggle('hidden');
    transLines.classList.toggle('hidden');
    clicked.classList.toggle('hidden');
    pText.classList.toggle('hidden');
    for (let i = 1; i <= 3; i+=1){
        transLines.classList.toggle('line_rotate' + i.toString());
    }
  });
});

hamBtn.addEventListener('click', () => {
  hamburger.classList.toggle('hidden');
  transLines.classList.toggle('hidden');
  clicked.classList.toggle('hidden');
  pText.classList.toggle('hidden');
  for (let i = 1; i <= 3; i+=1){
    transLines.classList.toggle('line_rotate' + i.toString());
  }
});