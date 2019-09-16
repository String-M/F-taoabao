window.addEventListener("load",function () {
    //第一个轮播图
    //1.左右按钮 鼠标经过事件
    var lr=document.querySelector(".promo-opt");
    var focus=document.querySelector(".tbh-promo");
    focus.addEventListener("mouseenter",function () {
        lr.style.display="block";
        clearInterval(timer);
        timer=null;
    })
    focus.addEventListener("mouseleave",function () {
        lr.style.display="none";
        timer=setInterval(function () {
            arrow_r.click();
        },2000)
    })
    //2.动态生成小圆圈
    var ol=focus.querySelector("ol");
    var ul=focus.querySelector("ul");
    var focusWidth=focus.offsetWidth;
    for (var i=0;i<ul.children.length;i++){
            var li=document.createElement("li");

        //a.记录小圆圈索引号,通过自定义属性来做
            li.setAttribute("index",i);



            ol.appendChild(li);
      //3-1.（点击变色）
            li.addEventListener("click",function () {
                for (var i=0;i<ol.children.length;i++){
                    ol.children[i].className="";
                }
                this.className="cricle-current";
      //3-2.点击小圆圈时候 图片也跟着滚动(ul) （1.动画函数；2.父亲需要定位）---ul   ul移动距离(小圆圈的索引号*图片宽度，注意负值)
                //小圆圈的索引号 在创造li的时候 a.记录索引号 b.获得索引号
                var index = this.getAttribute("index");
                //var focusWidth=focus.offsetWidth 放在外面 全局变量

                //当我们点击了某个 ol 的li 就把当前的索引号给num
                num=index;
                circle=index;

                 animate(ul,-index*focusWidth);


            })
    }
    //第一个小圆圈变成白色
    ol.children[0].className="cricle-current";
    //3.小圆圈滚动
    //3-1.（点击变色）
    // for (var i=0;i<ol.children.length;i++){
    //     ol.children[i].addEventListener("click",function () {
    //         for (var i=0;i<ol.children.length;i++){
    //             ol.children[i].className="";
    //         }
    //         this.className="cricle-current";
    //     })
    // }
    //3-2.点击小圆圈时候 图片也跟着滚动
    //4.左右键 切换图片
    //4-1.右键 无缝滚动
    var arrow_r=lr.querySelector(".r-btn");
    var num=0;
    var circle=0;
    //    3).克隆第一张照片
    var first= ul.children[0].cloneNode(true);
    ul.appendChild(first);
    arrow_r.addEventListener("click",function () {
        //1).无缝滚动
        if (num==ul.children.length-1){
            ul.style.left=0;
            num=0;
        }
        //2).滚动
            num++;
            animate(ul,-num*focusWidth);
         // 4)小圆圈跟着动
        // var circle=0;全局变量
        circle++;
        if (circle==ol.children.length){
           circle=0;
        }
        //先清除全部的小圆圈当前cricle-current类名
        for (var i=0;i<ol.children.length;i++){
            ol.children[i].className="";
        }
        //留下当前的小圆圈
        ol.children[circle].className="cricle-current";
    })
    //左侧按钮
    var arrow_l=lr.querySelector(".l-btn");
    arrow_l.addEventListener("click",function () {
        //1).无缝滚动
        if (num==0){
            num=ul.children.length-1;
            ul.style.left=-num*focusWidth+"px";
        }
        //2).滚动
        num--;
        animate(ul,-num*focusWidth);
        // 4)小圆圈跟着动
        // var circle=0;全局变量
        circle--;
        if (circle<0){
            circle=ol.children.length-1;
        }
        //先清除全部的小圆圈当前cricle-current类名
        for (var i=0;i<ol.children.length;i++){
            ol.children[i].className="";
        }
        //留下当前的小圆圈
        ol.children[circle].className="cricle-current";
    })
    //5.自动播放
    var timer=setInterval(function () {
        arrow_r.click();
    },2000)
})