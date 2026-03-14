export default function EmbedLayout({ children }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .navbar, .mobile-menu, .footer { display: none !important; }
        body { background: #fff; }
      `}} />
      {children}
    </>
  );
}
