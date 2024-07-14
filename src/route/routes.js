const express = require("express");
const router = express.Router();
const { validateLoginUser } = require("../middleware/validate.middleware");

const { sendInvoices } = require("../controller/controller")

router.get('/invoices',validateLoginUser, sendInvoices);
  
module.exports = router;

