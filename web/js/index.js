let web3;
let contractAdress = '0x9Bc2dF8dc5Eb26D2cAd08766EC0c60674c0c7ABD';




try {            
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
} catch (error) {
  alert(error)
}



async function setupMotd(){
  await $.getJSON("contracts/MOTD.json", function(result) {            
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

setupMotd()

async function requestWalletConnect(){
  if (window.ethereum != null) {
    state.web3 = new Web3(window.ethereum)
    try {
      // Request account access if needed
      await window.ethereum.enable()
      // Acccounts now exposed
    } catch (error) {
      // User denied account access...
    }
  }  
}





