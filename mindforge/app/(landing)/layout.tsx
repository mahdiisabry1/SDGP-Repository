import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header />
      {/* Main content area */}
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      {/* Footer area */}
      <Footer />
    </div>
  );
};

export default LandingLayout;
