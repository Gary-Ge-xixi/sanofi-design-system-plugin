---
storybook_id: components-fileuploader--docs
title: "Components/FileUploader"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-fileuploader--docs"
import_path: "./src/components/FileUploader/FileUploader.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:07:50.900Z
---

# Source: Components/FileUploader

- Storybook ID: `components-fileuploader--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-fileuploader--docs
- Import path: `./src/components/FileUploader/FileUploader.mdx`
- Capture status: `extracted`

# FileUploader

The FileUploader component enables users to upload files through drag-and-drop or traditional file selection, with support for validation, progress tracking, and file management.

## Overview

The FileUploader provides a comprehensive solution for file uploads in your application with:

- Drag-and-drop support: Users can drag files directly onto the upload area with visual feedback
- Click-to-browse: Traditional file selection via system dialog
- File validation: Automatic validation for file type, size, and count with error feedback
- Drag error detection: Real-time validation during drag-over shows immediate error state for incompatible files
- Progress tracking: Visual feedback with loading spinners and progress percentages
- File management: View, track status, and remove uploaded files
- Multiple file states: Upload in progress, completed, and error states with appropriate visual indicators
- Accessibility: Full keyboard navigation, ARIA labels, and screen reader support
- Responsive design: Works seamlessly on desktop and mobile devices

## Basic Usage

Upload files

Drop file here or click here to upload

Support only PDF, XLSX, JPG, PNG formats and up to 50MB

```
import { FileUploader } from '@sanofi-accelerator/elements';

function MyComponent() {
  return (
    <FileUploader
      label="Upload your documents"
      accept=".pdf,.xlsx,.jpg,.png"
      maxSize={50}
      maxFiles={3}
      multiple
    />
  );
}
```

## File States

The FileUploader displays different states for files:

- Uploading: Shows loading spinner with progress percentage (e.g., "47% of 16.14 MB")
- Uploaded: Shows file icon with file information and delete button
- Error: Shows error icon with error message in red text

## Controlled vs Uncontrolled

The FileUploader can be used as either a controlled or uncontrolled component.

### Uncontrolled (Default)

The component manages its own file state internally:

```
<FileUploader
  label="Upload files"
  onFilesChange={(files) => console.log('Files changed:', files)}
  onFileRemove={(fileId) => console.log('File removed:', fileId)}
/>
```

### Controlled

You manage the file state externally:

```
const [files, setFiles] = useState<UploadedFile[]>([]);

<FileUploader
  label="Upload files"
  files={files}
  onFilesChange={setFiles}
/>
```

Use controlled mode when you need to:

- Track uploaded files in your app state
- Integrate with forms and validation libraries
- Display file information outside the component
- Implement custom upload logic

## Component API

| Name | Description | Default |
| --- | --- | --- |
| id | Unique identifier for the file uploader.string | - |
| label | Label for the file uploaderstring | - |
| accept | Accepted file types (e.g., '.xlsx,.pdf')string | - |
| maxSize | Maximum file size in MBnumber | 50 |
| maxFiles | Maximum number of files allowednumber | 3 |
| multiple | Allow multiple file selectionboolean | false |
| dropZoneHeight | Custom height for the drop zone (e.g., "200px", "12rem")string | "\"10.75rem\" (172px)" |
| files | Currently uploaded files (controlled component)UploadedFile[] | - |
| onFilesChange | Callback when files are added or removed((files: UploadedFile[]) => void) | - |
| onFileRemove | Callback when a file is removed((fileId: string) => void) | - |
| onError | Callback when an error occurs((error: FileUploadError) => void) | - |
| state | Form control state"success""error""default" | default |
| disabled | Whether the component is disabledboolean | false |
| required | Whether the field is requiredboolean | false |
| brandTheme | Brand theme"primary""secondary""tertiary" | primary |
| classNames | Custom class names for different parts of the component{ wrapper?: string; dropZone?: string; fileList?: string \| undefined; } \| undefined | - |
| optionalMessageI18n | The message to translate "Optional" in the language of your choice
When not provided, the "(Optional)" label will be hidden by default
Pass a string value (e.g., "Optional", "Facultatif") to show the optional indicatorstring | - |
| children | Children elements (for compound component pattern)ReactNode | - |

## Validation & Error Handling

The FileUploader provides automatic validation for file type, size, and count:

```
<FileUploader
  accept=".pdf,.xlsx,.jpg,.png"  // or "image/*" for all images
  maxSize={50}                    // in MB
  maxFiles={3}                    // maximum number of files
  onError={(error) => {
    // error.type: 'format' | 'size' | 'count'
    console.error(error.message);
  }}
  onFilesChange={(files) => {
    // Track all file changes
    console.log('Current files:', files);
  }}
  onFileRemove={(fileId) => {
    // Track individual file removals
    console.log('Removed file:', fileId);
  }}
