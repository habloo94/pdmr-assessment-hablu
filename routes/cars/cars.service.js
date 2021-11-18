var async = require("async");
var {
    con
} = require('../../model/db/connection');
var List = require('../../model/schema/list')

module.exports = {
    list: () => {
        return new Promise((resolve, reject) => {
            async.parallel([
                (callback) => List.find(callback)
            ], (error, results) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            })
        })
    },
    add: (data) => {
return new Promise((resolve, reject) => {
    const car = new List({
        model: data.model,
        year: data.year,
        colour: data.colour,
        mileage: data.mileage,
        created: new Date()
    })
    car.save().then(createdPost => {
        return resolve(createdPost);
    });
})
    }
}