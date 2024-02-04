import Sidebar from './sidebar'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {

  return (
    <div className={`grid grid-cols-[240px_1fr] ${inter.className}`}>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}