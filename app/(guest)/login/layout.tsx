export default function GuestLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex flex-col bg-[url('/images/sp_login_bg.png')] bg-cover bg-center bg-color-primary-900 text-white items-center h-screen justify-center gap-4 px-10">
          {children}
      </section>
    );
  }
