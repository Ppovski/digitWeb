

/**
 * Created by Dame on 11/30/2016.
 */


/*var suma=[];*/
function Sum(){
    var  N=0;
    var total=0;
    for(var i=0;i <= N;i++){
        total +=1;
    }
    return function () {
        return    total +=document.getElementById("comment").value
    }
}
var temp = Sum();

function MyFunction(){
    document.getElementById('paragraph1').innerHTML=temp();

}
