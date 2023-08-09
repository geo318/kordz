export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='text-black bg-white p-20 max-w-2xl mx-auto'>{children}</div>
  )
}
