const Bank = artifacts.require("Bank");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Bank", function (accounts) {
  const homer = accounts[1];

  it("should add account with initial balance of zero", async () => {
    const bank = await Bank.deployed();
    
    const balance = await bank.newAccount.call();
    assert.equal(balance.valueOf(), 0, "initial balance is zero");
  });

  it("should deposit into the account balance", async () => {
      const bank = await Bank.deployed();

      const depositAmount = 1;
      
      const balance = await bank.deposit({value: depositAmount})
      assert.equal(balance.valueOf(), 1, "balance after deposit is 1");
  });

  it("should deposit and withdraw same amount from the account balance, remaining balance is therefore 0", async () => {
      const bank = await Bank.deployed();

      const depositWithdraw = 1;

      const balanceAfterDeposit = await bank.deposit({value: depositWithdraw});
      const balanceAfterWithdraw = await bank.withdraw.call(depositWithdraw);
      assert.equal(balanceAfterDeposit.valueOf() - balanceAfterWithdraw.valueOf(), 0, "balance after deposit and withdrawing is 0");
  });
});
