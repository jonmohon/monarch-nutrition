/**
 * Masked word reveal — each word rises out of its own clip on load.
 * Server component: pure spans + CSS (`.split-load` keyframes).
 */
export function SplitWords({
  text,
  startDelay = 0,
  italicWords = [],
}: {
  text: string;
  startDelay?: number;
  italicWords?: string[];
}) {
  const words = text.split(" ");
  return (
    <span className="split-load">
      {words.map((word, i) => {
        const clean = word.replace(/[.,!?—]/g, "");
        const italic = italicWords.includes(clean);
        return (
          <span key={i}>
            <span className="split-mask">
              <span
                className={`split-word ${italic ? "italic" : ""}`}
                style={{ animationDelay: `${startDelay + i * 55}ms` }}
              >
                {word}
              </span>
            </span>
            {i < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </span>
  );
}
