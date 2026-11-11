import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="pt-[90px] min-h-[70vh] bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-xl py-24">
        <p className="inline-block px-4 py-1.5 rounded-full bg-primary/10 font-mono text-xs tracking-[0.2em] text-primary font-semibold uppercase mb-4">Error 404</p>
        <h1 className="font-serif text-4xl md:text-6xl text-primary mb-6 tracking-tight">Page Not Found</h1>
        <p className="font-sans text-lg text-primary/70 mb-10">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="px-8 py-4 bg-primary text-white rounded-full font-mono text-xs tracking-widest uppercase hover:bg-accent transition-colors flex items-center gap-2">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="px-8 py-4 border border-primary/20 text-primary rounded-full font-mono text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
