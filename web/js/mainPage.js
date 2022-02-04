
async function changeMotd(){

    contractMotd = new web3.eth.Contract(
      motdContractAbi,
       motdContractAdress
    );
    //console.log(contractMotd)

    //prm = await contractMotd.methods.owner().call()


    newMotd = prompt('New MOTD')
    if (newMotd !== null){
      contractMotd.methods.updateMessage(newMotd).call().then(function () {                
       alert("Motd changed to "+newMotd)  
    })
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

  if (findGetParameter("userList") != null){
    $("#content").load("html/userList.html");
  }
});
