import Editor from 'ckeditor5-custom-build';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useEffect, useState } from 'react';
import useTextEditor from '../../hooks/useTextEditor.js';

import '../../css/textEditor.css';

const editorConfiguration = {
	toolbar: [
		'fontSize',
		'fontColor',
		'fontFamily',
		'alignment',
		'bold',
		'italic',
		'underline',
		'link',
		'bulletedList',
		'numberedList',
		'outdent',
		'indent',
		// 'imageUpload',
		'imageInsert',
		'blockQuote',
		'mediaEmbed',
		'undo',
		'redo',
		'code',
		'codeBlock',
	],
	// image: {
	// 	upload: {
	// 		types: [ 'png', 'jpg', 'webp', 'gif', 'jpeg' ]
	// 	}
	// },
	simpleUpload: {
		// The URL that the images are uploaded to.
		uploadUrl: 'http://127.0.0.1:8000/api/images',
		
		// Enable the XMLHttpRequest.withCredentials property.
		// withCredentials: false,
		
		// Headers sent along with the XMLHttpRequest to the upload server.
		// headers: {
		// 	'X-CSRF-TOKEN': 'CSRF-Token',
		// 	Authorization: `Bearer ${ getCookie('token') }`
		// }
	}
};

const config = {
	visible: 0,
	published: '2022-10-31'
}

export function Post() {
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
				onClick={ () => handleTextEditorSave('http://127.0.0.1:8000/api/posts', config) }
			>Postear</button>
		</div>
	);
}