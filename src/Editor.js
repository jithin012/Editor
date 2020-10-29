import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
import { uploadImageCallBack } from './fileUpload';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './editor.css'

class DraftJsEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"

        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
        placeholder={'add here...'}
        spellCheck

        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
          inline: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
            // bold: { icon: bold, className: undefined },
            // italic: { icon: italic, className: undefined },
            // underline: { icon: underline, className: undefined },
            // strikethrough: { icon: strikethrough, className: undefined },
            // monospace: { icon: monospace, className: undefined },
            // superscript: { icon: superscript, className: undefined },
            // subscript: { icon: subscript, className: undefined },
          },

          image: {
            // icon: image,
            className: undefined,
            component: undefined,
            popupClassName: undefined,
            urlEnabled: true,
            uploadEnabled: true,
            alignmentEnabled: true,
            uploadCallback: uploadImageCallBack,
            previewImage: true,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: 'auto',
              width: 'auto',
            },
          },
        }}

      />
    );
  }
}

export default DraftJsEditor;
