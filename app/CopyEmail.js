'use client';
import { useState } from 'react';

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${email}`; }
  };
  return (
    <button type="button" className={`btn copy ${copied ? 'done' : ''}`} onClick={copy}>
      {copied ? 'Copied! ✓' : `Copy ${email}`}
    </button>
  );
}
