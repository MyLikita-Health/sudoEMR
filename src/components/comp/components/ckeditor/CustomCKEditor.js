import React from "react";
import { CKEditor } from "ckeditor4-react";

export default function CustomCKEditor({ data = "", onChange = (f) => f }) {
  // CKEditor.addCss('body{background:blue;}')
  return (
    <div>
      <CKEditor
        config={{
          toolbar: "standard",
          extraPlugins:
            "font,justify,pagebreak,pastefromword,exportpdf,divarea,pastefromlibreoffice,pastefromword,liststyle,dialogadvtab,image,print,templates,save,uploadimage,uploadwidget,widget,lineutils,tabletools",
          //forms,dialog,dialogui,preview,
          font_defaultLabel: "Arial",
          fontSize_defaultLabel: "20",
        }} //base64image
        type="classic"
        data={data}
        initData={data}
        onChange={(event) => {
          const _data = event.editor.getData();
          onChange(_data);
          //   setTemplateForm((p) => ({ ...p, body: data }));
          // console.log({ event, editor, data });
        }}
      />
    </div>
  );
}
