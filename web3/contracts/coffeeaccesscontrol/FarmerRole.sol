// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import the library 'Roles'
import "./Roles.sol";

// Define a contract 'FarmerRole' to manage this role - add, remove, check
contract FarmerRole {
    using Roles for Roles.Role;

    event FarmerAdded(address indexed account);
    event FarmerRemoved(address indexed account);

    Roles.Role private farmers;

    constructor() {
        _addFarmer(msg.sender);
    }

    modifier onlyFarmer() {
        require(isFarmer(msg.sender), "FarmerRole: caller is not a farmer");
        _;
    }

    function isFarmer(address account) public view returns (bool) {
        return farmers.has(account);
    }

    function addFarmer(address account) public onlyFarmer {
        _addFarmer(account);   
    }

    function renounceFarmer() public {
        _removeFarmer(msg.sender);
    }

    function _addFarmer(address account) internal {
        farmers.add(account);
        emit FarmerAdded(account);
    }

    // Define an internal function '_removeFarmer' to remove this role, called by 'removeFarmer'
    function _removeFarmer(address account) internal {
        farmers.remove(account);
        emit FarmerRemoved(account);
    }
}
