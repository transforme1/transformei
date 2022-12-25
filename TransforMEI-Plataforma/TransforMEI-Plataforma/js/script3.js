var menuIcon = document.querySelector(".menu")
var menuLateral = document.querySelector(".menu-lateral")

menuIcon.onclick = function(){
    menuLateral.classList.toggle("menu-pequeno")
}

const getElement3 = (...queries) => document.querySelector(...queries);

const buttonNovoCliente = getElement3('.novo-cliente');
const containerNovoCliente = getElement3('.container-modal-novo-cliente');
const modalNovoCliente = getElement3('.modal-novo-cliente');
const buttonFecharModalNovoCliente = getElement3('.icon-fechar-modal');

const activeModalClassNovoCliente = 'modal-show';  

const openModalNovoCliente = () => containerNovoCliente.classList.add(activeModalClassNovoCliente);
const closeModalNovoCliente = () => containerNovoCliente.classList.remove(activeModalClassNovoCliente);


buttonNovoCliente.addEventListener('click', openModalNovoCliente);
buttonFecharModalNovoCliente.addEventListener('click', closeModalNovoCliente);
containerNovoCliente.addEventListener('click', (event) => {
    if (modalNovoCliente.contains(event.target)) return; 
    closeModalNovoCliente();
});


const getElement = (...queries) => document.querySelector(...queries);

const buttonCliente = getElement('.btn-detalhes-clientes');
const containerCliente = getElement('.container-modal-detalhes-cliente');
const modalCliente = getElement('.modal-destalhes-cliente');
const buttonFecharModalCliente = getElement('.icon-fechar-modal-destalhes');

const activeModalClassCliente = 'modal-show';  

const openModalCliente = () => containerCliente.classList.add(activeModalClassCliente);
const closeModalCliente = () => containerCliente.classList.remove(activeModalClassCliente);


buttonCliente.addEventListener('click', openModalCliente);
buttonFecharModalCliente.addEventListener('click', closeModalCliente);
containerCliente.addEventListener('click', (event) => {
    if (modalCliente.contains(event.target)) return; 
    closeModalCliente();
});

const getElement2 = (...queries) => document.querySelector(...queries);

const buttonApp = getElement2('.btn-icones-menu-lateral');
const containerApp = getElement2('.container-modal-apps');
const modalApp = getElement2('.modal-apps modal');
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

