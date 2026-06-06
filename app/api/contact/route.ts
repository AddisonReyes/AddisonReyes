import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/emailjs";
import { verifyTurnstileToken } from "@/lib/turnstile";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  turnstile_token?: unknown;
};

const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function invalidRequest() {
  return NextResponse.json({ message: "Invalid request." }, { status: 400 });
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return invalidRequest();
  }

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
    return invalidRequest();
  }

  try {
    const verified = await verifyTurnstileToken(turnstileToken);

    if (!verified) {
      return NextResponse.json(
        { message: "Security verification failed." },
        { status: 403 },
      );
    }

    await sendContactEmail({ name, email, message });

    return NextResponse.json({ message: "Message sent." });
  } catch (error) {
    console.error(
      "Contact form submission failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return NextResponse.json(
      { message: "Message could not be sent." },
      { status: 500 },
    );
  }
}
