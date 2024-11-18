export default function GuestLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex flex-col bg-color-primary-ligh items-center justify-center gap-4 px-10">
          {children}
      </section>
    );
  }
