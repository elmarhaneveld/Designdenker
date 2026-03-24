export default function Footer() {
  return (
    <footer className="px-6 md:px-12 max-w-magazine mx-auto py-8 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Elmar Haneveld. Designdenker.
        </p>
        <p className="text-xs text-muted">
          Design &middot; Systems &middot; Thinking
        </p>
      </div>
    </footer>
  );
}
