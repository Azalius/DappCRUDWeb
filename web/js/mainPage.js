
function changeMotd(){
  if(1){
    alert("You don't have the right to change the MOTD")
  }else{
    
  }
}

function findGetParameter(parameterName) {
  var result = null,
      tmp = [];
  location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
  return result;
}

window.addEventListener('load', (event) => {
  //parse the url to know what to include
  //$("#includedContent").load("b.html");
});
