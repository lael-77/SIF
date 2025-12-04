import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-display text-8xl font-bold gradient-text mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            This page hasn't been engineered yet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="hero">
              <Link to="/">
                <Home size={18} />
                Return Home
              </Link>
            </Button>
            <Button asChild variant="glass">
              <Link to="/programs">
                <ArrowLeft size={18} />
                Explore Programs
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
