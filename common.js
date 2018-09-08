/* 动态换算html fontsize值  */
var winWidth = $(window).width(); // 窗口宽度
if (winWidth < 992) {
    var rem = 20;

    function changeW() {
        rem = 20 / 187.5 * document.documentElement.clientWidth;
        document.documentElement.style.fontSize = rem + "px";
    }

    changeW();
    window.addEventListener("resize", changeW, false);
}

// 获取query属性值
// http://www.helloworld.com?tomcat=123
// getQueryString("tomcat")
function getQueryString (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}