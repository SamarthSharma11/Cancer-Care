import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "cccf.cancer@gmail.com";

interface ContactEmailParams {
  fullName: string;
  email: string;
  phone?: string;
  enquiryType: string;
  message: string;
}

interface VolunteerEmailParams {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  role: string;
  skills?: string;
  availability: string;
}

function getTransporter() {
  const user =
    process.env.GMAIL_USER ||
    process.env.SMTP_USER ||
    process.env.EMAIL_USER ||
    RECIPIENT_EMAIL;

  const rawPass =
    process.env.GMAIL_APP_PASSWORD ||
    process.env.SMTP_PASS ||
    process.env.EMAIL_PASS ||
    process.env.EMAIL_SERVER_PASSWORD;

  if (!rawPass) {
    return null;
  }

  // Remove any whitespace (Google displays app passwords in 4x4 blocks like "abcd efgh ijkl mnop")
  const pass = rawPass.replace(/\s+/g, "").trim();

  // If a custom SMTP server is specified, use host and port
  if (process.env.SMTP_HOST) {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE !== "false";
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: user.trim(),
        pass,
      },
    });
  }

  // Built-in Gmail transport (handles SSL, STARTTLS, and Google's exact requirements)
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user.trim(),
      pass,
    },
  });
}

/**
 * Send Contact Form Submission to cccf.cancer@gmail.com
 */
