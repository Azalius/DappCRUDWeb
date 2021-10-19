let contractAdress = '0x9Bc2dF8dc5Eb26D2cAd08766EC0c60674c0c7ABD';
let contractPath = "contracts/MOTD.json"
let web3ProviderUrl = "http://localhost:7545"

let web3;

try {            
  web3 = new Web3(new Web3.providers.HttpProvider(web3ProviderUrl));
} catch (error) {
  alert(error)
}

