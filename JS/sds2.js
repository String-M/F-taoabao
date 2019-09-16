window.addEventListener("load",function () {
    //1.左右按钮，鼠标经过事件
    var focus=document.querySelector(".tbh-tmall");
    var rl=document.querySelector(".lbt2-opt");
    focus.addEventListener("mouseenter",function () {
        rl.style.display="block";
        clearInterval(timer);
        timer=null;
    })
    focus.addEventListener("mouseleave",function () {
        rl.style.display="none";
        timer=setInterval(function () {
            arrow_r.click();
        },3200)
    })
    //2.动态生成 彩色条的数量；
    var cline=focus.querySelector("ul");
    var ol=focus.querySelector("ol");
    var numer=Math.floor((ol.children.length)/2);
    var sz=document.querySelector(".inner").querySelector("i");
    sz.innerHTML=1+"/"+numer;
    var focusWidth=focus.offsetWidth;
    var num=0;
    var nim=1;
    var ind=0;
    for (var i=0;i<numer;i++){
            var li=document.createElement("li");
            cline.appendChild(li);
            li.style.width=520/numer+"px";
            li.setAttribute("index",i+1);
            var cl=cline.children[i].addEventListener("click",function () {
                for (var i=0;i<numer;i++){
                    cline.children[i].className="";
                }
                this.className="line-nav-ys";
                var index=this.getAttribute("index");
                num=index;

                sz.innerHTML=index+"/"+numer;
                animate(ol,-(index-1)*focusWidth);
            })
    }
    cline.children[0].className="line-nav-ys";
    //3.点击左右按钮，图片滚动
    //3-1.点击右按钮
    var arrow_r=rl.querySelector(".lbt2-r-btn");
    var first=ol.children[0].cloneNode(true);
    var two=ol.children[1].cloneNode(true);
    ol.appendChild(first);
    ol.appendChild(two);
    arrow_r.addEventListener("click",function () {
//本身
        if (num==numer){
            num=0;
            ol.style.left=0;
        }
        num++;
        animate(ol,-num*focusWidth);
//数字
        if (nim==numer){
            nim=0;
        }
        nim++;
        sz.innerHTML=nim+"/"+numer;
//彩条
        for (var i=0;i<numer;i++){
            cline.children[i].className="";
        }
        ind++
        if (ind==numer){
            ind=0;
        }
        cline.children[ind].className="line-nav-ys";
    })
    //左键
    var arrow_l=rl.querySelector(".lbt2-l-btn");
    arrow_l.addEventListener("click",function () {
//本身
        if (num==0){
            num=numer;
            ol.style.left=-num*focusWidth+"px";
        }

        num--;
        animate(ol,-num*focusWidth);
//数字
        if (nim==1){
            nim=numer+1;
        }
        nim--;
        sz.innerHTML=nim+"/"+numer;
//彩条
        for (var i=0;i<numer;i++){
            cline.children[i].className="";
        }
        if (ind==0){
            ind=numer;
        }
        ind--
        cline.children[ind].className="line-nav-ys";

    })
    //5.自动播放
    var timer=setInterval(function () {
        arrow_r.click();
    },3200)

})