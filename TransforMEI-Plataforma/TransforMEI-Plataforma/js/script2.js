var menuIcon = document.querySelector(".menu")
var menuLateral = document.querySelector(".menu-lateral")

menuIcon.onclick = function(){
    menuLateral.classList.toggle("menu-pequeno")
}

const getElement = (...queries) => document.querySelector(...queries);

const button = getElement('.btn-modal-produto');
const container = getElement('.container-modal-produtos');
const modal = getElement('.modal-produto');

const activeModalClass = 'modal-show-produto';  

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);


button.addEventListener('click', openModal);
container.addEventListener('click', (event) => {
    if (modal.contains(event.target)) return; 
    closeModal();
});

const getElement1 = (...queries) => document.querySelector(...queries);

const buttonAddCategoria = getElement1('.btn-add-categoria');
const containerCategoria = getElement1('.container-modal-add-categoria');
const modalCategoria = getElement1('.modal-add-categoria');
const buttonFecharModal = getElement1('.icon-fechar-modal');

const activeModalClassCategoria = 'modal-show';  

const openModalCategoria = () => containerCategoria.classList.add(activeModalClassCategoria);
const closeModalCategoria = () => containerCategoria.classList.remove(activeModalClassCategoria);


buttonAddCategoria.addEventListener('click', openModalCategoria);
buttonFecharModal.addEventListener('click', closeModalCategoria);
containerCategoria.addEventListener('click', (event) => {
    if (modalCategoria.contains(event.target)) return; 
    closeModalCategoria();
});

const getElement2 = (...queries) => document.querySelector(...queries);

const buttonAddProduto = getElement2('.btn-add-produto');
const containerProduto = getElement2('.container-modal-add-produto');
const modalProduto = getElement2('.modal-add-produto');
const buttonFecharModalProduto = getElement2('.icon-fechar-modal-produto');

const activeModalClassProduto = 'modal-show';  

const openModalProduto = () => containerProduto.classList.add(activeModalClassProduto);
const closeModalProduto = () => containerProduto.classList.remove(activeModalClassProduto);


buttonAddProduto.addEventListener('click', openModalProduto );
buttonFecharModalProduto.addEventListener('click', closeModalProduto);
containerProduto.addEventListener('click', (event) => {
    if (modalProduto.contains(event.target)) return; 
    closeModalProduto();
});

const getElement3 = (...queries) => document.querySelector(...queries);

const buttonApp = getElement3('.btn-icones-menu-lateral');
const containerApp = getElement3('.container-modal-apps');
const modalApp = getElement3('.modal-apps modal');
const buttonFecharModalApp = getElement3('.icon-fechar-modal-app');

const activeModalClassApp = 'modal-show';  

const openModalApp = () => containerApp.classList.add(activeModalClassApp);
const closeModalApp = () => containerApp.classList.remove(activeModalClassApp);


buttonApp.addEventListener('click', openModalApp);
buttonFecharModalApp.addEventListener('click', closeModalApp);
containerApp.addEventListener('click', (event) => {
    if (modalApp.contains(event.target)) return; 
    closeModalApp();
});