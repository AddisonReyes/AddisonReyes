export type ContactEnv = {
  TURNSTILE_SECRET_KEY?: string;
  EMAILJS_SERVICE_ID?: string;
  EMAILJS_TEMPLATE_ID?: string;
  EMAILJS_PUBLIC_KEY?: string;
  EMAILJS_PRIVATE_KEY?: string;
};

export type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  turnstile_token?: unknown;
};

export type ContactInput = {
  name: string;
  email: string;
  message: string;
  turnstileToken: string;
};

type ContactEmailInput = Pick<ContactInput, "name" | "email" | "message">;

type TurnstileVerifyResponse = {
  success?: boolean;
};

const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function readRequiredEnv(env: ContactEnv, name: keyof ContactEnv) {
  const value = env[name];

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

export function parseContactPayload(payload: ContactPayload): ContactInput | null {
  const name = isNonEmptyString(payload.name) ? payload.name.trim() : "";
  const email = isNonEmptyString(payload.email) ? payload.email.trim() : "";
  const message = isNonEmptyString(payload.message)
    ? payload.message.trim()
    : "";
  const turnstileToken = isNonEmptyString(payload.turnstile_token)
    ? payload.turnstile_token
    : "";

  if (
    !name ||
    !email ||
    !EMAIL_PATTERN.test(email) ||
    !message ||
    message.length > MAX_MESSAGE_LENGTH ||
    !turnstileToken
  ) {
    return null;
  }

  return {
    name,
    email,
    message,
    turnstileToken,
  };
}

export async function verifyTurnstileToken(
  token: string,
  env: ContactEnv,
): Promise<boolean> {
  const secretKey = readRequiredEnv(env, "TURNSTILE_SECRET_KEY");

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    },
  );

  if (!response.ok) {
    return false;
  }

  const data = (await response.json()) as TurnstileVerifyResponse;

  return Boolean(data.success);
}

export async function sendContactEmail(
  { name, email, message }: ContactEmailInput,
  env: ContactEnv,
) {
  const serviceId = readRequiredEnv(env, "EMAILJS_SERVICE_ID");
  const templateId = readRequiredEnv(env, "EMAILJS_TEMPLATE_ID");
  const publicKey = readRequiredEnv(env, "EMAILJS_PUBLIC_KEY");
  const privateKey = readRequiredEnv(env, "EMAILJS_PRIVATE_KEY");

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
