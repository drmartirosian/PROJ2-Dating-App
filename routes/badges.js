var router = require('express').Router();
var badgesCtrl = require('../controllers/badges');

router.get('/:id/badge', isLoggedIn, badgesCtrl.showBadge);
router.post('/new', isLoggedIn, badgesCtrl.createBadge);

router.put('/:id', isLoggedIn, badgesCtrl.updateBadge);
router.get('/:id/badge', isLoggedIn, badgesCtrl.editBadge)
router.delete('/:id', isLoggedIn, badgesCtrl.delete);

// LOGGED IN REQUIRED FEATURES
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
};

module.exports = router; 