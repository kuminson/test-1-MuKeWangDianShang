// JavaScript Document
$(function(){
    //分类菜单鼠标划过显示
    $("#header_nav_category").bind("mouseover",function(){
        $("header aside").css("display","block");
    });
    //分类菜单鼠标划过隐藏
    $("#header_nav_category").bind("mouseout",function(){
        $("header aside").css("display","none");
    });
    //一级菜单鼠标划过显示
    $("#header_aside_first").bind("mouseover",function(){
        $("header aside").css("display","block");
    });
    //一级菜单鼠标划过隐藏
    $("#header_aside_first").bind("mouseout",function(){
        $("header aside").css("display","none");
    });
    //二级菜单鼠标划过显示
    $("#header_aside_second").bind("mouseover",function(){
        $("header aside").css("display","block");
    });
    //二级菜单鼠标划过隐藏
    $("#header_aside_second").bind("mouseout",function(){
        $("header aside").css("display","none");
    });
    
    //一级菜单鼠标划过显示隐藏二级菜单
    var list_first = $("#header_aside_first li");
    var list_second = $("#header_aside_second ol");
    for(var i=0; i<list_first.length; i++){
        !function(i){
            list_first.eq(i).bind("mouseover",function(){
                $("#header_aside_second").css("display","block");
                list_second.css("display","none");
                list_second.eq(i).css("display","block");
            });
        }(i);
    }
    
    
    
    
 });




































