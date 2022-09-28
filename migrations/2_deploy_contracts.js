const { time } = require( '@openzeppelin/test-helpers' );

var DankbotsSE = artifacts.require( "DankbotsSE.sol" );

module.exports = function( deployer ) {
	const addresses = web3.eth.getAccounts();
	var res2 = deployer.deploy( DankbotsSE );
}
