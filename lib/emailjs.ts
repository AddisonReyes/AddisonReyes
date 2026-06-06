type ContactEmailInput = {
  name: string;
  email: string;
  message: string;
};

function readRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

export async function sendContactEmail({
  name,
  email,
  message,
}: ContactEmailInput) {
  const serviceId = readRequiredEnv("EMAILJS_SERVICE_ID");
  const templateId = readRequiredEnv("EMAILJS_TEMPLATE_ID");
  const publicKey = readRequiredEnv("EMAILJS_PUBLIC_KEY");
  const privateKey = readRequiredEnv("EMAILJS_PRIVATE_KEY");

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: {
        user_name: name,
        user_email: email,
        reply_to: email,
        name,
        email,
        message,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`EmailJS request failed with status ${response.status}`);
  }
}
