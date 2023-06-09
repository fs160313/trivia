import { Button } from "@chakra-ui/react";

interface FileUploadButtonProps {
  onChange: (file: File) => void;
  label: string;
}

export const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  onChange,
  label,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <Button as="label" htmlFor="fileInput" cursor="pointer">
      {label}
      <input
        id="fileInput"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </Button>
  );
};
