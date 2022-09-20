const { contract, artifacts } = require("hardhat");
const { expect } = require("chai");
const { parseEther } = require("ethers/lib/utils");

const IPancakeRouter02 = artifacts.require('IPancakeRouter02');
const IPancakeFactory = artifacts.require('IPancakeFactory');
contract("TokenSwap", (accounts) => {
    let pancakeRouter;

    before(async() => {
        pancakeRouter = await new web3.eth.Contract(IPancakeRouter02.abi, '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3');
    });

    it("should show pancake router", async() => {
        // console.log(pancakeRouter);
    });
   // address tokenA,
    //     address tokenB,
    //     uint tokenId,
    //     uint amountBDesired,
    //     uint amountAMin,
    //     uint amountBMin,
    //     address to,
    //     uint deadline
    it("should add liquidity", async() => {
        console.log('account', accounts[0]);
        let txn = await pancakeRouter.methods.addLiquidity(
            // '0xA4E898c252D5aECc3976600444c205ff2233ea3c',
            '0xb77f78f08Ab4AE2EBfb02BA8e046f0aF36Bd3F3b',
            '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
            parseEther('100000'),
            parseEther('0.02'),
            parseEther('1000'),
            parseEther('0.0002'),
            accounts[0],
            parseEther('1919500'),
        ).send({ from: accounts[0] });
        console.log(txn);
    });
});

