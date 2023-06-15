(function(){
    const listAll = document.getElementsByClassName('list-all')[0];
    const cart = document.getElementsByClassName('cart')[0];
    const cartClose = document.getElementsByClassName('cart-close')[0];
    const bestlinks = document.querySelectorAll('best-tab > li');
    const size = document.shopform.size;
    const rootColors = document.getElementsByClassName('rootColors')[0];
    
    //컬러 선택하면 size check 풀기
    rootColors.addEventListener('click', function(){
        document.querySelectorAll('.size').forEach((v, i) =>{
            v.checked = false;
        });
    });

    //본문 주문 폼
   size.forEach( function(sz){
       sz.addEventListener('change', function(e){
          const selectTitle = document.getElementById("title").value;
          const selectPrice = document.getElementById("price").value;
          const selectColor = document.querySelector('.color:checked').value;
          const selectSize = document.querySelector('.size:checked').value;
          const addProduct = document.getElementById("addProduct");

          let isAddProduct = document.getElementsByClassName("addProduct");
          
          const colors = document.getElementsByClassName('color');
          

          let colorsIndex;
          let i;

          for(i = 0; i<colors.length; i++) {
            if(colors[i].checked) colorsIndex = i;
          }
      
          const sizes = document.getElementsByClassName('size');
          let sizesIndex;
          for(i = 0; i < sizes.length; i++) {
            if(sizes[i].checked) sizesIndex = i;
          }
          
        //  const selectSizeCount = document.querySelectorAll('.size').findIndex(e=>e.checked);
        let addList = true
        let count = 0;
        if(isAddProduct.length > 0) {
            count = isAddProduct.length;
        }

        document.querySelectorAll(".addProduct").forEach(function(v){
            if("addProduct"+colorsIndex+sizesIndex == v.id){
                alert("같은 주문이 있습니다.");
                addList = false;
            }
        });
        if(addList){
            let list = `<ul class="addProduct" id="addProduct${colorsIndex}${sizesIndex}">
                            <li class="title">
                                <p>${selectTitle}</p>
                                <p class="option">${selectColor} , ${selectSize}</p>
                            </li>
                            <li id="add">
                                <div class="addbox">
                                    <span class="ctv" id="ctv${colorsIndex}${sizesIndex}">1</span>
                                    <div class="pmbox">
                                        <div class="up" onclick="updn('${colorsIndex}${sizesIndex}', 1)"><i class="fa-solid fa-angle-up"></i></div>
                                        <div class="down" onclick="updn('${colorsIndex}${sizesIndex}', -1)"><i class="fa-solid fa-angle-down"></i></div>
                                    </div>
                                </div>
                                <span class="listclose" onclick="closelist('${colorsIndex}','${sizesIndex}')"><i class="fa-solid fa-xmark"></i></span>
                                <input type="hidden" name="ct[]" class="ct" id="ct${colorsIndex}${sizesIndex}" value="1">
                                <input type="hidden" name="money[]" class="money" id="money${colorsIndex}${sizesIndex}" value="${selectPrice}">
                                <input type="hidden" name="summoney[]" class="summoney" id="summoney${colorsIndex}${sizesIndex}" value="${selectPrice}">
                            </li>
                            <li class="totalP" id="totalIP${colorsIndex}${sizesIndex}">
                                ${numComma(selectPrice)}원
                            </li>
                        </ul>`;
            const opt = addProduct.innerHTML;
            addProduct.innerHTML = opt + list;
        }

        let smoney = document.querySelectorAll('.summoney');
        let scount = document.querySelectorAll('.ct');
        let totalmoney = 0;
        let totalcount = 0;
        for(let i = 0; i < smoney.length; i++){
            totalmoney += parseInt(smoney[i].value);
            totalcount += parseInt(scount[i].value)
        }
        document.getElementById('total-money').innerHTML = numComma(totalmoney) + '원';
        document.getElementById('total-count').innerHTML = '(' + totalcount + '개)';
        });
    });



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

    

}());

//세자리 단위 콤마 찍는 정규식
const numComma = (value) => {
    value = value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return value;
}

//리스트 닫기
function closelist(m, n){
    document.getElementById('addProduct' + m + n).remove();
    
    let smoney = document.querySelectorAll('.summoney');
    let scount = document.querySelectorAll('.ct');
    let totalmoney = 0;
    let totalcount = 0;
    for(let i = 0; i < smoney.length; i++){
        totalmoney += parseInt(smoney[i].value);
        totalcount += parseInt(scount[i].value);
    }
    document.getElementById('total-money').innerHTML = numComma(totalmoney) + '원';
    document.getElementById('total-count').innerHTML = '(' + totalcount + '개)';
    
}

function updn(i, n) {
    let ct = parseInt(document.getElementById('ct'+i).value);
    let money = parseInt(document.getElementById('money' + i).value);
    let summoney = 0;
    if(n > 0) {
        if(ct <= 11) {
           ct = ct + 1;
        }
    }else{
        if(ct > 1) {
          ct = ct - 1;
        }
    }
    summoney = money * ct;
    document.getElementById('summoney'+i).value = summoney;
    document.getElementById('totalIP'+i).innerHTML = numComma(summoney) + '원';
    document.getElementById('ctv'+i).innerHTML = ct;
    document.getElementById('ct'+i).value = ct;

    let smoney = document.querySelectorAll('.summoney');
    let scount = document.querySelectorAll('.ct');
    let totalmoney = 0;
    let totalcount = 0;
    for(let i = 0; i < smoney.length; i++){
        totalmoney += parseInt(smoney[i].value);
        totalcount += parseInt(scount[i].value)
    }
    document.getElementById('total-money').innerHTML = numComma(totalmoney) + '원';
    document.getElementById('total-count').innerHTML = '(' + totalcount + '개)';
    
}

 



const changeImg = document.querySelectorAll('.simg');

changeImg.forEach((el) =>{
    el.addEventListener('mouseenter', function(event){
        document.getElementById('bimg').src = event.target.src;
        
    });
});

const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");
const ptIn = document.getElementById('ptIn');

let ps = 0;

btnRight.onclick = function(){
    ps = ptIn.offsetLeft;
    console.log(ps);
    if(ps < 0){
        ps += 50;
        ptIn.style.left = ps + "px";
    }
    
    
}
btnLeft.onclick = function(){
    ps = ptIn.offsetLeft;
    console.log(ps);
    if(ps > -200){
        ps -= 50;
        ptIn.style.left = ps + "px";
    }
    
}


// 스크롤
function scrollUp(e){
    const up = document.querySelectorAll('#up');
    window.scroll({top : 0, left : 0, behavior : 'smooth'});
}
function scrollDown(e){
    const down = document.querySelectorAll('#down');
    
    window.scroll({top : document.body.scrollHeight, left : 0, behavior : 'smooth'})
}



// document.getElementsByClassName('tablinks')[0].click();

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