import localFont from "next/font/local";
import "./globals.css";
import Scroll from "@/components/Scroll";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/Cursor";

export const metadata = {
    title: "Beda",
    description: "honouring every intersection, powering every journey",
};

const radeny = localFont({
    src: "./fonts/radeny.ttf",
    variable: "--font-radeny",
    weight: "100 900",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${radeny.className} antialiased custom-cursor p-0 m-0 cursor-none`}
            >
                {children}
                <Scroll />
                <Footer />
                <CustomCursor />
            </body>
        </html>
    );
}
