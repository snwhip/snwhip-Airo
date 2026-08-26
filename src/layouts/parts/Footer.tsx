export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-10 flex items-center justify-between">
        <p
          className="text-xs text-muted-foreground"
          style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
        >
          Scott N. Whipple · Content &amp; Communications
        </p>
        <p
          className="text-xs text-muted-foreground"
          style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
        >
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
