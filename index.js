const promise = require('bluebird');
const jwt     = require('jsonwebtoken');

// change this to make the token expire
const timer = 1000;

const payload = {
    'userId'      : 2,
    'username'    : 'plumpnation',
    'userFullName': 'Gavin King'
};

const SECRET = 'ohsosecret';

const options = {
    'expiresIn': '2s'
};

promise.promisifyAll(jwt);

jwt.signAsync(payload, SECRET, options)
    .tap(() => promise.delay(timer))
    .then((token) => jwt.verifyAsync(token, SECRET))
    .catch(err => console.error(err))
    .done((token) => console.log(token));
