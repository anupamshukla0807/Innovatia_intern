exports.requireLogin = (req, res, next) => {
    if(req.session && req.session.user){
    }
    else{
        return res.redirect('/login');
    }
}