import Sidebar  from './sidebar'
 
export default function Layout({ children }) {
  return (
    <div className='grid grid-cols-[240px_1fr]'>
        <Sidebar />
      <main>{children}</main>
    </div>
  )
}