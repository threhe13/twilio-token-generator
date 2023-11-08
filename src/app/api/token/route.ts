import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import AccessToken from "twilio";

const accountSid = process.env.TWILIO_ACCOUND_SID;
const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;

const header = {
  typ: "JWT",
  alg: "HS256",
  cty: "twilio-fpa;v=1",
};

export async function GET(request: Request) {
  return new Response("API Status");
}

export async function POST(request: Request) {
  const requestBody = await request.json();

  if (
    apiSecret === undefined ||
    accountSid === undefined ||
    apiKey === undefined
  ) {
    return new NextResponse("[Error] Invalid environment variables", {
      status: 400,
    });
  }

  if (
    requestBody.identity === "" ||
    requestBody.appId === "" ||
    requestBody.pushCredential === ""
  ) {
    return new NextResponse("[Error] Incorrect request options", {
      status: 400,
    });
  }

  const currentTime: number = Math.floor(new Date().getTime() / 1000);
  const expirateTime: number = currentTime + 3600;

  const payload = {
    jti: `${apiKey}-${currentTime}`,
    grants: {
      identity: requestBody.identity,
      voice: {
        incoming: {
          allow: true,
        },
        outgoing: {
          application_sid: requestBody.appId,
        },
        push_credential_sid: requestBody.pushCredential,
      },
    },
    iss: apiKey,
    iat: currentTime,
    exp: expirateTime,
    sub: accountSid,
  };

  const responseBody = sign(payload, apiSecret, {
    header,
  });

  return new NextResponse(JSON.stringify(responseBody), { status: 200 });
}
