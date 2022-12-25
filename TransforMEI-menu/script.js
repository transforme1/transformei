const mais = document.querySelector(".mais");
menos = document.querySelector(".menos");
numero = document.querySelector(".numero-qtd");

let a = 1;

// mais.addEventListener("click", () => {
//     a++;

//     a = (a < 10) ? "0" + a : a;
//     numero.innerText = a;
//     console.log(a);
// });

// menos.addEventListener("click", () => {
//     if (a > 1) {
//         a--;
//         a = (a < 10) ? "0" + a : a;
//         numero.innerText = a;
//     }

// }); 

const openModal = document.querySelector('.container-modal');
const modal = document.querySelector('.modal');
const confete = document.querySelector('#my-canvas');


window.onload = function () {
    setTimeout(function () {
        openModal.style.display = "flex",
            confete.style.display = "block"
    }, 7000)
}


var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

