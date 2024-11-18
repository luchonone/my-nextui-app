export default function GuestLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex flex-col bg-[url('/images/sp_login_bg.png')] bg-cover bg-center bg-color-primary-900 text-white items-center justify-center gap-4 py-8 md:py-10">
          {children}
      </section>
    );
  }
