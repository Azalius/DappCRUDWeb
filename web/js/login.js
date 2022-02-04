
async function setupMotd(){
  
  contractMotd = new web3.eth.Contract(
    motdContractAbi,
     motdContractAdress
  );
  motd = contractMotd.methods.getMotd().call().then(function (result) {                
    $('#motdField').html(result);
  })
}

function requestWalletConnect(){
  if (window.ethereum) {
    try {
      // ask user permission to access his accounts
      window.ethereum.request({ method: "eth_requestAccounts" }).then(function(res){
        document.location.href="mainPage.html"
      });
    } catch (error) {
      console.log(error)
    }
  
  }else{
    alert("Metamask requiered")
  }  
}


setupMotd()
document.getElementById('signInBtn').onclick = requestWalletConnect




