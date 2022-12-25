var menuIcon = document.querySelector(".menu")
var menuLateral = document.querySelector(".menu-lateral")

menuIcon.onclick = function(){
    menuLateral.classList.toggle("menu-pequeno")
}

const getElement2 = (...queries) => document.querySelector(...queries);

const buttonApp = getElement2('.btn-inserir-estoque');
const containerApp = getElement2('.container-modal-estoque');
const modalApp = getElement2('.modal-estoque');
const buttonFecharModalApp = getElement2('.icon-fechar-modal-app');

const activeModalClassApp = 'modal-show';  

const openModalApp = () => containerApp.classList.add(activeModalClassApp);
const closeModalApp = () => containerApp.classList.remove(activeModalClassApp);


buttonApp.addEventListener('click', openModalApp);
buttonFecharModalApp.addEventListener('click', closeModalApp);
containerApp.addEventListener('click', (event) => {
    if (modalApp.contains(event.target)) return; 
    closeModalApp();
});
