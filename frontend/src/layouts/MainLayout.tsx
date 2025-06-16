import Navbar from "../components/Navbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>

      <footer className="bg-base-200 text-sm py-4 border-t border-base-300">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Expense Tracker. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="/about" className="hover:underline text-gray-600 dark:text-gray-400">
              About
            </a>
            <a href="/terms" className="hover:underline text-gray-600 dark:text-gray-400">
              Terms & Conditions
            </a>
            <a href="/license" className="hover:underline text-gray-600 dark:text-gray-400">
              Licensing
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
