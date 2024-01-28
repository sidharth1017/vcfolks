const router = require('express').Router();
const ReportsController = require('./Controllers/report-controller');

router.post('/api/upload-report', ReportsController.upload);
router.get('/api/get-all-report', ReportsController.getAllReport);


module.exports = router;