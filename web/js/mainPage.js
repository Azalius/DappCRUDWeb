
async function changeMotd(){

    contractMotd = new web3.eth.Contract(
      motdContractAbi,
       motdContractAdress
    );
    let accounts = [];

    accounts = await web3.eth.getAccounts()
    newMotd = prompt('New MOTD')
  
    if (newMotd !== null){
      contractMotd.methods
      .updateMessage(newMotd)
      .send({from: accounts[0]}).then(() => alert("MOTD updated")).catch(()=>{
        console.log("Only owner can update MOTD")
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
