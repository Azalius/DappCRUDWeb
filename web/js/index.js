



async function setupMotd(){
  await $.getJSON(contractPath, function(result) {            
    abi = result.abi                
  });
  contractMotd = new web3.eth.Contract(
    abi,
     contractAdress
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
        document.location.href="dashboard.html"
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




