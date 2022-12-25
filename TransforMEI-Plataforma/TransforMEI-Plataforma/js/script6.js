var menuIcon = document.querySelector(".menu")
var menuLateral = document.querySelector(".menu-lateral")

menuIcon.onclick = function () {
    menuLateral.classList.toggle("menu-pequeno")
}

const getElement = (...queries) => document.querySelector(...queries);

const buttonProduto = getElement('.btn-abrir-modal');
const containerProduto = getElement('.container-modal');
const modalProduto = getElement('.modal');
const buttonFecharModal = getElement('.icon-fechar-modal');

const activeModalClass = 'modal-show';

const openModal = () => containerProduto.classList.add(activeModalClass);
const closeModal = () => containerProduto.classList.remove(activeModalClass);


buttonProduto.addEventListener('click', openModal);
buttonFecharModal.addEventListener('click', closeModal);
containerProduto.addEventListener('click', (event) => {
    if (modalProduto.contains(event.target)) return;
    closeModal();
});


const getElement3 = (...queries) => document.querySelector(...queries);

const buttonMicrofone = getElement3('.btn-microfone');
const containerMicrofone = getElement3('.container-microfone');
const modalMicrofone = getElement3('.modal-microfone');
const buttonFecharModalMicrofone = getElement3('.btn-fechar-modal-microfone');
const finalizarPedido = getElement3('#btnVer');

const activeModalClassMicrofone = 'modal-show';

const openModalMicrofone = () => containerMicrofone.classList.add(activeModalClassMicrofone);
const closeModalMicrofone = () => containerMicrofone.classList.remove(activeModalClassMicrofone);


buttonMicrofone.addEventListener('click', openModalMicrofone);
buttonFecharModalMicrofone.addEventListener('click', closeModalMicrofone);
finalizarPedido.addEventListener('click', closeModalMicrofone);     /*se der erro é esta linha (atrito com o btn de salvar o pedido)*/
containerMicrofone.addEventListener('click', (event) => {
    if (modalMicrofone.contains(event.target)) return;
    closeModalMicrofone();
});

const getElement4 = (...queries) => document.querySelector(...queries);

const btnPulse = getElement4('.btn-microfone-pedido');
const openPulse = getElement4('.pulse');
const closePulse = getElement4('.btn-mic');

const activePulse = 'pulse-ativo';

const openPulseMic = () => openPulse.classList.add(activePulse);
const closePulseMic = () => openPulse.classList.remove(activePulse);

btnPulse.addEventListener('click', openPulseMic);
closePulse.addEventListener('click', closePulseMic);




const textarea = document.querySelector("#textarea");
const btnGravar = document.querySelector("#btnGravar");

class speechApi {
    constructor() {

        const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition;

        this.speechApi = new SpeechToText();
        this.output = textarea.output;
        this.speechApi.continuous = true;
        this.speechApi.lang = 'pt-BR';

        this.speechApi.onresult = e => {
            let resultIndex = e.resultIndex;
            let transcript = e.results[resultIndex][0].transcript

            textarea.value += transcript
        }
    }
    start() {
        this.speechApi.start()
    }
    stop() {
        this.speechApi.stop()
    }
}




let speech = new speechApi()

btnGravar.addEventListener('click', () => {
    btnGravar.disabled = true;
    btnParar.disabled = false;
    speech.start()
})
btnParar.addEventListener('click', () => {
    btnGravar.disabled = false;
    btnParar.disabled = true;
    speech.stop();


})

btnLimpar.addEventListener('click', () => {
    textarea.value = "";
    speech.stop();
})






btnVer.addEventListener('click', () => {

    let arr = []
    let valor = textarea.value;
    arr = valor.split(" ");



    //retirando as palavras da array de pedido
    let nomeCliente = arr[0]
    let nomeProduto = arr[2]
    let quantidade = 0

    //conversão de número em extenso para número inteiro
    if (arr[1] == "um" || arr[1] == "uma" || arr[1] == 1) {
        quantidade = 1;
    }
    if (arr[1] == "dois" || arr[1] == "duas" || arr[1] == 2) {
        quantidade = 2;
    }

    //Essa é a lista de numeros que pode ser captada pelo reconhecimento de voz, pode ser ampliada no futuro
    const numeros = ["três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"]

    let index = 3;

    for (contagem = 0; contagem < numeros.length; contagem++) {
        if (arr[1] == numeros[contagem]) {
            quantidade = index
        }
        index++
    }

    //objeto pedido que vai ser enviado para o banco de dados
    let pedido = {
        "nomeCliente": nomeCliente,
        "quantidade": quantidade,
        "nomeProduto": nomeProduto
    }

    //enviando o pedido para o banco de dados
    let xhr = new XMLHttpRequest();

    //Enviando dados para API
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log(xhr)
        }
    }
    xhr.open("POST", "https://9426-187-99-104-112.sa.ngrok.io/")

    xhr.setRequestHeader("Content-Type", "application/json");

    let jsonPedido = JSON.stringify(pedido)

    xhr.send(jsonPedido)

    document.getElementById("nome-cliente").innerHTML = nomeCliente ;
    document.getElementById("qtd-produto-pedido").innerHTML = (quantidade + ("x"));
    document.getElementById("nome-produto-pedido").innerHTML = nomeProduto;

    document.getElementById("qtd-produto-item").innerHTML = (quantidade + ("x"));
    document.getElementById("nome-produto-item").innerHTML = nomeProduto;

//


})







