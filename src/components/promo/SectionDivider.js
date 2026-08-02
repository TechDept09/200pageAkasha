// Soft gold hairline divider with a small centered ornament dot.
// Used between major section groups to give the page a meditative
// breathing rhythm instead of hard section abut. Purely decorative
// (aria-hidden). Palette locked to akasha-gold; no size overrides.

export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center gap-3 py-8 md:py-10 bg-akasha-white"
    >
      <span className="block h-px w-14 bg-akasha-gold/40" />
      <span className="block w-1.5 h-1.5 rounded-full bg-akasha-gold/70" />
      <span className="block h-px w-14 bg-akasha-gold/40" />
    </div>
  );
}
