"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Bell } from "lucide-react";

export default function NotifySignup() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setStatus("sending");

    try {
      const res = await fetch("/api/notify-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), website }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6 sm:p-8 text-center">
        <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-white mb-1">You&apos;re on the list!</h3>
        <p className="text-gray-400 text-sm">
          We&apos;ll send you a notification on Christmas Eve when Santa&apos;s journey goes live.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
      <div className="text-center mb-5">
        <Bell className="w-8 h-8 text-santa-gold mx-auto mb-3" />
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
          Notify Me on Christmas Eve
        </h3>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Get a reminder when Santa&apos;s live tracker goes online — straight to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
        {status === "error" && (
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 mb-4">
            <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
            <p className="text-sm text-red-300">{errorMessage}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-santa-red/40 focus:border-santa-red transition-colors"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-6 py-3 bg-santa-red text-white text-sm font-semibold rounded-lg hover:bg-santa-red-dark transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "sending" ? "Subscribing..." : "Notify Me"}
          </button>
        </div>

        <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <p className="text-xs text-gray-500 mt-3 text-center">
          One email on Christmas Eve. No spam, ever.
        </p>
      </form>
    </div>
  );
}
