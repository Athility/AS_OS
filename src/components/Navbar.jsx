const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-40 w-full px-5 py-6 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-[1680px] items-center justify-between text-sm text-crisp">
        <a href="#home" className="font-medium uppercase leading-none">
          AS_OS
        </a>
        <div className="flex items-center gap-5 sm:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted transition-opacity duration-300 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
