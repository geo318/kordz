export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className='text-black bg-white p-20 mx-auto'>{children}</main>
}
