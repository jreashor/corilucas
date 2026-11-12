"use client";

import { useState, type FormEvent } from "react";

const FORM_NAME = "contact";

const topics = [
  { value: "general", label: "General question" },
  { value: "booking", label: "Booking or appointment" },
  { value: "testimonial", label: "Share a testimonial" },
  { value: "other", label: "Something else" },
] as const;

type Topic = (typeof topics)[number]["value"];
type Status = "idle" | "pending" | "ok" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground " +
  "placeholder:text-warm-gray focus:outline-none focus:ring-2 focus:ring-sage focus:border-sage";
const labelClass = "block text-sm font-medium text-sage-dark mb-1.5";

export default function ContactForm() {
  const [topic, setTopic] = useState<Topic>("general");
  const [status, setStatus] = useState<Status>("idle");
  const [sentTopic, setSentTopic] = useState<Topic>("general");

  const isTestimonial = topic === "testimonial";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const body = new URLSearchParams();
    data.forEach((value, key) => {
      body.append(key, typeof value === "string" ? value : value.name);
    });

    setStatus("pending");
    try {
      // Netlify Forms: POST url-encoded data to the static file that declares the form.
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      setSentTopic(topic);
      setStatus("ok");
      form.reset();
      setTopic("general");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div
        role="status"
        className="bg-background rounded-2xl p-8 border border-border text-center"
      >
        <h3 className="text-xl font-medium mb-2">Thank you!</h3>
        <p className="text-foreground/70 leading-relaxed">
          {sentTopic === "testimonial"
            ? "Your testimonial has been received. Cori reviews every submission personally before anything is published."
            : "Your message has been sent. Cori will get back to you by email as soon as she can."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sage-dark underline underline-offset-4 hover:text-sage"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      onSubmit={handleSubmit}
      className="bg-background rounded-2xl p-8 border border-border flex flex-col gap-6"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Honeypot: hidden from people, bots tend to fill it in. */}
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out if you&apos;re human:
          <input name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-topic" className={labelClass}>
          What is this about?
        </label>
        <select
          id="contact-topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value as Topic)}
          className={inputClass}
        >
          {topics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {isTestimonial && (
        <div
          className="rounded-xl bg-sage-light border border-sage/30 p-5 flex flex-col gap-4"
          aria-live="polite"
        >
          <p className="text-sm text-foreground/75 leading-relaxed">
            Thank you for sharing your experience. Testimonials submitted here{" "}
            <strong className="font-medium text-foreground">
              may be published on corilucas.ca
            </strong>
            . Cori reviews every submission before anything appears on the site, and you can
            ask for it to be edited or removed at any time by sending a message through this
            form.
          </p>

          <div>
            <label htmlFor="contact-credit" className={labelClass}>
              If published, how should you be credited?
            </label>
            <select id="contact-credit" name="credit-as" className={inputClass} defaultValue="first-name">
              <option value="first-name">First name only</option>
              <option value="full-name">Full name</option>
              <option value="initials">Initials</option>
              <option value="anonymous">Anonymous</option>
            </select>
          </div>

          <label className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed cursor-pointer">
            <input
              name="publish-consent"
              type="checkbox"
              value="yes"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-sage"
            />
            <span>
              I understand this testimonial may be published on corilucas.ca and I consent to it
              being shared publicly.
            </span>
          </label>
        </div>
      )}

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          {isTestimonial ? "Your testimonial" : "Message"}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          placeholder={
            isTestimonial
              ? "What brought you to acupuncture, and how has your experience with Cori been?"
              : undefined
          }
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          Sorry, something went wrong and your message wasn&apos;t sent. Please try again in a
          moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "pending"}
        className="self-start bg-sage text-white font-medium px-8 py-3 rounded-full hover:bg-sage-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "pending" ? "Sending…" : isTestimonial ? "Submit Testimonial" : "Send Message"}
      </button>
    </form>
  );
}
