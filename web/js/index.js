let contractAdress = '0x9Bc2dF8dc5Eb26D2cAd08766EC0c60674c0c7ABD';
let contractPath = "contracts/MOTD.json"
let web3ProviderUrl = "http://localhost:7545"

let web3;

try {            
  web3 = new Web3(new Web3.providers.HttpProvider(web3ProviderUrl));
} catch (error) {
  alert(error)
}



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
        //TODO
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




