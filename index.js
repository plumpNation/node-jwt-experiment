const jwt = require('jsonwebtoken');

const payload = {
    'userId'      : 2,
    'username'    : 'plumpnation',
    'userFullName': 'Gavin King'
};

const SECRET = 'ohsosecret';

const options = {
    'expiresIn': '5s'
};

const token = jwt.sign(payload, SECRET, options);

console.log(token);
