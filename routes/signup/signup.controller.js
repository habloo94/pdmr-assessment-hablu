var {
    list
} = require('./signup.service')

module.exports = {
    open : async (req, res) => {
        try {
            // const result = await list();
            // console.log(result);
            return res.render('pages/signup',{title: 'Car list',page:"signup"});
        } catch (error) {
            console.log(error);
            res.render('pages/error', {
                title: 'Used Car List',
                page: 'home',
                error: error.message
            });
        }
    }
}