'use client';

export default function PrintableDocument({ children }) {
  return (
    <div className="printable-document">
      <div className="printable-document-inner">
        {children}
      </div>
    </div>
  );
}
