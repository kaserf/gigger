/*
* Author: Felix Kaser <f.kaser@gmx.net>
* (C) 2011 Mayflower GmbH
*/

/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Implement your authentication algorithm here. You can
 * query a database, generate some nice hashes, forward the
 * authentication to another server, check session IDs, ...
 *
 * Just make sure to call callback either with true (if granted)
 * or with false (it not granted). When the authorisation is not
 * granted, you can optionally pass a reason with the callback.
 * Like: callback(false, "wrong password, stupid")
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
function authenticate(auth, callback) {
	if (auth && auth.user === 'test' && auth.password === 'gigger')
		callback(true);
	else
		callback(false, "no auth provided");
}

exports.authenticate = authenticate;
