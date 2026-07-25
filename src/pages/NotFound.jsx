import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-28">
      <p className="section-eyebrow justify-center mb-4">Page Not Found</p>
      <h1 className="text-4xl text-maroon-900 font-semibold mb-4">404</h1>
      <p className="text-ink/70 mb-8 max-w-md">
        The page you are looking for could not be found.
      </p>
      <Link to="/" className="btn-primary">Return Home</Link>
    </div>
  );
}
