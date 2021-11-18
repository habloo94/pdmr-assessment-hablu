var {
    list,add
} = require('./cars.service')

module.exports = {
    list : async (req, res) => {
        try {
            const result = await list();
            return res.render('pages/home',{title: 'Car list',data:result});
        } catch (error) {
            console.log(error);
            return res.render('index', error.message);
        }
    },
    add: async (req, res) => {
        try {
            console.log('sss');
            const data = req.body;
            const result = await add(data);
            // console.log(result);
            return res.redirect('/');
            // return res.render('pages/home', {
            //     title: 'Car list',
            //     data: result
            // });
        } catch (error) {
            console.log(error);
            return res.render('index', error.message);
        }
    },
}