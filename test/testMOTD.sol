pragma solidity >=0.5.0;

import "truffle/Assert.sol";
import "../contracts/MOTD.sol";

contract TestBackground {

    MOTD public motd;

    // Run before every test function
    function beforeEach() public {
        motd = new MOTD();
    }

    // Test that it stores a value correctly
    function testChangeMotd() public {
        string memory message = "testMotd";
        motd.updateMessage(message);
        Assert.equal(message, motd.getMotd(), "Should give back the right value");
    }

    function testOnlyOwnerChangeMotd() public {
        address newOwner = address(uint160(uint(keccak256(abi.encodePacked(blockhash(block.number))))));
        motd.transferOwnership(newOwner);
        try motd.updateMessage("Doesnt work") {
            Assert.isFalse(true, "Only the owner can change the MOTD");
        } catch {} 
    }
 
}