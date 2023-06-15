fetch('./data/shoplist.json')
    .then((res)=>res.json())
    .then((res)=>{
        const rs = res.shoplist;
        let div = "";

        for(let i = 0; i < rs.length; i++){
            div += `<div class="col-lg-3 my-5 output">`;
            div += `<div class="card">`;
            div += `<a href="#"><img class="img-fluid" src="${rs[i].img}" alt="${rs[i].img}"></a>`;
            div += `<div class="card-body"><ul class="pd-list"><li>`;
            let color = '';
            let news = '';
            for(let c = 0; c < rs[i].color.length; c++){
                color += `<span class="${rs[i].color[c]}"></span>`;
            }
            for(let n = 0; n < rs[i].news.length; n++){
                news += `<span class="${rs[i].news[n]}"></span>`;
            }
            div += color;
            div += `</li><li class="pd-title"><h1>${rs[i].title}</h1>`;
            div += `</li><li><del>${rs[i].delprice}</del><br><strong>${rs[i].saleprice}</strong></li>`;
            div += `<li><p>${rs[i].content}</p></li><li class="last">`;
            div += news+`</li></ul></div></div></div>`;
        }
        document.getElementById('row').innerHTML = div;
    })
    .catch((err) => console.log(err));