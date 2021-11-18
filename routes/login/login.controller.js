var {
    list,
    login
} = require('./login.service');
var Users = require('../../model/schema/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
module.exports = {
    open: async (req, res) => {
        try {
            // const result = await list();
            // console.log(result);
            return res.render('pages/login', {
                title: 'Car list',
                page: 'login',
                data: {}
            });
        } catch (error) {
            console.log(error);
            return res.render('error', error.message);
        }
    },
    login: async (req, res) => {
        try {
            const {
                username,
                password
            } = req.body;
            console.log(username, password);
            const user = await Users.findOne({
                username
            })
            console.log(user, "user");
            if (user && (await bcrypt.compare(password, user.password))) {
                console.log(password);
                var token = jwt.sign({
                        user_id: user._id,
                        username
                    },
                    process.env.TOKEN_KEY, {
                        expiresIn: "2h",
                    }
                );
                user.token = token;
            }
            res.cookie('auth', user);
            return res.redirect('/');
        } catch (error) {
            console.log(error);
            return res.render('index', error.message);
        }
    },
}