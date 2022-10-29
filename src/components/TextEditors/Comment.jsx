import Editor from 'ckeditor5-custom-build';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import useTextEditor from '../../hooks/useTextEditor.js';

import '../../css/textEditor.css';

const editorConfiguration = {
	toolbar: [ 'Alignment', 'bold', 'italic', 'bulletedList', 'numberedList', 'Link' ]
};

const config = {
	'post_id': 2
}

export function Comment() {
	const { body, handleTextEditorSave, handleTextEditorChange } = useTextEditor();
	
	return (
		<div className="w-full flex flex-col">
			<CKEditor
				editor={ Editor }
				config={ editorConfiguration }
				data={ body }
				onChange={ handleTextEditorChange }
			/>
			<button
				className="self-end px-3 py-2 w-fit bg-gray-800 text-white rounded mt-2"
				onClick={ () => handleTextEditorSave('http://127.0.0.1:8000/api/comments', config) }
			>Comentar</button>
		</div>
	);
}