"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const reasons = [
  "Commercial project",
  "Radio / podcast appearance",
  "Personalised Santa video",
  "Santa apps enquiry",
  "General enquiry",
];

const MIN_MESSAGE_LENGTH = 25;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessageError("");
    setErrorMessage("");

    if (formData.message.trim().length < MIN_MESSAGE_LENGTH) {
      setMessageError("Please enter at least 25 characters so we have enough detail to help.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", reason: "", message: "", website: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-900 mb-2">
          Message Sent Successfully
        </h3>
        <p className="text-green-700">
          Thank you for your enquiry. Santa Guy will be in touch shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-700 underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const charsRemaining = MIN_MESSAGE_LENGTH - formData.message.trim().length;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-900">
              {errorMessage}
            </p>
            <p className="text-sm text-red-700 mt-1">
              You can also email us directly at{" "}
              <a
                href="mailto:enquiries@voiceoverguy.co.uk"
                className="underline"
              >
                enquiries@voiceoverguy.co.uk
              </a>
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-santa-red/20 focus:border-santa-red transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-santa-red/20 focus:border-santa-red transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1.5">
          Reason for enquiry
        </label>
        <select
          id="reason"
          required
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-santa-red/20 focus:border-santa-red transition-colors bg-white"
        >
          <option value="">Select a reason...</option>
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          minLength={MIN_MESSAGE_LENGTH}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (messageError && e.target.value.trim().length >= MIN_MESSAGE_LENGTH) {
              setMessageError("");
            }
          }}
          className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-santa-red/20 focus:border-santa-red transition-colors resize-none ${
            messageError ? "border-red-300" : "border-gray-200"
          }`}
          placeholder="Tell us about your project or enquiry..."
        />
        <div className="flex justify-between items-center mt-1.5">
          {messageError ? (
            <p className="text-xs text-red-600">{messageError}</p>
          ) : (
            <p className="text-xs text-gray-400">
              {charsRemaining > 0
                ? `${charsRemaining} more character${charsRemaining === 1 ? "" : "s"} needed`
                : ""}
            </p>
          )}
          <p className="text-xs text-gray-400">
            {formData.message.trim().length} / {MIN_MESSAGE_LENGTH} min
          </p>
        </div>
      </div>

      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-8 py-3.5 bg-santa-red text-white font-semibold rounded-lg hover:bg-santa-red-dark transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Send size={16} />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
