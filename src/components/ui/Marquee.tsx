type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-10">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-sm tracking-wide text-mist-500 whitespace-nowrap"
          >
            {item}
            <span className="ml-10 text-terracotta-500">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
