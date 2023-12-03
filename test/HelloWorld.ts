import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", function () {
  it("should say hi", async function () {
    // setup env
    // deploy our contract
    //3. call our functions to test

    //2. now

    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();
    await hello.deployed();

    expect(await hello.hello()).to.equal("Hello, World");
  });
});
