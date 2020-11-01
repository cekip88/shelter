function headLinksDisable() {
    let links = document.querySelectorAll('.head-link');
    links.forEach(function (link,index) {
        if(index > 1){
            link.addEventListener('click',function (e) {
                e.preventDefault();
            })
        }
    })
}
headLinksDisable();

function burgerClick() {
    let
        cont = document.querySelector('.head'),
        main = document.querySelector('main'),
        body = document.querySelector('body');

    body.addEventListener('click',function (e) {
        let target = e.target;

        if (!cont.classList.contains('head-burger-active')){
            if (target.classList.contains('head-burger') || target.parentElement.classList.contains('head-burger')){
                cont.classList.add('head-burger-active');
                let banner = document.createElement('DIV');
                banner.className = 'burger-banner';
                banner.setAttribute('style','position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;background-color:rgba(41,41,41,0.6)');
                let banners = [];
                for (let i = 0; i < 3; i++){
                    banners.push(banner.cloneNode(true));
                }
                main.append(banners[0]);
                document.querySelector('footer').append(banners[1]);
                document.querySelector('header').append(banners[2]);
                document.querySelector('html').setAttribute('style','overflow:hidden')
            }
        } else if (cont.classList.contains('head-burger-active')){
            cont.classList.remove('head-burger-active');
            body.querySelectorAll('.burger-banner').forEach(function (el) {
                el.remove()
            });
            document.querySelector('html').setAttribute('style','')
        }
    });
}
burgerClick();

function checkUrl() {
    let url = location.href;
    let links = document.querySelectorAll('.head-link');
    links.forEach(function (el) {
        let href = el.getAttribute('href');
        href = href.split('/');
        href = href[href.length - 1];
        if(url.indexOf(href) >= 0){
            el.setAttribute('href','#body');
        }
    });
    if (url.indexOf('pages/main') >= 0){
        document.querySelector('.head-logo').addEventListener('click',function (e) {
            e.preventDefault();
        })
    }
}
checkUrl();

