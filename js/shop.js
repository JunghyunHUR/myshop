(function(){
    const listAll = document.getElementsByClassName('list-all')[0];
    const cart = document.getElementsByClassName('cart')[0];
    const cartClose = document.getElementsByClassName('cart-close')[0];
    const bestlinks = document.querySelectorAll('best-tab > li')
    
    listAll.addEventListener("click", changeNav);
    cart.addEventListener("click", cartBoxView);   
    cartClose.addEventListener("click", cartBoxView); 
    
    function changeNav(){
        const nav = document.getElementsByTagName('nav')[0].offsetTop + 52;
        const sitemap = document.getElementById('sitemap');
        listAll.classList.toggle('close');
        listAll.classList.toggle('newlist');
        // console.log(listAll.className);

        if(listAll.className == 'list-all close'){
        sitemap.style.top = nav + 'px';
        sitemap.style.display = 'block';
        }else{
            sitemap.style.display = 'none';
        }
    }

    function cartBoxView(){
        document.getElementsByClassName('cart-view')[0].classList.toggle('none');
    }
    


    // const bx = document.getElementById('ct');
    // console.log(bx.dataset);
    // window.onload = function(){
    // }
//슬라이드 쇼
let slideIndex = 0;
showSlides();
function showSlides(){
    let i;
    const slides = document.getElementsByClassName('img-slide');
    const dot = document.getElementsByClassName('dot');
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
        dot[i].classList.remove('active');
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    dot[slideIndex-1].classList.add('active');
    setTimeout(showSlides, 5000);
}

}());


    document.getElementsByClassName('tablinks')[0].click();

function viewQuick(){
    document.getElementsByClassName('quick')[0].classList.toggle('action');
    document.getElementById('icon').classList.toggle('fa-border-all');
    document.getElementById('icon').classList.toggle('fa-xmark');

}

function openBest(e, bid){
    
    const tabcontent = document.getElementsByClassName('best-tabcontent');
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display='none';
    }
    const tablinks = document.getElementsByClassName('tablinks');
    for(let i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove('active');
    }
    
    document.getElementById(bid).style.display='block'
    e.currentTarget.classList.add('active');

    

}

function viewTab(e){
    const tabcontent = document.getElementsByClassName('tabcontent');
    const tabs = document.getElementsByClassName('tabs');
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].classList.remove('active');
    }
    for(let i = 0; i < tabcontent.length; i++){
        tabs
    }
    tabcontent[e].classList.add('active');
}

function vlist(n){
    const el = document.querySelectorAll('.output');
    el.forEach((items) => {
        items.classList.remove('col-lg-3','col-lg-4', 'col-lg-12');
        items.classList.add('col-lg-'+n);
    });
    
}

function scrollUp(e){
    const up = document.querySelectorAll('#up');
    window.scroll({top : 0, left : 0, behavior : 'smooth'});
}
function scrollDown(e){
    const down = document.querySelectorAll('#down');
    
    window.scroll({top : document.body.scrollHeight, left : 0, behavior : 'smooth'})
}
