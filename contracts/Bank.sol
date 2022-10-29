// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract Bank {

  mapping (address => uint) private accountBalances;

  function newAccount() public returns (uint) {
    accountBalances[msg.sender] = 0;
    return accountBalances[msg.sender];
  }

  function deposit() public payable returns(uint) {
    accountBalances[msg.sender] += msg.value;
    return accountBalances[msg.sender];
  }

  function withdraw(uint amount) public returns(uint) {
    if (amount <= accountBalances[msg.sender]) {
        accountBalances[msg.sender] -= amount;
        msg.sender.transfer(amount);
    }
    return accountBalances[msg.sender];
  }

  function balance() public view returns(uint) {
    return accountBalances[msg.sender];
  }

}
