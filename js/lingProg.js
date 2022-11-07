const btnsLing = document.querySelector( '.contBtnsLing' );
const imgLing = document.querySelector( '.imgLing' );
let select;


const transformPage = ( event ) => {
    linguagens[event.target.id]()
}

const linguagens = {
    'JS': () => {
        definirBtns();
        removerMain();
        imgLing.setAttribute('src', 'img/JS.png');
        imgLing.setAttribute('alt', 'Imagem da Linguagem de Programação Javascript');
        select = document.querySelector('#JS').setAttribute('class', 'JS');
        select = document.querySelector('body').setAttribute('class', 'bodyJS');
        select = document.querySelector('.main').classList.add('mainJSPHP');
        select = document.querySelector('.header').innerHTML = `Javascript: A linguagem da Web`;
        select = document.querySelector('#JS').setAttribute('id', 'activeJS');
    },
    'PHP': () => {
        definirBtns();
        removerMain();
        imgLing.setAttribute('src', 'img/php.png');
        imgLing.setAttribute('alt', 'Imagem da Linguagem de Programação PHP');
        select = document.querySelector('#PHP').setAttribute('class', 'PHP');
        select = document.querySelector('body').setAttribute('class', 'bodyPHP');
        select = document.querySelector('.main').classList.add('mainJSPHP');
        select = document.querySelector('.header').innerHTML = `PHP: A linguagem imortal`;
        select = document.querySelector('#PHP').setAttribute('id', 'activePHP');
    },
    'Java': () => {
        definirBtns();
        removerMain();
        imgLing.setAttribute('src', 'img/java.png');
        imgLing.setAttribute('alt', 'Imagem da Linguagem de Programação Java');
        select = document.querySelector('#Java').setAttribute('class', 'Java');
        select = document.querySelector('body').setAttribute('class', 'bodyJAVA');
        select = document.querySelector('.main').classList.add('mainJAVA');
        select = document.querySelector('.header').innerHTML = `Java: O rei de todos os reis`;
        select = document.querySelector('#Java').setAttribute('id', 'activeJAVA');
    },
    'C': () => {
        definirBtns();
        removerMain();
        imgLing.setAttribute('src', 'img/C.png');
        imgLing.setAttribute('alt', 'Imagem da Linguagem de Programação C');
        select = document.querySelector('#C').setAttribute('class', 'C');
        select = document.querySelector('body').setAttribute('class', 'bodyC');
        select = document.querySelector('.main').classList.add('mainC');
        select = document.querySelector('.header').innerHTML = `C: O criador das lendas`;
        select = document.querySelector('#C').setAttribute('id', 'activeC');
    },
    'C2': () => {
        definirBtns();
        removerMain();
        imgLing.setAttribute('src', 'img/C2.png');
        imgLing.setAttribute('alt', 'Imagem da Linguagem de Programação C Sharp');
        select = document.querySelector('#C2').setAttribute('class', 'C2');
        select = document.querySelector('body').setAttribute('class', 'bodyC2');
        select = document.querySelector('.main').classList.add('mainC2');
        select = document.querySelector('.header').innerHTML = `C++: A evolução do criador`;
        select = document.querySelector('#C2').setAttribute('id', 'activeC2');
    },
    'Python': () => {
        definirBtns();
        removerMain();
        imgLing.setAttribute('src', 'img/python.png');
        imgLing.setAttribute('alt', 'Imagem da Linguagem de Programação Python');
        select = document.querySelector('#Python').setAttribute('class', 'Python');
        select = document.querySelector('body').setAttribute('class', 'bodyPY');
        select = document.querySelector('.main').classList.add('mainPY');
        select = document.querySelector('.header').innerHTML = `Python: A ciência dos dados`;
        select = document.querySelector('#Python').setAttribute('id', 'activePY');
    }
}

console.log(btnsLing);

const definirBtns = () => {
    if (document.querySelector('#activeJS')) {
        select = document.querySelector('#activeJS').setAttribute('class', 'btnLing');
        select = document.querySelector('#activeJS').setAttribute('id', 'JS');
    } else if (document.querySelector('#activePHP')) {
        select = document.querySelector('#activePHP').setAttribute('class', 'btnLing');
        select = document.querySelector('#activePHP').setAttribute('id', 'PHP');
    } else if (document.querySelector('#activeJAVA')){
        select = document.querySelector('#activeJAVA').setAttribute('class', 'btnLing');
        select = document.querySelector('#activeJAVA').setAttribute('id', 'Java');
    } else if (document.querySelector('#activeC')){
        select = document.querySelector('#activeC').setAttribute('class', 'btnLing');
        select = document.querySelector('#activeC').setAttribute('id', 'C');
    } else if (document.querySelector('#activeC2')){
        select = document.querySelector('#activeC2').setAttribute('class', 'btnLing');
        select = document.querySelector('#activeC2').setAttribute('id', 'C2');
    } else if (document.querySelector('#activePY')){
        select = document.querySelector('#activePY').setAttribute('class', 'btnLing');
        select = document.querySelector('#activePY').setAttribute('id', 'Python');
    }
}

const removerMain = () => {
    select = document.querySelector('.main').classList.remove('mainJSPHP');
    select = document.querySelector('.main').classList.remove('mainJAVA');
    select = document.querySelector('.main').classList.remove('mainC');

}
btnsLing.addEventListener('click', transformPage);