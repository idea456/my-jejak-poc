// In Next.js, this file would be called: app/layout.jsx
import { PropsWithChildren } from "react";
import Providers from "./providers";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang='en'>
            <head />
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
