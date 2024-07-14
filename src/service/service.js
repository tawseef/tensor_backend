
// API to get invoice details (mock data)
app.get('/api/invoices', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send('You need to log in');
  }
  // Example invoice data
  res.json([{ id: 1, amount: 1000, dueDate: '2024-07-31', recipient: 'Customer A' }]);
});

// async function sendInvoiceToZapier(invoice) {
//     const zapierWebhookURL = process.env.ZAPIER_WEBHOOK_URL;
//     try {
//       const response = await axios.post(zapierWebhookURL, invoice);
//       console.log(`Zapier response: ${response.status}`);
//     } catch (error) {
//       console.error(`Error sending data to Zapier: ${error}`);
//     }
//   }
  
  app.get('/api/check-invoices', async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send('You need to log in');
    }
  
    //by checking for a particular condition, like "retrive a list of unpaid invoices, we retrived some invoices records from DB"
    const invoices = [
      { id: 1, amount: 1000, dueDate: '2024-07-31', recipient: 'Customer A' },
      { id: 2, amount: 1500, dueDate: '2024-06-30', recipient: 'Customer B' },
    ];
  
    const now = new Date();
  
    for (const invoice of invoices) {
      const dueDate = new Date(invoice.dueDate);
      //if invoice is unpaid till today's date, then we need to use zapier to send a reminder to the client, so that he can pay us back
      if (dueDate < now) {
        await sendInvoiceToZapier(invoice);
      }
    }
  
    res.send('Checked invoices for past due.');
  });
  

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));