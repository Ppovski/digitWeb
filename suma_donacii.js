/**
 * Created by Dame on 11/30/2016.
 */


function showSum()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "testing.txt", true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            var allText = rawFile.responseText;
            document.getElementById("textSection").innerHTML = allText;
        }
    }

    rawFile.send();
}
function getSum()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "testing.txt", true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            var allText = rawFile.responseText;
            return allText;
        }
    }

}
function init() {
    if(getCookie('sum')==''){
        setCookie('sum',0,50);
    }
    document.getElementById("textSection").innerHTML= getCookie('sum');
}
function addSum()
{
    var n = document.getElementById('zemi').value;
    var sum = getCookie('sum');
    //eval(sum+n);
    sum = eval(sum) +eval(n);
    setCookie('sum',sum,50);
    init();
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
function getSumCookie()
{

            var allText = getCookie('sum');
            return allText;


}
function changeDOM1() {
    var btn = document.createElement("textarea");
    var txt = document.getElementById("comment").value;
    document.getElementById("comment").value = '';
    btn.value = txt;

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}