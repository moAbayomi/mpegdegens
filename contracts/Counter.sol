// SPDX Licence Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint32 counter;

    function count() public {
        counter++;
        console.log("counter is now", counter);
      
    }

    function getCounter() public view returns (uint32) {
        return counter;
      
    }
}