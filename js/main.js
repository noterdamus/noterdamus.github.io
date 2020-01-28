/*jshint esversion: 6 */ 
$(document).ready(function(){

    //массив сетов
    const set = [
        {
            img: 'img/1.png',
            title: 'Сет №12',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 1
        },
         {
            img: 'img/2.png',
            title: 'Сет №13',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 2
        },
        {
            img: 'img/3.png',
            title: 'Сет №99',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 3
        },
        {
            img: 'img/4.png',
            title: 'Сет №134',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 4
        },
        {
            img: 'img/1.png',
            title: 'Сет №12',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 5
        },
         {
            img: 'img/2.png',
            title: 'Сет №13',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 6
        },
        {
            img: 'img/3.png',
            title: 'Сет №99',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 7
        },
        {
            img: 'img/4.png',
            title: 'Сет №134',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 8
        },
        {
            img: 'img/1.png',
            title: 'Сет №12',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 9
        },
         {
            img: 'img/2.png',
            title: 'Сет №13',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 10
        },
        {
            img: 'img/3.png',
            title: 'Сет №99',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 11
        },
        {
            img: 'img/4.png',
            title: 'Сет №134',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 12
        },
        {
            img: 'img/1.png',
            title: 'Сет №12',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 13
        },
         {
            img: 'img/2.png',
            title: 'Сет №13',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 14
        },
        {
            img: 'img/3.png',
            title: 'Сет №99',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 15
        },
        {
            img: 'img/4.png',
            title: 'Сет №134',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 16
        },
        {
            img: '../img/1.png',
            title: 'Сет №12',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 17
        },
         {
            img: '../img/2.png',
            title: 'Сет №13',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 18
        },
        {
            img: 'img/3.png',
            title: 'Сет №99',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 19
        },
        {
            img: 'img/4.png',
            title: 'Сет №134',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 20
        }
    ];

    const rolls = [
        {
            img: 'img/5.png',
            title: 'Кунсей батакон',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 21
        },
         {
            img: 'img/6.png',
            title: 'Унаги диру',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 22
        },
        {
            img: 'img/7.png',
            title: 'Филадельфия',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 23
        },
        {
            img: 'img/8.png',
            title: 'Мексиканский ',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 24
        },
        {
            img: 'img/5.png',
            title: 'Кунсей батакон',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 25
        },
         {
            img: 'img/6.png',
            title: 'Унаги диру',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 26
        },
        {
            img: 'img/7.png',
            title: 'Филадельфия',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 27
        },
        {
            img: 'img/8.png',
            title: 'Мексиканский ',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 28
        },
        {
            img: 'img/5.png',
            title: 'Кунсей батакон',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 29
        },
         {
            img: 'img/6.png',
            title: 'Унаги диру',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 30
        },
        {
            img: 'img/7.png',
            title: 'Филадельфия',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 31
        },
        {
            img: 'img/8.png',
            title: 'Мексиканский ',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 32
        },
        {
            img: 'img/5.png',
            title: 'Кунсей батакон',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 33
        },
         {
            img: 'img/6.png',
            title: 'Унаги диру',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 34
        },
        {
            img: 'img/7.png',
            title: 'Филадельфия',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 35
        },
        {
            img: 'img/8.png',
            title: 'Мексиканский ',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 36
        },
        {
            img: 'img/5.png',
            title: 'Кунсей батакон',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 37
        },
         {
            img: 'img/6.png',
            title: 'Унаги диру',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 38
        },
        {
            img: 'img/7.png',
            title: 'Филадельфия',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 39
        },
        {
            img: 'img/8.png',
            title: 'Мексиканский ',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 40
        } 
    ];

    const pizza = [
        {
            img: 'img/11.png',
            title: 'Баварская',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 41
        },
         {
            img: 'img/12.png',
            title: 'Вегетарианская',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 42
        },
        {
            img: 'img/13.png',
            title: 'Пепперони',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 43
        },
        {
            img: 'img/14.png',
            title: 'Классическая',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 44
        },
        {
            img: 'img/11.png',
            title: 'Баварская',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 45
        },
         {
            img: 'img/12.png',
            title: 'Вегетарианская',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 46
        },
        {
            img: 'img/13.png',
            title: 'Пепперони',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 47
        },
        {
            img: 'img/14.png',
            title: 'Классическая',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 48
        },
        {
            img: 'img/11.png',
            title: 'Баварская',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 49
        },
         {
            img: 'img/12.png',
            title: 'Вегетарианская',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 50
        },
        {
            img: 'img/13.png',
            title: 'Пепперони',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 51
        },
        {
            img: 'img/14.png',
            title: 'Классическая',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 52
        },
        {
            img: 'img/11.png',
            title: 'Баварская',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 53
        },
         {
            img: 'img/12.png',
            title: 'Вегетарианская',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 54
        },
        {
            img: 'img/13.png',
            title: 'Пепперони',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 55
        },
        {
            img: 'img/14.png',
            title: 'Классическая',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 56
        },
        {
            img: 'img/11.png',
            title: 'Баварская',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 4155,
            hit: true,
            new: false,
            id: 57
        },
         {
            img: 'img/12.png',
            title: 'Вегетарианская',
            quantity: 22,
            weight: 2000,
            kkal: 170,
            price: 1155,
            hit: false,
            new: false,
            id: 58
        },
        {
            img: 'img/13.png',
            title: 'Пепперони',
            quantity: 21,
            weight: 2560,
            kkal: 1704,
            price: 555,
            hit: false,
            new: false,
            id: 59
        },
        {
            img: 'img/14.png',
            title: 'Классическая',
            quantity: 176,
            weight: 560,
            kkal: 666,
            price: 9999,
            hit: false,
            new: true,
            id: 60
        }
    ];
    

    //шаблон
    const template = $('.product').html();
    const setss = document.querySelector('#sets');
    const roll = document.querySelector('#rolls');
    const pizz = document.querySelector('#pizza');
    const tabss = document.querySelector('#tab');

    function addTemp(tag, id){
        for(let i = 0; i < tag.length; i++){
            let html = Mustache.to_html(template, tag[i]);
            $(id).append(html);
           // setCookie('');
        }
    }

    addTemp(set, setss);
    addTemp(rolls, roll);
    addTemp(pizza, pizz);

    //tabs
    const arr = set.concat(rolls).concat(pizza);
    const tabNew = document.querySelector('#tab-new');
    const tabHit = document.querySelector('#tab-hit');
    const sectNew = document.querySelector('#new');
    const sectHit = document.querySelector('#hit');
    const wrapNew = document.querySelector('#section-new');
    const wrapHit = document.querySelector('#section-hit');
    
    function changeNew(){
        for(let i = 0; i < arr.length; i++){
            if(arr[i].new){
                let html = Mustache.to_html(template, arr[i]);
                $('#new').append(html);
            }
        }
    }

    function changeHit(){
        for(let i = 0; i < arr.length; i++){
            if(arr[i].hit){
                let html = Mustache.to_html(template, arr[i]);
                $('#hit').append(html);
            }
        }
    }

   
    function remove(){
        let link = document.querySelectorAll('.nav__link'),
            none = document.querySelectorAll('.none');
        for(let i = 0; i < link.length; i++){
            link[i].classList.remove('active');
        }
        this.classList.add('active');

        if(tabNew.classList.contains('active')){
            for(let i = 0; i < none.length; i++){
                none[i].classList.remove('visible');
            }
            wrapNew.classList.add('visible');
        }else if(tabHit.classList.contains('active')){
            for(let i = 0; i < none.length; i++){
                none[i].classList.remove('visible');
            }
            wrapHit.classList.add('visible');
        }
    }

    tabNew.addEventListener('click', remove);
    tabHit.addEventListener('click', remove);
    changeNew();
    changeHit();

   //slider 
    $("#slider").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        nav: true,
        navText:["	&lt;","&gt;"]
    });

    //carusel
    function addCarousel(e){
        $(e).owlCarousel({
            responsive:{
                0:{
                  items:1,
                  dots: false
                },
                320:{
                  items:1,
                  dots: false
                },
                765:{
                  items:3
                },
                1170:{
                    items:4
                }
              }
        });
    }

    addCarousel(setss);
    addCarousel(roll);
    addCarousel(pizz);
    addCarousel(sectNew);
    addCarousel(sectHit);

    //изменения цены
    let card = document.querySelectorAll('.card'),
        values = document.querySelectorAll('.value-text'),
        prices = document.querySelectorAll('.price-text'),
        plus = document.querySelectorAll('.plus'),
        minus = document.querySelectorAll('.minus'),
        minMax = document.querySelectorAll('.amount-button'),
        button = document.querySelectorAll('.card-btn'),
        basket = document.querySelector('#relativ'),
        counter = document.querySelector('.am'),
        priceArr = [],
        valueArr = [];
       

    //функция увеличения
    function valueUp(){
        let parent = this.parentNode,
            value = this.parentNode.querySelector('.value-text'),
            price = parent.parentNode.querySelector('.price-text'),
            constant = price.dataset.price;

        value.innerHTML++;
        if(value.innerHTML > 1){
            price.innerHTML = Number(constant) * Number(value.innerHTML);
        }
    }

    //функция уменьшения
    function valueDown(){
        let parent = this.parentNode,
            value = this.parentNode.querySelector('.value-text'),
            price = parent.parentNode.querySelector('.price-text'),
            constant = price.dataset.price;

        if(value.innerHTML > 0){
            value.innerHTML--;
            if(value.innerHTML > 0){
                price.innerHTML = Number(constant) * Number(value.innerHTML);
            }
         }
    }

    //изменение цвета и текста КНОПКИ + добавление в корзину
    function buttonChange(){
            let value = this.parentNode.querySelector('.value-text'),
                price = this.parentNode.querySelector('.price-text'),
                id = price.dataset.id,
                priceNameCookie = 'price' + id,
                valueNameCookie = 'value' + id,
                activeNameCookie = 'active' +id;

            this.classList.toggle('card-active');
            if(this.classList.contains('card-active')){

                this.innerHTML = 'В корзине';
                let values = this.parentNode.querySelector('.value-text').innerHTML,
                prices = this.parentNode.querySelector('.price-text').innerHTML,
                id = this.parentNode.querySelector('.value-text').dataset.id;

                if(valueArr[id] === undefined){
                    valueArr[id] = Number(values);
                }
                if(priceArr[id] === undefined){
                    priceArr[id] = Number(prices);
                }
                
                counter.innerHTML = Number(sum(valueArr));
                document.cookie = "counter=" + sum(valueArr);
                basket.title = 'Сумма: ' + Number(sum(priceArr)) + 'руб.';
                document.cookie = "basket=" + sum(priceArr);
                document.cookie = activeNameCookie + "=" + 1;
                document.cookie = priceNameCookie + "=" + Number(price.innerHTML);
                document.cookie = valueNameCookie + "=" + Number(value.innerHTML);
                document.cookie = "counter=" + sum(valueArr);
            }else{
                this.innerHTML = 'В корзину';
                let values = this.parentNode.querySelector('.value-text').innerHTML,
                prices = this.parentNode.querySelector('.price-text').innerHTML,
                id = this.parentNode.querySelector('.value-text').dataset.id;
                
                delete valueArr[id];
                delete priceArr[id];
                counter.innerHTML = Number(sum(valueArr));
                document.cookie = "counter=" + sum(valueArr);
                basket.title = 'Сумма: ' + Number(sum(priceArr)) + 'руб.';
                document.cookie = "basket=" + sum(priceArr);
                document.cookie = activeNameCookie + "=" + Number(price.innerHTML) + "; max-age=0";
                document.cookie = priceNameCookie + "=" + Number(price.innerHTML) + "; max-age=0";
                document.cookie = valueNameCookie + "=" + Number(value.innerHTML) + "; max-age=0";
            }

            if(counter.innerHTML == 0){
                for(let i = 0; i < button.length; i++){
                    button[i].classList.remove('card-active');
                }
            }

            
        
    }
    
    counter.innerHTML = Number(getCookie('counter')) || 0;
    basket.title = Number(getCookie('basket')) || 0;

    function sum(arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] !== undefined){
                sum += Number(arr[i]);
            }
        }
        return sum;
    }
    
    //счетчик корзины-------------------------------------
    /* function addCounter(){
        let active = document.querySelectorAll('.card-active'),
            sum = 0,
            sum2 = 0,
            arr = [];
        for(let i = 0; i < active.length; i++){
            let value = active[i].parentNode.querySelector('.value-text'),
                price = active[i].parentNode.querySelector('.price-text'),
                valueId = value.dataset.id,
                priceId = price.dataset.id;
                
            arr.push(valueId);    

            sum += Number(value.innerHTML);
            
            if(Number(value.innerHTML) > 0){
                sum2 += Number(price.innerHTML);
            }
            
            
        }
        
        document.cookie = "counter=" + sum;
        counter.innerHTML = sum;
        document.cookie = "basket=Сумма: " + sum2 + "руб.";
        basket.title = 'Сумма: ' + sum2 + 'руб.';
    } */

    //counter.innerHTML = Number(getCookie('counter')) || 0;
    //basket.title = Number(getCookie('basket')) || 0;
    
    //перезагрузка
    function reload(){

        let arr = cookieInObj();
         for(let i = 0; i < arr.length; i++){

            let objId = f(arr[i].keyName);
                cookieName = d(arr[i].keyName);

            for(let j = 0; j < card.length; j++){

                let price = card[j].querySelector('.price-text'),
                cardId = price.dataset.id;

                if(objId == Number(cardId)){
                    button[j].classList.add('card-active');

                    if(cookieName == ' value'){
                        values[j].innerHTML = arr[i].val;
                    }
                    if(cookieName == ' price'){
                        prices[j].innerHTML = arr[i].val;
                    }
                }
            }
        }

        let activeCard = document.querySelectorAll('.card-active');
        if(activeCard.length !== Number(counter.innerHTML)){
            //то надо найти элементы с одним ид и значение в коунтере оставить только от одного
            //console.log(activeCard.length);
        }
        


    }

   

    //извлечение числа из строки
    function f(str) {
        let x = parseInt(str.replace(/[^\d]/g, ''));
        return x;
    }

    //извлечение символов из строки
    function d(str) {
        let x = str.replace(/[^\D]/g, '');
        return x;
    }
    //преобразование кук в массив объектов
    function cookieInObj(){
        let cookies = document.cookie,
            arrCookie = cookies.split(';');
            arr2 = [];

        for(let i = 0; i < arrCookie.length; i++){
            let key = arrCookie[i].split('=');
            let obj = {
                keyName : key[0],
                val : key[1]
            };

            arr2.push(obj);
        }

        return arr2;
    }

    reload();

    //COOKIE----------------------------------------------

    // значение cookie
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
    

    for(let i = 0; i < card.length; i++){
        plus[i].addEventListener('click', valueUp);
        minus[i].addEventListener('click', valueDown);
        button[i].addEventListener('click', buttonChange);
        //button[i].addEventListener('click', addCounter);
    }
    
    //responsive-----------------------------------------

    let burger = document.querySelector('.burger'),
        close = document.querySelector('.close'),
        contentBtn = document.querySelector('.content-btn');

    burger.addEventListener('click', burgerMenu);
    close.addEventListener('click', closeMenu);
    contentBtn.addEventListener('click', openContent);

    function openContent(){
        let p = document.querySelectorAll('.content-none');
        for(let i = 0; i < p.length; i++){
            p[i].style.display = "inline";
        }
        this.style.display = "none";
    }

    function burgerMenu(){
        let active = this.parentNode.querySelector('.nav-list-none');
        active.classList.add('header-active');
        console.log(active);
    }

    function closeMenu(){
        let active = this.parentNode;
        active.classList.remove('header-active');
    }

    let footerClick = document.querySelectorAll('.footer-click');

    for(let i = 0; i < footerClick.length; i++){
        footerClick[i].addEventListener('click', openFooter);


        function openFooter(){
            let none = this.querySelector('.footer-none'),
                treugole = footerClick[i].querySelector('.treugole');
            none.classList.toggle('footer-active');
            treugole.classList.toggle('footer-active');
        }
    }

  });


