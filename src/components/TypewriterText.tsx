import { useEffect, useState } from "react";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
}

export function TypewriterText({
  texts,
  className = "",
  typingSpeed = 42,
  pauseDuration = 2800,
}: TypewriterTextProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const currentText = texts[lineIndex] ?? "";

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (texts.length === 0) return;

    if (prefersReducedMotion) {
      setDisplayed(texts[0]);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    if (displayed.length === currentText.length && currentText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed("");
        setLineIndex((prev) => (prev + 1) % texts.length);
      }, pauseDuration);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [
    displayed,
    currentText,
    lineIndex,
    texts,
    typingSpeed,
    pauseDuration,
    prefersReducedMotion,
  ]);

  if (texts.length === 0) return null;

  return (
    <span className={className}>
      <span aria-live="polite" aria-label={currentText}>
        {displayed}
      </span>
      {!prefersReducedMotion && (
        <span
          className="inline-block w-[2px] h-[0.85em] bg-accent ml-1 align-[-0.1em] animate-pulse"
          aria-hidden
        />
      )}
    </span>
  );
}
