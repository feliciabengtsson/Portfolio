"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Textarea } from "@/components/ui/Textarea";

const suggestedQuestions = [
  "Vilket projekt visar bast min UX-styrka?",
  "Hur skulle du sammanfatta mig for en rekryterare?",
  "Vilket case study ar mest relevant for frontendjobb?",
];

export default function PortfolioAssistant() {
  const [question, setQuestion] = useState("");
  const [lastQuestion, setLastQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function askAssistant(nextQuestion: string) {
    const trimmedQuestion = nextQuestion.trim();

    if (!trimmedQuestion) {
      setError("Skriv en fraga for att fa ett svar.");
      return;
    }

    setIsLoading(true);
    setAnswer("");
    setError("");
    setLastQuestion(trimmedQuestion);

    try {
      const response = await fetch("/api/portfolio-assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedQuestion,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        answer?: string;
        error?: string;
      } | null;

      if (!response.ok) {
        setError(
          data?.error ||
            "Det gick inte att fa svar fran AI-assistenten just nu.",
        );
        return;
      }

      setAnswer(data?.answer?.trim() || "");
    } catch {
      setError("Natverket svarade inte. Prova igen om en liten stund.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await askAssistant(question);
  }

  async function handleSuggestedQuestion(nextQuestion: string) {
    setQuestion(nextQuestion);
    await askAssistant(nextQuestion);
  }

  return (
    <section id="ai" className="py-24">
      <div className="container px-6">
        <Card className="overflow-hidden border-white/60 bg-white/80 shadow-(--glow-shadow) backdrop-blur-sm">
          <CardContent className="grid gap-8 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-secondary/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary shadow-(--soft-shadow)">
                <Sparkles className="h-4 w-4" />
                Portfolio-assistent
              </div>

              <div className="max-w-xl">
                <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                  Fraga AI om mig, projekten eller hur jag jobbar.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Den har delen svarar utifran innehallet i portfolion och gor
                  det latt att snabbt fa en sammanfattning av styrkor, case
                  studies och arbetsprocess.
                </p>
              </div>

              <div className="space-y-3">
                {suggestedQuestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void handleSuggestedQuestion(suggestion)}
                    disabled={isLoading}
                    className="flex w-full items-center justify-between rounded-3xl border border-border/70 bg-secondary/35 px-5 py-4 text-left text-sm font-medium text-foreground transition-colors hover:border-primary/25 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span>{suggestion}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                  </button>
                ))}
              </div>

              <div className="rounded-[28px] border border-border/70 bg-linear-to-br from-white via-white to-secondary/45 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                  Bra att veta
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Assistenten bygger bara pa innehall som redan finns i sajten
                  och ar tankt som en snabb guide, inte som en generell chatbot.
                </p>
              </div>
            </div>

            <div className="rounded-4xl border border-white/60 bg-linear-to-br from-white via-white/90 to-secondary/45 p-6 shadow-(--soft-shadow)">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="portfolio-question"
                    className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80"
                  >
                    Din fraga
                  </label>
                  <Textarea
                    id="portfolio-question"
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                    placeholder="Till exempel: Vilket projekt visar bast min formaga att kombinera UX och frontend?"
                    className="mt-3 min-h-32 rounded-3xl border-border/70 bg-white/85 px-4 py-4 text-base shadow-none"
                    disabled={isLoading}
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted-foreground">
                    Svaren ar korta och bygger pa portfolioinnehall.
                  </p>

                  <Button
                    type="submit"
                    size="lg"
                    className="shadow-(--glow-shadow)"
                    disabled={isLoading}
                  >
                    {isLoading ? "Tanker..." : "Fraga assistenten"}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </form>

              <div className="mt-6 rounded-[28px] border border-border/70 bg-white/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                  Svar
                </p>

                {lastQuestion ? (
                  <p className="mt-3 text-sm font-medium text-foreground">
                    {lastQuestion}
                  </p>
                ) : null}

                {error ? (
                  <p className="mt-4 rounded-[20px] border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm leading-relaxed text-destructive">
                    {error}
                  </p>
                ) : answer ? (
                  <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                    {answer}
                  </p>
                ) : (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Stall en fraga eller tryck pa ett forslag sa visar
                    assistenten ett snabbt svar baserat pa portfolion.
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
