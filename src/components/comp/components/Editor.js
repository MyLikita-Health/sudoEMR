import React from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import CKEditor from "ckeditor4-react";

function Editor({ data = [], onChange = (f) => f }) {
  
  return (
    <CKEditor
      // editor={ClassicEditor}
      data={data}
      // config={{ toolbar: 'standard', 
      // extraPlugins: 'font,justify', 
      //         font_defaultLabel: 'Arial', fontSize_defaultLabel : '20' 
      // }}
      // config={{
        //   plugins: [ Alignment ],
        //   plugins: [ Paragraph, Bold, Italic, Essentials ],
        // toolbar: {
        //   items: [
        //     "heading",
        //     "|",
        //     "alignment", // <--- ADDED
        //     "bold",
        //     "italic",
        //     "link",
        //     "bulletedList",
        //     "numberedList",
        //     "imageUpload",
        //     "blockQuote",
        //     "undo",
        //     "redo",
        //   ],
        //   image: {
        //     toolbar: [
        //       "imageStyle:full",
        //       "imageStyle:side",
        //       "|",
        //       "imageTextAlternative",
        //     ],
        //   },
        // },
      // }}

      // ckeditor5 handleChange
      // onChange={(event, editor) => {
      //   const data = editor.getData();
      //   onChange(data);
      //   //   setTemplateForm((p) => ({ ...p, body: data }));
      //   // console.log({ event, editor, data });
      // }}

      //ckeditor4 handleChange
      onChange={(event) => {
        const data = event.editor.getData();
        onChange(data);
        //   setTemplateForm((p) => ({ ...p, body: data }));
        // console.log({ event, editor, data });
      }}
      // onInit={() => setEditorLoading(false)}
      // config={{ toolbar: 'standard' }}
      // readOnly={true}
      type="classic"
      // style={[
      //   {
      //     name: 'Marker: Yellow',
      //     element: 'span',
      //     styles: { 'background-color': 'Yellow' },
      //   },
      // ]}
      // preset='full'
    />
  );
}

export default Editor;
