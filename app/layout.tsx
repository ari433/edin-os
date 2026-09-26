import "./globals.css";
export const metadata={title:"ARI × EDINI",description:"October Discipline Challenge",manifest:"/manifest.webmanifest",appleWebApp:{capable:true,statusBarStyle:"black-translucent" as const,title:"ARI × EDINI"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="sq"><body>{children}</body></html>}