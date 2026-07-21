"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * HIPAA-conscious by design (handoff p.4): name, email, phone ONLY.
 * No free-text field — an open field invites PHI. Honeypot + min-submit-time
 * for spam. Clinical intake happens in Katie's EMR, never here.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const startedAt = useRef<number | null>(null);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"), // honeypot
          elapsed: Date.now() - (startedAt.current ?? Date.now()),
        }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body.error ?? "Something went wrong — please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-warm-white border border-border-soft rounded-[14px] p-8 text-center"
      >
        <p className="font-display font-[560] text-[22px] text-brown mb-2">Sent.</p>
        <p className="text-[15.5px]">
          Katie will reach out by phone or email to talk through what you&rsquo;re looking for,
          verify insurance benefits, and get scheduling started in her secure client portal.
        </p>
      </div>
    );
  }

  const field =
    "w-full px-4 py-3.5 text-base bg-cream border border-border-strong rounded-[10px] text-brown focus:outline-2 focus:outline-brown focus:outline-offset-1";

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <div className="mb-4">
        <label htmlFor="cf-name" className="block text-sm font-semibold text-brown mb-1.5">
          Name
        </label>
        <input id="cf-name" name="name" type="text" required maxLength={100} autoComplete="name" className={field} />
      </div>
      <div className="mb-4">
        <label htmlFor="cf-email" className="block text-sm font-semibold text-brown mb-1.5">
          Email
        </label>
        <input id="cf-email" name="email" type="email" required maxLength={254} autoComplete="email" className={field} />
      </div>
      <div className="mb-5">
        <label htmlFor="cf-phone" className="block text-sm font-semibold text-brown mb-1.5">
          Phone
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          required
          maxLength={20}
          autoComplete="tel"
          className={field}
        />
      </div>
      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" && (
        <p role="alert" className="mb-4 text-[14px] font-semibold text-error">
          Error: {errorMsg}
        </p>
      )}
      <button type="submit" disabled={status === "sending"} className="btn btn-orange w-full">
        {status === "sending" ? "Sending…" : "Send to Katie"}
      </button>
      <p className="mt-3.5 text-[13px] text-muted text-center">
        Katie replies by phone or email — usually within a few business days.
      </p>
    </form>
  );
}
