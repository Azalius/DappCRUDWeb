const { assert } = require("console");

const UserList = artifacts.require('UserList');

contract('UserList', () => {
  let userList = null;
  before(async () => {
    userList = await UserList.deployed();
  });

  it('Should create a new user', async () => {
    await userList.create('Paul');
    const user = await userList.read(1);
    assert(user[0].toNumber() === 1);
    assert(user[1] === 'Paul');
  });

  it('Should update an existing user', async () => {
    await userList.update(1, 'Paull');
    const user = await userList.read(1);
    assert(user[0].toNumber() === 1);
    assert(user[1] === 'Paull');
  });

  it('Should NOT update a non-existing user', async () => {
    try {
      await userList.update(2, 'Paull');
    } catch(e) {
      assert(e.message.includes('User does not exist'));
      return;
    }
    assert(false);
  });

  it('Should destroy an existing user', async () => {
    await userList.destroy(1);
    try {
      const user = await userList.read(1);
    } catch(e) {
      assert(e.message.includes('User does not exist!'));
      return;
    }
    assert(false);
  });

  it('Should NOT destroy a non-existing user', async () => {
    try {
      await userList.destroy(10);
    } catch(e) {
      assert(e.message.includes('User does not exist'));
      return;
    }
    assert(false);
  });

  
});