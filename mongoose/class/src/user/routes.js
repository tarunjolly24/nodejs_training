const router=require('express').Router();

// const require
router.post('/',user.create);
router.get('/',user.getAll);
router.put('/',user.update);
router.delete('/',user.delete);


module.exports=router;