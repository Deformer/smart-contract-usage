pragma solidity ^0.4.19;
contract Cars {
    struct CarInformation {
        bytes16 number;
        bytes16 description;
    }

    mapping (bytes16 => CarInformation) cars;
    uint carsAmount = 0;

    function setCar(bytes16 _number, bytes16 _description) public {
        var car = cars[_number];
        car.number = _number;
        car.description = _description;

        carsAmount += 1;
    }

    function getCarsAmount() public constant returns(uint) {
        return carsAmount;
    }
}
