// JavaScript Document
$(function(){
    
    //封装显示及隐藏函数
    function shlist(thing1,thing2,motion,con){
        thing1.bind(motion,function(){
            thing2.css("display",con);
        });
    }
    
    
    
    //常用变量
    var list_zero = $("#header_nav_category");
    var list_first = $("#header_aside");
    var list_first_li = $("#header_aside_first li");
    var list_second = $("#header_aside_second");
    var list_second_ol = $("#header_aside_second ol");
    

    
    //鼠标划过一级菜单显示一级菜单
    shlist(list_first,list_first,"mouseover","block");
    shlist(list_first,list_second,"mouseover","block");
    
    for(var i=0; i<list_first_li.length; i++){
        !function(i){
            //鼠标划过一级菜单显示对应的二级菜单
            shlist(list_first_li.eq(i),list_second_ol,"mouseover","none");
            shlist(list_first_li.eq(i),list_second_ol.eq(i),"mouseover","block");
            //鼠标划出一级菜单隐藏对应的二级菜单
            
            //鼠标划过二级菜单显示二级菜单自身
            shlist(list_second_ol.eq(i),list_second_ol.eq(i),"mouseover","block");
            shlist(list_second_ol.eq(i),list_second,"mouseover","block");
        }(i);
    }
    //鼠标划出一级菜单隐藏一级菜单
    shlist(list_first,list_second_ol,"mouseout","none");
    shlist(list_first,list_second,"mouseout","none");
    
    //鼠标划过二级菜单显示一级菜单、二级菜单自身
    shlist(list_second,list_first,"mouseover","block");
    shlist(list_second,list_second,"mouseover","block");
    shlist(list_second_ol,list_first,"mouseover","block");
    
    //变量
    var banner_main = $(".banner_pic a img");
    var banner_box = $(".banner_box a");
    var tit_pic1 = $(".tit_pic1 a img");
    var tit_box1 = $(".tit_box1 a");
    var tit_pic2 = $(".tit_pic2 a img");
    var tit_box2 = $(".tit_box2 a");

    
    //封装自动轮播和手动轮播
    function banner_auto(main,box,top,sta){
        var i=0;
        if(timer){
            clearInterval(timer);
        }
        var timer = setInterval(function(){
            if(main.css("margin-top").slice(0,-2) < top*[box.length-2]+parseInt(sta)){
                i = 0;
                main.css("margin-top",sta);
            }
            else{
                i++;
            }
            main.animate({marginTop:[top*i]+"px"});
            box.removeClass("active");
            box.eq(i).addClass("active");
        },2000);
        
        for(var j=0; j<box.length; j++){
            !function(j){
                box.eq(j).bind("mouseover",function(){
                main.css("margin-top",[top*j]+"px");
                box.removeClass("active");
                box.eq(j).addClass("active");
                i = j;
                });
            }(j);
        }

    }
    
    //banner自动轮播
    banner_auto(banner_main,banner_box,-330,"0px");
    
    
    //侧边栏自动轮播
    banner_auto(tit_pic1,tit_box1,-400,"0px");
    banner_auto(tit_pic2,tit_box2,-400,"0px");



});









