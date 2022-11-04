// const dev_ex = document.querySelector('.dev-ex');
// const dev__name = document.querySelector('.dev__name')
// const dev__img = document.querySelector('.dev__img');
// const major = document.querySelector('.ex');
// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');


// content = [
//     {
//       image: '/images/image-john.jpg',
//       text: ` “ If you want to lay the best foundation possible I’d recommend taking this course. 
//       The depth the instructors go into is incredible. I now feel so confident about 
//       starting up as a professional developer. ”`,
//       name:  'John Tarkpor',
//       major:   'Junior Front-end Developer'
//     },

//     {
       
//         image: '/images/image-tanya.jpg',
//         text: ` “ I’ve been interested in coding for a while but never taken the jump, until now. 
//         I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
//         excited about the future. ”`,
//         name:  'Tanya Sinclair',
//         major:   'UX Engineer'

//     }
// ]


// next.addEventListener('click', nextElment)

"use strict";

const btnPrev = document.querySelector(`.prev`);
const btnNext = document.querySelector(`.next`);

const quote = document.querySelector(`.dev-ex`);
const name = document.querySelector(`.dev__name`);
const position = document.querySelector(`.ex`);
const image = document.querySelector(`.dev__img`);

let state = true;

function changeContent() {
  if (state) {
    quote.textContent =
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
    name.textContent = "John Tarkpor";
    position.textContent = "Junior Frontend Developer";
    image.src = "images/image-john.jpg";
  } else {
    quote.textContent =
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
    name.textContent = "Tanya Sinclair";
    position.textContent = "UX Engineer";
    image.src = "images/image-tanya.jpg";
  }
  state = !state;
}

btnPrev.addEventListener("click", changeContent);
btnNext.addEventListener("click", changeContent);


// function nextElment(){
//      console.log(content++) 
// }

// next.addEventListener('click', prevElment)



// next.addEventListener('click', nextElment)
