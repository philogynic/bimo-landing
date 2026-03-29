"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SectionShell } from "@/components/ui/SectionShell";
import { Textarea } from "@/components/ui/Textarea";
import type { ContactContent } from "@/src/types/content";

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

interface ContactSectionProps {
  content: ContactContent;
}

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  website: ""
};

export function ContactSection({ content }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please provide a valid email address.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please write a short message.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(content.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          website: form.website,
          subject: "Portfolio Contact"
        })
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SectionShell id="contact" eyebrow="Contact" title="Tell me about your project">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Share your project goals, timelines, and constraints. I will reply with scope, approach,
            and a realistic delivery plan.
          </p>
          <p className="mt-5 text-sm text-ink">
            Prefer email? Reach me at{" "}
            <a
              className="font-semibold underline decoration-line underline-offset-4 hover:decoration-ink"
              href={`mailto:${content.email}`}
            >
              {content.email}
            </a>
          </p>
        </div>

        <form noValidate onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-line bg-panel p-6 sm:p-8">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
              Name
            </label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(event) => onChange("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              placeholder="Your name"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-700">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => onChange("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-700">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(event) => onChange("message", event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Tell me what you are building and what outcome you want."
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-700">
                {errors.message}
              </p>
            )}
          </div>

          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(event) => onChange("website", event.target.value)}
            />
          </div>

          <Button type="submit" className="w-full sm:w-auto">
            {submitting ? "Sending..." : "Send Message"}
          </Button>

          {status === "success" && <p className="text-sm text-green-700">{content.successMessage}</p>}
          {status === "error" && (
            <p className="text-sm text-red-700">Something went wrong. Please try again in a moment.</p>
          )}
        </form>
      </div>
    </SectionShell>
  );
}
