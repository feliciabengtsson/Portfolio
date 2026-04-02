import { NextResponse } from "next/server";
import { portfolioAssistantInstructions } from "@/lib/portfolioAssistant";

const openAiApiUrl = "https://api.openai.com/v1/responses";
const openAiModel = process.env.OPENAI_MODEL?.trim() || "gpt-5-mini";
const missingApiKeyMessage =
  "AI-assistenten ar inte aktiverad an. Lagg till OPENAI_API_KEY i servermiljon for att sla pa funktionen.";

type ResponseContent = {
  text?: string;
  type?: string;
};

type ResponseOutputItem = {
  content?: ResponseContent[];
  type?: string;
};

type OpenAiResponse = {
  error?: {
    message?: string;
  };
  output?: ResponseOutputItem[];
  output_text?: string;
};

function extractAnswer(data: OpenAiResponse | null) {
  if (!data) {
    return "";
  }

  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  return (
    data.output
      ?.flatMap((item) => item.content ?? [])
      .map((item) => (typeof item.text === "string" ? item.text : ""))
      .join("\n")
      .trim() ?? ""
  );
}

export async function POST(request: Request) {
  let body: { message?: unknown };

  try {
    body = (await request.json()) as { message?: unknown };
  } catch {
    return NextResponse.json(
      { error: "Kunde inte lasa forfragan. Forsok igen." },
      { status: 400 }
    );
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!message) {
    return NextResponse.json(
      { error: "Skriv en fraga till assistenten forst." },
      { status: 400 }
    );
  }

  if (message.length > 700) {
    return NextResponse.json(
      { error: "Fragan ar lite for lang. Prova att korta ner den nagot." },
      { status: 400 }
    );
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { code: "missing_api_key", error: missingApiKeyMessage },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(openAiApiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: openAiModel,
        store: false,
        instructions: portfolioAssistantInstructions,
        input: message,
        max_output_tokens: 260,
      }),
      cache: "no-store",
    });

    const data = (await response.json().catch(() => null)) as OpenAiResponse | null;

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            data?.error?.message ||
            "AI-assistenten kunde inte svara just nu. Forsok igen om en stund.",
        },
        { status: response.status }
      );
    }

    const answer = extractAnswer(data);

    if (!answer) {
      return NextResponse.json(
        { error: "AI-assistenten gav inget svar. Prova en annan fraga." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      answer,
      model: openAiModel,
    });
  } catch {
    return NextResponse.json(
      { error: "Det gick inte att kontakta AI-tjansten just nu. Forsok snart igen." },
      { status: 502 }
    );
  }
}
