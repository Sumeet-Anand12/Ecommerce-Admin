import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const RichTextEditor = ({ label, value, onChange, onBlur, error }) => {
  const editor = useRef(null);
  console.log("ritch")
  return (
    <div className="w-full lg:px-4 mb-4">
      {label && <label className="block mb-1 font-medium">{label}</label>}

      <div className="border-2 rounded-sm">
        <JoditEditor
          ref={editor}
          value={value}
          onBlur={(newContent) => {
            onBlur(); // mark field touched in Formik
            onChange(newContent); // update Formik value
          }}
          config={{
            readonly: false,
            placeholder: 'Write detailed description here...',
            height: 'auto',
            width: '100%',
            toolbarSticky: false,
            toolbarAdaptive: false,
            buttons: [
              'paragraph', 'font', 'fontsize', 'brush', 'bold', 'italic', 'underline', '|',
              'ul', 'ol', '|',
              'outdent', 'indent', '|',
              'left', 'center', 'right', '|',
              'link', 'image', '|',
              'undo', 'redo', '|',
              'hr', 'table', '|',
              'fullsize', 'print'
            ]
          }}
        />
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default React.memo(RichTextEditor);;
