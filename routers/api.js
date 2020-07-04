const { Router } = require('express');
const router = Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const AdminController = require('../controllers');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', AdminController.test);

router.get("/getadmin", AdminController.getAdmin)

router.post("/addadmin", AdminController.addAdmin)

router.put("/updateadmin/:id", AdminController.updateAdmin)

router.delete("/deleteadmin/:id", AdminController.destroy)
module.exports = router;