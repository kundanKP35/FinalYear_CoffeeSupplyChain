// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import the library 'Roles'
import "./Roles.sol";

// Define a contract 'ConsumerRole' to manage this role - add, remove, check
contract ConsumerRole {
    using Roles for Roles.Role;

    event ConsumerAdded(address indexed account);
    event ConsumerRemoved(address indexed account);

    Roles.Role private consumers;

    constructor() {
        _addConsumer(msg.sender);
    }

    modifier onlyConsumer() {
        require(isConsumer(msg.sender), "ConsumerRole: caller is not a consumer");
        _;
    }

    function isConsumer(address account) public view returns (bool) {
        return consumers.has(account);
    }

    function addConsumer(address account) public onlyConsumer {
        _addConsumer(account);   
    }

    function renounceConsumer() public {
        _removeConsumer(msg.sender);
    }

    function _addConsumer(address account) internal {
        consumers.add(account);
        emit ConsumerAdded(account);
    }

    // Define an internal function '_removeConsumer' to remove this role, called by 'removeConsumer'
    function _removeConsumer(address account) internal {
        consumers.remove(account);
        emit ConsumerRemoved(account);
    }
}
