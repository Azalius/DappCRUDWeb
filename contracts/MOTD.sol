// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MOTD {
    string public motd = "hello";

    function getMotd() external view returns (string memory) {
        return motd;
    }

    // TODO @add ownable / onlyowner decorator
    function updateMessage(string calldata _motd) external {
        motd = _motd;
    }
}
