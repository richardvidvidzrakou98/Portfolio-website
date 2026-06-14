import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load configuration keys securely
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser for JSON transactions
  app.use(express.json());

  // API endpoint for SMTP transmission
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        status: "error", 
        message: "All fields are required to authenticate submission." 
      });
    }

    const host = process.env.SMTP_HOST || "";
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const user = process.env.SMTP_USER || "";
    const pass = process.env.SMTP_PASS || "";

    // If SMTP credentials are not yet supplied, we gracefully run in simulation mode.
    // This allows the preview and build of the client to succeed elegantly without throwing server exceptions.
    if (!host || !user || !pass) {
      console.warn("SMTP credentials absent in active env. Simulating submission transaction.");
      return res.json({ 
        status: "ok", 
        simulated: true, 
        message: "Email successfully piped in mock sandbox." 
      });
    }

    try {
      // Configure Hostinger SMTP transport securely
      const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: port === 465, // SSL configuration
        auth: {
          user: user,
          pass: pass,
        },
      });

      // Prepare target transmission to portfolio owner
      const mailOptions = {
        from: `"${name}" <${user}>`, // Hostinger SMTP typically requires sending from authenticated user address
        replyTo: email,
        to: "richardvidzrakou98@gmail.com", // Directed to the user email from metadata
        subject: `[Portfolio Collaboration] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 24px; background-color: #faf9fd; color: #1a1b1e; max-width: 600px; border: 1px solid #e1e2e6; border-radius: 8px;">
            <h2 style="font-size: 20px; color: #1B365D; border-bottom: 1px solid #e1e2e6; padding-bottom: 12px; margin-top: 0;">Portfolio Inquiry Received</h2>
            <p style="font-size: 14px; margin: 16px 0;"><strong>Sender Name:</strong> ${name}</p>
            <p style="font-size: 14px; margin: 16px 0;"><strong>Reply Address:</strong> <a href="mailto:${email}" style="color: #1B365D;">${email}</a></p>
            <p style="font-size: 14px; margin: 16px 0;"><strong>Subject:</strong> ${subject}</p>
            <div style="background-color: #ffffff; padding: 16px; border: 1px solid #e1e2e6; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #333333; margin-top: 24px; white-space: pre-wrap;">${message}</div>
            <div style="font-size: 10px; color: #9c9ea0; font-family: monospace; border-top: 1px solid #e1e2e6; padding-top: 12px; margin-top: 24px;">STABLE PIPELINE API // HOSTINGER INTEGRATION</div>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log(`SMTP Transmission succeeded for sender ${email}`);
      return res.json({ status: "ok", message: "Email transmitted successfully." });

    } catch (err: any) {
      console.error("Hostinger SMTP Failure:", err);
      return res.status(500).json({ 
        status: "error", 
        message: "Failed to dispatch message over active SMTP. Contact host support.",
        details: err.message 
      });
    }
  });

  // Vite development routing & middleware configurations
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware registered.");
  } else {
    // Serve static files in production environment from build output
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static production assets from /dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Host server securely booted and listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
