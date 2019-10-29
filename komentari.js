/**
 * Created by Dame on 11/30/2016.
 */
function changeDOM1(){
    var btn=document.createElement("textarea");
    var txt=document.getElementById("comment").value;
    document.getElementById("comment").value='';
    btn.value=txt;
    document.body.appendChild(btn);
}