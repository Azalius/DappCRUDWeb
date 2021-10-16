const MOTD = artifacts.require("MOTD");
module.exports = function (deployer) {
    deployer.deploy(MOTD);
};