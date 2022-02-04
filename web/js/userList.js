window.addEventListener('load', (event) => {
    contract = new web3.eth.Contract(
        userListContractAbi,
         userListContractAdress
      );    


}