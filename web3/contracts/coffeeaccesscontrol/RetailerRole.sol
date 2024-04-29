// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import the library 'Roles'
import "./Roles.sol";

// Define a contract 'RetailerRole' to manage this role - add, remove, check
contract RetailerRole {
    using Roles for Roles.Role;

    event RetailerAdded(address indexed account);
    event RetailerRemoved(address indexed account);

    Roles.Role private retailers;

    constructor() {
        _addRetailer(msg.sender);
    }

    modifier onlyRetailer() {
        require(isRetailer(msg.sender), "RetailerRole: caller is not a retailer");
        _;
    }

    function isRetailer(address account) public view returns (bool) {
        return retailers.has(account);
    }

    function addRetailer(address account) public onlyRetailer {
        _addRetailer(account);   
    }


    function renounceRetailer() public {
        _removeRetailer(msg.sender);
    }

    // Define an internal function '_addRetailer' to add this role, called by 'addRetailer'
    function _addRetailer(address account) internal {
        retailers.add(account);
        emit RetailerAdded(account);
    }

    // Define an internal function '_removeRetailer' to remove this role, called by 'removeRetailer'
    function _removeRetailer(address account) internal {
        retailers.remove(account);
        emit RetailerRemoved(account);
    }
}
