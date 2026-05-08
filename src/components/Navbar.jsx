const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-40 w-full bg-obsidian/60 backdrop-blur-md border-b border-divider/30 px-5 py-6 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-[1680px] items-center justify-between text-crisp">
        <a href="#home" className="text-lg font-bold tracking-wider uppercase leading-none transition-opacity duration-300 hover:opacity-70">
          AS_OS
        </a>
        <div className="flex items-center gap-6 sm:gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold uppercase tracking-wide text-muted transition-colors duration-300 hover:text-crisp"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
