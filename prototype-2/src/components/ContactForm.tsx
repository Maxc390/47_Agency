"use client";

import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  return (
    <form
      action="#"
      method="post"
      className="space-y-6"
      onSubmit={async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);
        setMessage(null);
        const form = e.currentTarget as HTMLFormElement & {
          name: { value: string };
          email: { value: string };
          project: { value: string };
        };
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: form.name.value,
              email: form.email.value,
              project: form.project.value,
            }),
          });
          if (!res.ok) throw new Error("Failed");
          form.reset();
          setMessage("Thanks! We'll be in touch shortly.");
        } catch {
          setMessage("Something went wrong. Please try again later.");
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white"
        />
      </div>

      <div>
        <label htmlFor="project" className="block text-sm font-medium mb-2">
          Project Details
        </label>
        <textarea
          id="project"
          name="project"
          rows={6}
          placeholder="Tell us about your project"
          required
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white py-3 font-medium text-black uppercase transition duration-200 hover:bg-neutral-200 disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      {message && (
        <p className="mt-3 text-sm text-center text-gray-300">{message}</p>
      )}
    </form>
  );
}


