let contract = new web3.eth.Contract(
        userListContractAbi,
         userListContractAdress
      );    
    

document.getElementById('addUserForm').addEventListener('submit', async e => {
    e.preventDefault()
    let accounts = [];
    accounts = await web3.eth.getAccounts()
    newName = document.getElementById("fieldName").value
    contract.methods.create(newName).send({from:accounts[0]}).then(() =>{
        alert("User added")
    }).catch((e)=>{
        console.log("Couldn't create user : "+e)
    })
})