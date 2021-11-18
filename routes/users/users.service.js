var async = require("async");
var {
    con
} = require('../../model/db/connection');
var Users = require('../../model/schema/user');
var bcrypt = require('bcryptjs');
module.exports = {
    list: () => {
        return new Promise((resolve, reject) => {
            async.parallel([
                (callback) => Users.find(callback)
            ], (error, results) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            })
        })
    },
    add: (data) => {
        return new Promise(async(resolve, reject) => {
            //Encrypt user password
            var encryptedPassword = await bcrypt.hash(data.password, 10);
            const user = new Users({
                username: data.username,
                password: encryptedPassword,
                firstname: data.firstname,
                lastname: data.lastname,
                created: new Date()
            })
            user.save().then(createdUser => {
                return resolve(createdUser);
            });
        })
    }
}