const router=require('express').Router();
const usersController=require('./controller');
const {passport}=require('../passportSetup/passport');

router.post('/signup',usersController.create);

router.get('/getall',usersController.getAll);
function isUserLoggedIn(req,res,next){
    
    if(req.user)next();
    else res.redirect('/login');

}
// console.log(req.user);

router.post('/login',passport.authenticate('local',{failureRedirect:'/login',successRedirect:'/'}));
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));



module.exports=router;