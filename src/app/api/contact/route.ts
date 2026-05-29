import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${nombre} (vía web)" <${process.env.SMTP_USER}>`,
      replyTo: `"${nombre}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Nueva consulta web - ${nombre}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #01021d;">Nueva consulta desde metalurgicalobato.com.ar</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #4a4f6a;"><strong>Nombre:</strong></td><td>${nombre}</td></tr>
            <tr><td style="padding: 8px 0; color: #4a4f6a;"><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #4a4f6a;"><strong>Teléfono:</strong></td><td>${
              telefono || "No especificado"
            }</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f8f9fc; border-radius: 8px;">
            <p style="color: #4a4f6a;"><strong>Mensaje:</strong></p>
            <p style="color: #01021d;">${mensaje.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
