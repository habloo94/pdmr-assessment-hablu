var async = require("async");
var {
    con
} = require('../../model/db/connection');
var Cars = require('../../model/schema/list')

module.exports = {
    list: () => {
        return new Promise((resolve, reject) => {
                    console.log('dd');
            async.parallel([
                (callback) => Cars.find(callback)
            ], (error, results) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            })
        })
    },
    login: (data) => {
        return new Promise((resolve, reject) => {

        })
    }
}