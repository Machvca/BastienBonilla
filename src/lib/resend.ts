"use server";

import { Resend } from "resend";

console.log("🔑 RESEND_API_KEY:", process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailData = {
  email: string;
  subject: string;
  message: string;
};

export const sendEmail = async ({ email, subject, message }: EmailData) => {
  try {
    const data = await resend.emails.send({
      to: "jjorgemachuca@gmail.com",
      from: "onboarding@resend.dev", // Usa este
      subject,
      html: `<h2><strong>Subject:</strong> ${subject}</h2><h2><strong>From:</strong> ${email}</h2><p>${message}</p>`,
    });

    console.log("Email enviado:", data); // <-- log
    return { success: true, data };
  } catch (error) {
    console.error("Error al enviar email:", error); // <-- log
    return { success: false, error };
  }
};
