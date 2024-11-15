const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const resolvers = {
  Mutation: {
    sendEmail: async (_, { input }) => {
      try {
        const { to, subject, text, html } = input;

        const message = {
          to,
          from: 'joselinodiaz25@gmail.com', // Reemplaza con un remitente verificado
          subject,
          text,
          html,
        };

        await sgMail.send(message);
        return {
          success: true,
          message: "Email sent successfully",
        };
      } catch (error) {
        console.error("SendGrid Error:", error.response ? error.response.body : error);
        return {
          success: false,
          message: `Failed to send email: ${error.message}`,
        };
      }
    },
  },
};

module.exports = resolvers;
