'use client';

import { useRef } from 'react';

export default function LogoUpload({ logo, onLogoChange }) {
  const inputRef = useRef(null);

  function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
    if (!validTypes.includes(file.type)) return;
    if (file.size > 2 * 1024 * 1024) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      onLogoChange(ev.target.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="logo-upload">
      {logo ? (
        <div className="logo-upload-preview">
          <img src={logo} alt="Company logo" />
          <button type="button" className="logo-upload-remove" onClick={() => onLogoChange(null)}>Remove</button>
        </div>
      ) : (
        <button type="button" className="logo-upload-btn" onClick={() => inputRef.current?.click()}>
          Upload Logo
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/svg+xml,image/webp"
        style={{ display: 'none' }}
        onChange={handleFile}
      />
    </div>
  );
}
