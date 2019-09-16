window.addEventListener("load",function () {
        var lis=document.querySelector(".SearchTab").querySelectorAll("li");
        var xb=document.querySelector(".Search-xb");
        var xj=document.querySelector(".Search-input").querySelector(".zp");
        var ss=document.querySelector(".Search-btn");
        var foc=document.querySelector(".sc-input");
        for (var i=0;i<lis.length;i++){
            lis[i].addEventListener("click",function () {
                for (var i=0;i<lis.length;i++){
                    lis[i].className="";

                }
                this.className="st";
                //隐藏xb
                if (this.innerHTML=="天猫"){
                    xb.style.display="none";
                    ss.style.backgroundImage="linear-gradient(to right,#ff5000 100%,#ff5000 100%)";

                }else{
                    xb.style.display="block";
                    ss.style.backgroundImage="linear-gradient(to right,#ff9000 0,#ff5000 100%)";

                }
                //隐藏相机
                if (this.innerHTML=="宝贝"){
                    xj.style.display="block";
                    foc.placeholder="连衣裙女秋长袖";
                }else{
                    xj.style.display="none";
                    foc.placeholder="";
                }
                //初始值
                //搜索背景
            })
        }
        var Search_border=document.querySelector(".Search-border");
        Search_border.addEventListener("click",function () {
            foc.focus();
        })

       //二维码删除
        var QR=document.querySelector(".top-wrap").querySelector(".box");
        var close_gb=document.querySelector(".top-wrap").querySelector(".close-gb");
        close_gb.addEventListener("click",function () {
            QR.style.display="none";
        })
      //经过事件
       var shortcut_site=document.querySelector(".shortcut-site");
       var ghost=document.querySelector(".ghost");
       shortcut_site.addEventListener("mouseover",function () {
           ghost.style.display="block";
           shortcut_site.style.backgroundColor="#fff";
       })
       shortcut_site.addEventListener("mouseout",function () {
        ghost.style.display="none";
       })
        var ul=ghost.querySelector("ul");
       for (var i=0;i<ul.children.length;i++){
           ul.children[i].addEventListener("mouseenter",function () {
               for (var i=0;i<ul.children.length;i++){
                   ul.children[i].style.backgroundColor="#fff";
               }
               this.style.backgroundColor="#ededed";
           })
       }
     var img=document.querySelector(".conve").querySelectorAll("span");
     for (var i=0;i<img.length;i++){
        var index=i*44
        img[i].style.backgroundPosition="0 -"+index+"px "
     }



    var service=document.querySelector(".service").querySelector("ul");

    for (var i=0;i<service.children.length;i++){
        service.children[i].addEventListener("mouseenter",function () {

            for (var i=0;i<service.children.length;i++){
                service.children[i].style.backgroundColor="#fff";
            }
            this.style.backgroundColor="#ededed";
            this.style.color="#f40";

        })
        service.children[i].addEventListener("mouseleave",function () {

            for (var i=0;i<service.children.length;i++){
                service.children[i].style.backgroundColor="#fff";
            }
            this.style.backgroundColor="#fff";
            this.style.color="#020202";
        })
    }














})