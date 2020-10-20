"use strict"

/* let research = prompt('Вы находитесь в поисках толковых сотрудников? ', '');

let message = (research == 'да' || research == 'Да') ? 'Добро пожаловать)':
    (research == 'нет' || research == 'Нет') ? 'А вдруг пригодятся?)':
    (research == '') ? 'Давайте знакомиться!':
    'Нужно познакомиться, чтобы найти общий язык';
alert(message + "\u{1F609}"); */


function getDate() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    if(secs < 10) {
        secs = '0' + secs;
    };
    if(mins < 10) {
        mins = '0' + mins;
    };
    if(hours < 10) {
        hours = '0' + hours;
    };
    document.getElementById("time").innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval(getDate(), 1000);

function getCareer() {
    let p = document.createElement("p");
    let node = document.createTextNode(`С сентября 2011 года я работала в качестве бизнес-тренера в различных страховых компаниях (РОСНО, Allianz, ВТБ Страхование, СОГАЗ).
Основные обязанности: обучение и адаптация персонала, разработка и проведение тренингов по продажам, тренингов личностного роста. 
Богатый опыт работы с крупнейшими банками (Сбербанк, ВТБ, Почта Банк) дал мне отличную возможность
прокачать навыки работы в команде, работы в условиях жёсткой многозадачности, обработку больших объёмов информации.`);
    p.appendChild(node);

    let section = document.getElementById("about");
    section.appendChild(p);    
    document.getElementById("portfolio").style.paddingTop = "5em";
    career.removeEventListener('click', getCareer);
};

let career = document.getElementById("career");
career.addEventListener('click', getCareer); 