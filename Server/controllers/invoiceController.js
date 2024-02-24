// invoiceController.js

const sendInvoiceToCustomer = async (req, res) => {
    try {
      // Extract required data from the request body
      const { order, cartItems, totalPrice, user, paymentInfo } = req.body;
  
      // Here you would handle the logic to generate and send the invoice
      // This logic can vary based on your application requirements and email service provider
  
      // For simplicity, let's assume you're using Nodemailer to send emails
      const nodemailer = require('nodemailer');
  
      // Create a transporter for sending emails
      const transporter = nodemailer.createTransport({
        host: process.env.HOST,
    port: process.env.EMAIL_PORT,
    service: process.env.SERVICE,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
      });
  
      // Construct the email message
      const mailOptions = {
        from: process.env.USER,
        to: user.email, // Assuming user has an email property
        subject: 'Your Invoice',
        html: `<p>Dear ${user.firstName},</p>
               <p>Thank you for your order. Here is your invoice:</p>
               <p>Product Name: ${order.orderItems}</p>
               <p>Total Price: ${order.totalPrice}</p>
               <p>Payment Info: ${JSON.stringify(order.paymentInfo.status)}</p>
               <p>We appreciate your business!</p>`,
      };
  
      // Send the email
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.error('Error sending invoice:', error);
          return res.status(500).json({ success: false, error: 'Error sending invoice' });
        } else {
          console.log('Invoice sent:', info.response);
          return res.status(200).json({ success: true, message: 'Invoice sent successfully' });
        }
      });
    } catch (error) {
      console.error('Error sending invoice:', error);
      return res.status(500).json({ success: false, error: 'Internal server error' });
    }
  };
  
  module.exports = { sendInvoiceToCustomer };
  