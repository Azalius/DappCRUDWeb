const toDeploy = artifacts.require("UserList");
module.exports = function (deployer) {
    deployer.deploy(toDeploy);
};