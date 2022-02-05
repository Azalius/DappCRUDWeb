let contract = new web3.eth.Contract(
        userListContractAbi,
         userListContractAdress
      );    
    

document.getElementById('addUserForm').addEventListener('submit', async e => {
    e.preventDefault()
    let accounts = [];
    accounts = await web3.eth.getAccounts()
    newName = document.getElementById("addName").value
    contract.methods.create(newName).send({from:accounts[0]}).then(() =>{
        alert("User added")
    }).catch((e)=>{
        console.log("Couldn't create user : "+e)
    })
})

document.getElementById('getUserForm').addEventListener('submit', async e => {
    e.preventDefault()
    num = document.getElementById("getNum").value
    contract.methods.read(num).call().then((ret) =>{
        console.log(ret)
        alert("User " + ret[0] +" is "+ret[1])
    }).catch((e)=>{
        console.log("Couldn't get user : "+e)
    })
})

document.getElementById('updateUserForm').addEventListener('submit', async e => {
    e.preventDefault()
    let accounts = [];
    accounts = await web3.eth.getAccounts()
    newName = document.getElementById("nameUpdate").value
    newNum = document.getElementById("numUpdate").value
    contract.methods.update(newNum, newName).send({from:accounts[0]}).then(() =>{
        alert("User "+newNum+" updated")
    }).catch((e)=>{
        console.log("Couldn't create user : "+e)
    })
})

document.getElementById('deleteUserForm').addEventListener('submit', async e => {
    e.preventDefault()
    let accounts = [];
    accounts = await web3.eth.getAccounts()
    delNum = document.getElementById("deleteNum").value
    contract.methods.destroy(delNum).send({from:accounts[0]}).then(() =>{
        alert("User " +delNum+ " deleted")
    }).catch((e)=>{
        console.log("Couldn't create user : "+e)
    })
})