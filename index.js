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

console.info('token created');
console.log(token);

setTimeout(function () {
    verifyJWT(payload, SECRET)
        .then((jwt) => {
            console.log(jwt);
        })
        .catch(err => console.error(err));
}, 3000);

function verifyJWT(payload, SECRET) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET, (err, jwt) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(jwt);
        })
    });
}
