import { contact } from "../data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-700 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
        <div>
          <span className="font-display text-sm font-semibold text-mist-100">
            Cauan Lima
          </span>
          <p className="mt-1 font-mono text-xs text-mist-500">
            Dados, BI & produtos · {contact.location}
          </p>
        </div>

        <div className="flex items-center gap-6">
          {contact.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="font-mono text-xs uppercase tracking-wider text-mist-500 transition-colors hover:text-terracotta-400"
            >
              {social.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-mist-500">© {year} Cauan Lima</p>
      </div>
    </footer>
  );
}
