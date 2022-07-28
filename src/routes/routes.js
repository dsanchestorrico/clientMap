const router = require('express').Router();

router.get('/',(req,res) =>{
    res.render('index');
});
router.get('/tracker',(req,res) =>{
    res.render('tracker.ejs');
});

module.exports = router;