const router=require('express').Router();
const item=require('../controllers/controller');
router.get('/',item.getAll);
router.post('/',item.addItem)
router.patch('/item/:id',item.update)
router.delete('/item/:id',item.delete)


module.exports=router;