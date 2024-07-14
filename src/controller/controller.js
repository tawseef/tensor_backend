const { sendFromZapier } = require("../service/service1.js");
const httpStatus = require("http-status");

const sendInvoices = async (req, res) => {
  try {
    const { invoiceDetail } = req.body;
    const response = await sendFromZapier(invoiceDetail);
    if (response) res.status(httpStatus.OK).json(response);
    else
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Error" });
  } catch (e) {
    res
      .status(httpStatus.BAD_REQUEST)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = { sendInvoices };
