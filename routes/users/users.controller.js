var {
    list,add
} = require('./users.service')
var jwt = require('jsonwebtoken');
module.exports = {
    list : async (req, res) => {
        try {
            const result = await list();
            console.log(result);

            return res.render('pages/home',{title: 'Car list',data:result});
        } catch (error) {
            console.log(error);
            return res.render('index', error.message);
        }
    }, add: async (req, res) => {
        try {
            const data = req.body; 
            const result = await add(data);

            const user = result
            const token = jwt.sign({
                    user_id: user._id,
                    username: user.username
                },
                process.env.TOKEN_KEY, {
                    expiresIn: "2h",
                }
            );
            user.token = token
            res.cookie('auth', user);
            return res.redirect('/');
        } catch (error) {
            console.log(error);
            return res.render('index', error.message);
        }
    },
}