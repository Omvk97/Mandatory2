var Bank = artifacts.require("../contracts/Bank.sol");

module.exports = function(deployer) {
    deployer.deploy(Bank);
  };