let animals = [
    {
        "name": "Katrine",
        "img": "../../assets/pets-katrine.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },{
        "name": "Jennifer",
        "img": "../../assets/pets-jennifer.jpg",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },{
        "name": "Woody",
        "img": "../../assets/pets-woody.jpg",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },{
        "name": "Sophia",
        "img": "../../assets/pets-sophia.jpg",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },{
        "name": "Timmy",
        "img": "../../assets/pets-timmy.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },{
        "name": "Charly",
        "img": "../../assets/pets-charly.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },{
        "name": "Scarlett",
        "img": "../../assets/pets-scarlet.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },{
        "name": "Freddie",
        "img": "../../assets/pets-freddie.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    }];
function createAnimalCard(data = {},tag = 'DIV') {
    let card = document.createElement(`${tag}`);
    card.className = 'slider-item';
    let imgCont = document.createElement('DIV');
    imgCont.className = 'slider-item-photo';
    let img = document.createElement('IMG');
    img.setAttribute('src',data.img);
    let name = document.createElement('SPAN');
    name.className = 'slider-item-name';
    name.textContent = data.name;
    let btn = document.createElement('BUTTON');
    btn.className = 'btn-border';
    btn.textContent = 'Learn more';

    imgCont.append(img);
    card.append(imgCont,name,btn);

    let animalName = name.textContent;
    card.addEventListener('click',function () {
        showPopup(animalName);
    });

    return card;
}
function createArray() {
    let arr = [];
    let mob = [], tab = [], desc = [];
    for (let i = 0; i < 48; i++){
        if (mob.length === 3) mob = [];
        if (tab.length === 6) tab = [];
        if (desc.length === 8) desc = [];
        let j = Math.floor((Math.random()*8));
        while (mob.indexOf(j) > -1 || tab.indexOf(j) > -1 || desc.indexOf(j) > -1){
            j = Math.floor((Math.random()*8));
        }
        mob.push(j);
        tab.push(j);
        desc.push(j);
        arr.push(j);
    }
    return arr;
}
function lookListControll() {
    let arr = createArray();
    let animalsList = [];
    for (let i = 0; i < arr.length; i++){
        animalsList.push(animals[arr[i]])
    }

    let itemsOnPage = 3;
    if (window.innerWidth >= 768 && window.innerWidth < 1280) itemsOnPage = 6;
    else if (window.innerWidth >= 1280) itemsOnPage = 8;

    let page = 1,
        start = (page - 1) * itemsOnPage,
        pages = animalsList.length / itemsOnPage,
        pagination = document.querySelector('.look-pagination'),
        pag = {
            'nextPageBtn' : pagination.children[3],
            'finishPageBtn' : pagination.children[4],
            'prevPageBtn' : pagination.children[1],
            'startPageBtn' : pagination.children[0]
        };

    window.addEventListener('resize',function (e) {
        let items = 3;
        if (window.innerWidth >= 768 && window.innerWidth < 1280) items = 6;
        else if (window.innerWidth >= 1280) items = 8;

        if (items !== itemsOnPage) {
            itemsOnPage = items;
            pages = animalsList.length / itemsOnPage;
            onclick();
        }
    });

    pag['nextPageBtn'].addEventListener('click',function (e) {
        if (!pag['nextPageBtn'].classList.contains('btn-circle-inactive')){
            page = page + 1;
            start = (page - 1) * itemsOnPage;
            pagination.children[2].querySelector('span').textContent = page + '';
            onclick()
        }
    });
    pag['prevPageBtn'].addEventListener('click',function (e) {
        if (!pag['prevPageBtn'].classList.contains('btn-circle-inactive')){
            page = page - 1;
            start = (page - 1) * itemsOnPage;
            pagination.children[2].querySelector('span').textContent = page + '';
            onclick()
        }
    });
    pag['startPageBtn'].addEventListener('click',function (e) {
        if (!pag['startPageBtn'].classList.contains('btn-circle-inactive')){
            page = 1;
            start = (page - 1) * itemsOnPage;
            pagination.children[2].querySelector('span').textContent = page + '';
            onclick()
        }
    });
    pag['finishPageBtn'].addEventListener('click',function (e) {
        if (!pag['finishPageBtn'].classList.contains('btn-circle-inactive')){
            page = pages;
            start = (page - 1) * itemsOnPage;
            pagination.children[2].querySelector('span').textContent = page + '';
            onclick()
        }
    });

    function onclick() {
        lookListFill(start,itemsOnPage,page,pages,animalsList);
        lookPageBtnCheck(page,pages,pag);
    }
    onclick();
}
function lookListFill(start,itemsOnPage,page,pages,animals) {
    if (page > pages) return;
    let list = document.querySelector('.look-list');

    for (let j = 0; j < list.children.length; j++){
        list.children[j].setAttribute('style','opacity:0')
    }
    setTimeout(function (e) {
        list.innerHTML = '';
        for (let i = 0; i < itemsOnPage ; i++){
            let item = createAnimalCard(animals[start], 'LI');
            start++;
            item.setAttribute('style','opacity:0');
            list.append(item);
            item.removeAttribute('style')
        }
    },350)
}
function lookPageBtnCheck(page,pages,pag){

    for (let btn in pag){
        if (pag[btn].classList.contains('btn-circle-inactive')){
            pag[btn].classList.remove('btn-circle-inactive');
        }
    }

    if (page === 1){
        pag['prevPageBtn'].classList.add('btn-circle-inactive');
        pag['startPageBtn'].classList.add('btn-circle-inactive');
    } else if (page === pages){
        pag['nextPageBtn'].classList.add('btn-circle-inactive');
        pag['finishPageBtn'].classList.add('btn-circle-inactive');
    }
}


function sliderFill(arr) {
    let slider = document.querySelector('.slider-cont');
    for (let i = 0; i < 5; i++){
        let j = i - 1;
        if (j < 0) j = 7;
        let slide = createAnimalCard(arr[j]);
        slider.append(slide)
    }
}


location.href.indexOf('pages/pets') >= 0 ? lookListControll() : slider();

function slider() {
    let arr = createArray();
    let array = [];
    for (let i = 0; i < arr.length; i++){
        let x = arr[i];
        array.push(animals[x])
    }

    sliderFill(array);

    let nextBtn = document.querySelector('.slider-arrow-right');
    let prevBtn = document.querySelector('.slider-arrow-left');
    let slider = document.querySelector('.slider-cont');
    let next = 4;
    let prev = 6;


    let time = 250;
    if (window.innerWidth >= 768 && window.innerWidth < 1280) time = 500;
    if (window.innerWidth >= 1280) time = 750;

        nextBtn.addEventListener('click',function (e) {
        let int = setInterval(function (e) {
            let nextCard = createAnimalCard(array[next]);
            next = next + 1;
            if (next > 7) next = 0;
            slider.children[0].remove();
            slider.append(nextCard);
        },250);
        setTimeout(function (e) {
            clearInterval(int)
        },time)
    });
    prevBtn.addEventListener('click',function (e) {

        let int = setInterval(function (e) {
            let prevCard = createAnimalCard(array[prev]);
            prev = prev - 1;
            if (prev < 0) prev = 7;
            slider.children[4].remove();
            slider.prepend(prevCard);
        },250);
        setTimeout(function (e) {
            clearInterval(int)
        },time)
    });
}
function showPopup(name) {
    let popup = document.querySelector('.popup');

    let animal = {};
    animals.forEach(function (el) {
        if (el.name === name) animal = el;
    });

    popup.querySelector('.popup-photo').setAttribute('src',animal.img);
    popup.querySelector('.popup-inner-name').textContent = name;
    popup.querySelector('.popup-inner-animal').textContent = animal.type + ' - ' + animal.breed;
    popup.querySelector('.popup-inner-description').textContent = animal.description;

    let specs = [animal.age,animal.inoculations,animal.diseases,animal.parasites];
    popup.querySelectorAll('.popup-inner-spec-value').forEach(function (el,index) {
        el.textContent = '';
        if (typeof specs[index] === 'string') el.textContent = specs[index];
        else if(Array.isArray(specs[index])) {
            specs[index].forEach(function (element) {
                el.textContent += element + ', '
            });
            el.textContent = el.textContent.substr(0,el.textContent.length - 2)
        }
    });


    let closeBtn = popup.querySelector('.popup-close'),
        closeBgc = popup.querySelector('.popup-bgc');
    closeBtn.addEventListener('click',function (e) {
        popup.classList.remove('popup-active')
    });
    closeBgc.addEventListener('click',function (e) {
        popup.classList.remove('popup-active')
    });
    closeBgc.addEventListener('mouseover',function (e) {
        closeBtn.style.transform = 'rotate(180deg)'
    });
    closeBgc.addEventListener('mouseout',function (e) {
        closeBtn.style.transform = 'rotate(0)'
    });
    closeBtn.addEventListener('mouseover',function (e) {
        closeBtn.style.transform = 'rotate(180deg)'
    });
    closeBtn.addEventListener('mouseout',function (e) {
        closeBtn.style.transform = 'rotate(0)'
    });

    popup.classList.add('popup-active');

    if (popup.classList.contains('popup-active')) document.querySelector('html').setAttribute('style','overflow:hidden');
    else document.querySelector('html').setAttribute('style','');
}

