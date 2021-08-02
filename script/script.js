$(function(){

    $("#gnb li").mouseover(function(){
        $("#gnb.submenu"). stop().slideDown(800);
        $("#submenubg"). stop().slideDown(800);
    });

    $("#gnb li").mouseover(function(){
        $("#gnb.submenu").stop().slideUp(300);
        $("#submenubg").stop().slideUp(300);
    });
});