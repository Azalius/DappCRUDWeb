// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MOTD is Ownable{
    string public motd = "hello";

    function getMotd() external view returns (string memory) {
        return motd;
    }

    function updateMessage(string calldata _motd) external onlyOwner {
        motd = _motd;
    }
}
