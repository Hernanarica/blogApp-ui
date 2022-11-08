import Editor from 'ckeditor5-custom-build';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useEffect, useState } from 'react';
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
	const [ btnActive, setBtnActive ] = useState(false);
	
	useEffect(() => {
		(body.length > 0)
			? setBtnActive(true)
			: setBtnActive(false)
	}, [ body ]);
	
	
	return (
		<div className="w-full flex flex-col">
			<CKEditor
				editor={ Editor }
				config={ editorConfiguration }
				data={ body }
				onChange={ handleTextEditorChange }
			/>
			<button
				disabled={ btnActive }
				className={ `self-end px-3 py-2 w-fit bg-gray-800 text-white rounded mt-2 duration-300 ${ !btnActive ? 'cursor-not-allowed opacity-90' : 'cursor-pointer' }` }
				onClick={ () => handleTextEditorSave('http://127.0.0.1:8000/api/comments', config) }
			>Comentar</button>
		</div>
	);
}