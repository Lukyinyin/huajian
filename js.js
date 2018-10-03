/**
 * Created by L on 2018/9/19.
 */

window.onload = function () {
    function $(id){return document.getElementById(id)}
    //搜索框
    var txt = document.getElementById("txt");
    $("txt").onfocus = function () {
        if(this.value == "输入搜索关键词..."){
            this.value = "";
            this.color = "#A8A8A8";
        }
    }
    $("txt").onblur = function () {
        this.value = "输入搜索关键词...";
    }

   // header 导航栏
    var navUl = $("navUl");
    var navas = navUl.getElementsByTagName("a");
    //console.log(navas);
    for(var i=0;i<navas.length;i++){
        navas[i].onmouseover = function () {
            for(var i=0;i<navas.length;i++){
                navas[i].className ="";
            }
            this.className = "current";
        }
    }

    // news 轮播
    var newsbtns = $("news").getElementsByTagName("button");
    var newsImgs = $("news").getElementsByTagName("img");
    for(var i=0; i<newsbtns.length; i++){
       newsbtns[i].index = i;
        newsbtns[i].onclick = function () {
            for(var j=0; j<newsbtns.length; j++){
                newsbtns[j].className = "";
                newsImgs[j].className = "hide";

            }
            this.className = "current1";
            newsImgs[this.index].className = "show"
        }
    }

    // 小圆点排他
    var spans = $("control").children;
    for(var i=1;i<spans.length-1;i++){
        spans[i].onmouseover = function () {
            for(var i=1;i<spans.length-1;i++){
                spans[i].className = "";
            }
            this.className = "current";
        }
    }




}
