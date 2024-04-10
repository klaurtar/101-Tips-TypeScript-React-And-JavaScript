import React, { useRef, forwardRef } from 'react';

interface HiddenFileInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Hidden file input component with ref forwarded to ImageUploader!
const HiddenFileInput = forwardRef<HTMLInputElement, HiddenFileInputProps>(
  ({ onChange }, ref) => {
    return (
      <input
        type="file"
        style={{ display: 'none' }}
        ref={ref}
        onChange={onChange}
      />
    );
  }
);

const ImageUploader: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Function to trigger click on hidden file input using ref passed to HiddenFileInput!
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      console.log('File selected:', event.target.files[0]);
      // Process the file here
    }
  };

  return (
    <div>
      <img
        src="https://via.placeholder.com/150" // Placeholder image URL
        alt="Click to upload"
        style={{ cursor: 'pointer' }}
        onClick={handleClick}
      />
      <HiddenFileInput ref={fileInputRef} onChange={handleFileChange} />
    </div>
  );
};

export default ImageUploader;
