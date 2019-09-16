function animate(obj, target, callback) {
    //清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    //当前的一个定时器执行
    obj.timer=setInterval(function () {
        //步长值 写在定时器的里面
        //获得 步长值 等于 传进来的距离值-当前对象距离父盒子的左边距离 除以10 ；这样可以出现缓慢效果
        var step=(target-obj.offsetLeft)/10;
        //获得的步长值需要的是整数 往大取整--Math.ceil();往小取整--Math.floor();
        step=step>0?Math.ceil(step):Math.floor(step);
        //判断当前对象 距离父盒子的左边距离 是否等于 目标距离
        if (obj.offsetLeft==target){
            //等于 目标距离 就停止定时器
            clearInterval(obj.timer);
            if (callback){
                //调用函数
                callback();
            }
        }
        obj.style.left=obj.offsetLeft+step+"px";
    },15);
}