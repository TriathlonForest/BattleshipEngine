var expect = require('chai').expect;

//test suite
describe('checkForShip', function () {
    var checkForShip = require('../game_logic/ship_methods').checkForShip;

    //test spec
    it('should correctly report no ship at a given player\'s coordinate', function () {

        player = {
            ships: [
                {
                    locations: [[0,0]]
                }
            ]
        };

        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    //test spec
    it('should correctly report a ship located at the given coordinate', function () {

        player = {
            ships: [
                {
                    locations: [[0,0]]
                }
            ]
        };

        expect(checkForShip(player, [0, 0])).to.be.true;
    });
});