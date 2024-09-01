import type { Metadata } from "next";
import "./globals.css";
import { MainNav } from "@/components/navbar";
import Footer1 from "@/components/footer";
import ScrollToTopButton from "@/components/scrolltopbutton";

export const metadata: Metadata = {
  title: "rupesh Hospital",
  description: "Technology Customised",
  // icons: {
  //   icon: "/logo1.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const styling = {
    backgroundImage: `url('/bgimage1.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Ensure background stays fixed
  };

  return (
    <html lang="en">
      <body
        style={styling}
        className="container flex flex-col min-h-screen gap-10 text-neutral-50 w-full"
      >
        <MainNav />
        <main className="flex-1 w-full">
          <div className="w-full p-6 border border-gray-100 rounded-lg shadow text-black font-sans bg-transparent">
            {children}
            <ScrollToTopButton />
          </div>
        </main>
        <footer className="w-full">
          <Footer1 />
        </footer>
      </body>
    </html>
  );
}
