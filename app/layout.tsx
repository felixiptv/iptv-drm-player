import "./globals.css";

export const metadata = {
  title: "IPTV DRM Player",
  description: "Web IPTV Player with DRM support",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.3.5/shaka-player.compiled.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