export async function sendContactEmail(params: ContactEmailParams) {
  const { fullName, email, phone, enquiryType, message } = params;
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const transporter = getTransporter();

  const textContent = `
NEW CONTACT ENQUIRY - CANCER CARE & CURE FOUNDATION
--------------------------------------------------
Date & Time: ${timestamp} IST

Full Name:    ${fullName}
Email:        ${email}
Phone:        ${phone || "Not provided"}
Enquiry Type: ${enquiryType}

Message:
${message}
--------------------------------------------------
To reply directly to the sender, click Reply in your email client.
`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1E2A33; background-color: #F8FAFC; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #D5DDE3; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
    .header { background: #004F8C; color: #ffffff; padding: 24px 30px; text-align: left; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #C5D8E6; }
    .body { padding: 30px; }
    .badge { display: inline-block; padding: 4px 12px; font-size: 12px; font-weight: 700; text-transform: uppercase; border-radius: 9999px; background: #E8F1F7; color: #004F8C; margin-bottom: 20px; }
    .field-group { margin-bottom: 16px; border-bottom: 1px solid #EDF2F7; padding-bottom: 12px; }
    .field-group:last-child { border-bottom: none; }
    .label { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #4F5B66; letter-spacing: 0.5px; }
    .value { font-size: 16px; color: #0A2F52; font-weight: 600; margin-top: 3px; }
    .value a { color: #004F8C; text-decoration: none; }
    .message-box { background: #F8FAFC; border-left: 4px solid #004F8C; padding: 16px; border-radius: 4px; font-size: 15px; color: #1E2A33; white-space: pre-wrap; margin-top: 6px; }
    .footer { background: #EDF2F7; padding: 16px 30px; font-size: 12px; color: #4F5B66; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Cancer Care & Cure Foundation</h1>
      <p>New Website Contact Form Submission</p>
    </div>
    <div class="body">
      <span class="badge">Enquiry: ${enquiryType}</span>
      
      <div class="field-group">
        <div class="label">Full Name</div>
        <div class="value">${fullName}</div>
      </div>

      <div class="field-group">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>

      <div class="field-group">
        <div class="label">Phone Number</div>
        <div class="value">${phone ? `<a href="tel:${phone}">${phone}</a>` : "Not provided"}</div>
      </div>

      <div class="field-group">
        <div class="label">Submitted On</div>
        <div class="value" style="font-size: 14px; font-weight: normal; color: #4F5B66;">${timestamp} IST</div>
      </div>

      <div class="field-group">
        <div class="label">Message</div>
        <div class="message-box">${message}</div>
      </div>
    </div>
    <div class="footer">
      This message was sent via the Contact Form on <strong>Cancer Care & Cure Foundation</strong> website.<br>
      You can reply directly to this email to contact <strong>${fullName}</strong>.
    </div>
  </div>
</body>
</html>
`;

  if (!transporter) {
    console.warn(
      "[Email Service] Live SMTP credentials not found in environment variables.\n" +
      "To receive live emails directly in cccf.cancer@gmail.com, set GMAIL_APP_PASSWORD in your .env.local or Vercel Environment Variables.\n" +
      "Contact Submission Details:",
      { fullName, email, phone, enquiryType, timestamp }
    );
    return { success: true, simulated: true };
  }

  const fromEmail = process.env.GMAIL_USER || process.env.EMAIL_USER || RECIPIENT_EMAIL;

  const info = await transporter.sendMail({
    from: `"CCCF Website Contact" <${fromEmail}>`,
    to: RECIPIENT_EMAIL,
    replyTo: `"${fullName}" <${email}>`,
    subject: `[Website Enquiry] ${enquiryType.toUpperCase()} - ${fullName}`,
    text: textContent,
    html: htmlContent,
  });

  return { success: true, messageId: info.messageId };
}

/**
 * Send Volunteer Application to cccf.cancer@gmail.com
 */
export async function sendVolunteerEmail(params: VolunteerEmailParams) {
  const { fullName, email, phone, city, role, skills, availability } = params;
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const transporter = getTransporter();

  const textContent = `
NEW VOLUNTEER APPLICATION - CANCER CARE & CURE FOUNDATION
--------------------------------------------------------
Date & Time: ${timestamp} IST

Full Name:            ${fullName}
Email:                ${email}
Phone:                ${phone}
City / Location:      ${city}
Preferred Area/Role:  ${role}
Availability:         ${availability}

Skills & Background:
${skills || "Not provided"}
--------------------------------------------------------
To reply directly to the applicant, click Reply in your email client.
`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1E2A33; background-color: #F8FAFC; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #BAC9D6; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
    .header { background: #004F8C; color: #ffffff; padding: 24px 30px; text-align: left; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #C5D8E6; }
    .body { padding: 30px; }
    .badge { display: inline-block; padding: 4px 12px; font-size: 12px; font-weight: 700; text-transform: uppercase; border-radius: 9999px; background: #E8F1F7; color: #2F7A1B; margin-bottom: 20px; }
    .field-group { margin-bottom: 16px; border-bottom: 1px solid #EDF2F7; padding-bottom: 12px; }
    .field-group:last-child { border-bottom: none; }
    .label { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #4F5B66; letter-spacing: 0.5px; }
    .value { font-size: 16px; color: #0A2F52; font-weight: 600; margin-top: 3px; }
    .value a { color: #004F8C; text-decoration: none; }
    .skills-box { background: #F8FAFC; border-left: 4px solid #2F7A1B; padding: 16px; border-radius: 4px; font-size: 15px; color: #1E2A33; white-space: pre-wrap; margin-top: 6px; }
    .footer { background: #EDF2F7; padding: 16px 30px; font-size: 12px; color: #4F5B66; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Cancer Care & Cure Foundation</h1>
      <p>New Volunteer Application</p>
    </div>
    <div class="body">
      <span class="badge">Role: ${role}</span>
      
      <div class="field-group">
        <div class="label">Full Name</div>
        <div class="value">${fullName}</div>
      </div>

      <div class="field-group">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>

      <div class="field-group">
        <div class="label">Phone Number</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>

      <div class="field-group">
        <div class="label">City / Location</div>
        <div class="value">${city}</div>
      </div>

      <div class="field-group">
        <div class="label">Preferred Role / Area</div>
        <div class="value">${role}</div>
      </div>

      <div class="field-group">
        <div class="label">Availability</div>
        <div class="value">${availability}</div>
      </div>

      <div class="field-group">
        <div class="label">Submitted On</div>
        <div class="value" style="font-size: 14px; font-weight: normal; color: #4F5B66;">${timestamp} IST</div>
      </div>

      <div class="field-group">
        <div class="label">Skills, Experience & Background</div>
        <div class="skills-box">${skills || "Not provided"}</div>
      </div>
    </div>
    <div class="footer">
      This application was sent via the Volunteer Form on <strong>Cancer Care & Cure Foundation</strong> website.<br>
      You can reply directly to this email to reach <strong>${fullName}</strong>.
    </div>
  </div>
</body>
</html>
`;

  if (!transporter) {
    console.warn(
      "[Email Service] Live SMTP credentials not found in environment variables.\n" +
      "To receive live emails directly in cccf.cancer@gmail.com, set GMAIL_APP_PASSWORD in your .env.local or Vercel Environment Variables.\n" +
      "Volunteer Application Details:",
      { fullName, email, phone, city, role, timestamp }
    );
    return { success: true, simulated: true };
  }

  const fromEmail = process.env.GMAIL_USER || process.env.EMAIL_USER || RECIPIENT_EMAIL;

  const info = await transporter.sendMail({
    from: `"CCCF Volunteer Hub" <${fromEmail}>`,
    to: RECIPIENT_EMAIL,
    replyTo: `"${fullName}" <${email}>`,
    subject: `[Volunteer Application] ${role.toUpperCase()} - ${fullName} (${city})`,
    text: textContent,
    html: htmlContent,
  });

  return { success: true, messageId: info.messageId };
}

