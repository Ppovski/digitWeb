/**
 * Created by Dame on 12/2/2016.
 */
function SpodeliIskustvo(){
    if(document.getElementById("comment").value == '')
    {
        document.getElementById("comment").style.display ="none";

    } else{
        var btn=document.createElement("textarea");
        var txt=document.getElementById("comment").value;
        document.getElementById("comment").value='';
        btn.value=txt;
        document.body.appendChild(btn);
    }

}