/>
```

Invalid files will show an error message below the drop zone. During drag-over, incompatible files trigger a visual error state to prevent dropping.

## Real Upload Implementation

The FileUploader manages UI state while you handle the upload logic. Use controlled mode to track and update file progress.

### State Management Pattern

```
import { useState } from 'react';
import { FileUploader, UploadedFile, FileUploadStatus } from '@sanofi-accelerator/elements';

function MyUploader() {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const uploadToServer = async (uploadedFile: UploadedFile) => {
    try {
      // Your upload logic here (fetch, axios, XMLHttpRequest, etc.)
      // As upload progresses, update the file's progress:

      setFiles(prevFiles =>
        prevFiles.map(f =>
          f.id === uploadedFile.id
            ? { ...f, progress: 50 } // Update with actual progress
            : f
        )
      );

      // On success:
      setFiles(prevFiles =>
        prevFiles.map(f =>
          f.id === uploadedFile.id
            ? { ...f, status: FileUploadStatus.UPLOADED, progress: 100 }
            : f
        )
      );
    } catch (error) {
      // On error:
      setFiles(prevFiles =>
        prevFiles.map(f =>
          f.id === uploadedFile.id
            ? { ...f, status: FileUploadStatus.ERROR, error: 'Upload failed' }
            : f
        )
      );
    }
  };

  const handleFilesChange = (newFiles: UploadedFile[]) => {
    setFiles(newFiles);

    // Upload newly added files
    newFiles
      .filter(f => f.status === FileUploadStatus.UPLOADING && f.progress === 0)
      .forEach(file => uploadToServer(file));
  };

  return (
    <FileUploader
      label="Upload documents"
      files={files}
      onFilesChange={handleFilesChange}
    />
  );
}
```

Key Points:

- Use controlled mode with files and onFilesChange
- Update progress (0-100) as upload progresses
- Set status: UPLOADED when complete
- Set status: ERROR with error message on failure
- Works with any upload library (fetch, axios, tus, etc.)

## Accessibility

The FileUploader component follows the W3C WAI-ARIA guidelines for file upload patterns.

### Keyboard Interactions

| Key | Description |
| --- | --- |
| Tab | Moves focus to the drop zone |
| Enter / Space | Opens the file selection dialog |

### ARIA Attributes

| Attribute | Description |
| --- | --- |
| role="button" | Identifies the drop zone as an interactive button |
| aria-label | Provides an accessible label for the drop zone |
| aria-describedby | Associates the drop zone with its help text |
| aria-disabled | Indicates when the uploader is disabled |
| role="alert" | Announces error messages to screen readers |
| role="list" | Identifies the file list container |
| role="listitem" | Identifies each file in the list |

## Best Practices

1. Always provide validation: Set accept, maxSize, and maxFiles to guide users
2. Handle errors gracefully: Use onError to provide feedback
3. Show accepted formats: The component automatically displays accepted formats in the drop zone
4. Use controlled mode for forms: Track files externally for form submission
5. Provide labels: Always include a descriptive label prop
6. Test drag-and-drop: The component validates files during drag for better UX
