import "./globals.css";
export const metadata={title:"EDIN OS",description:"Personal performance system",manifest:"/manifest.webmanifest",appleWebApp:{capable:true,statusBarStyle:"black-translucent" as const,title:"EDIN OS"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="sq"><body>{children}</body></html>}