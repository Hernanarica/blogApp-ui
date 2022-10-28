import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';

import '../css/textEditor.css';

const editorConfiguration = {
	toolbar: [ 'Alignment', 'bold', 'italic', 'bulletedList', 'numberedList', 'Link' ]
};

export function TextEditor() {
	const [ comment, setComment ] = useState();
	
	const onChange = (e, editor) => {
		setComment(editor.getData());
		// console.log(editor.getData());
	}
	
	const saveComment = () => {
		console.log(comment);
	}
	
	return (
		<div className="w-full flex flex-col">
			<CKEditor
				editor={ Editor }
				config={ editorConfiguration }
				data="<p>Hello from CKEditor 5!</p>"
				// onReady={ editor => {
				// 	// You can store the "editor" and use when it is needed.
				// 	console.log( 'Editor is ready to use!', editor );
				// } }
				onChange={ onChange }
				// onBlur={ ( event, editor ) => {
				// 	console.log( 'Blur.', editor );
				// } }
				// onFocus={ ( event, editor ) => {
				// 	console.log( 'Focus.', editor );
				// } }
			/>
			<button className="self-end px-3 py-2 w-fit bg-gray-800 text-white rounded mt-2" onClick={ saveComment }>Comentar</button>
		</div>
	);
}