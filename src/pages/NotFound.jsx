import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-brand-gray">
      <div className="text-center px-4">
        <div className="text-7xl font-display font-bold text-brand-navy">404</div>
        <p className="mt-3 text-slate-600">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
