import {
  parseContactPayload,
  sendContactEmail,
  verifyTurnstileToken,
} from "../_lib/contact";
import type { ContactEnv, ContactPayload } from "../_lib/contact";

type PagesContext = {
  request: Request;
  env: ContactEnv;
};

function jsonResponse(message: string, status = 200) {
  return new Response(JSON.stringify({ message }), {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

function invalidRequest() {
  return jsonResponse("Invalid request.", 400);
}

export async function onRequestPost({ request, env }: PagesContext) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return invalidRequest();
  }

  const contactInput = parseContactPayload(payload);

  if (!contactInput) {
    return invalidRequest();
  }

  try {
    const verified = await verifyTurnstileToken(
      contactInput.turnstileToken,
      env,
    );

    if (!verified) {
      return jsonResponse("Security verification failed.", 403);
    }

    await sendContactEmail(contactInput, env);

    return jsonResponse("Message sent.");
  } catch (error) {
    console.error(
      "Contact form submission failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return jsonResponse("Message could not be sent.", 500);
  }
}
