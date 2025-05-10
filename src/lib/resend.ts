"use server";

import { Resend } from "resend";

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
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
    });

    console.log("Email enviado:", data); // <-- log
    return { success: true, data };
  } catch (error) {
    console.error("Error al enviar email:", error); // <-- log
    return { success: false, error };
  }
};
