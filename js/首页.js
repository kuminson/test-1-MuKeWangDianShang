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
    
    //鼠标划出二级菜单隐藏一级菜单、全部二级菜单



});









