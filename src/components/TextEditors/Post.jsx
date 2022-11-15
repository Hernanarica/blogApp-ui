import { useEffect, useState } from 'react';
import Editor from 'ckeditor5-custom-build';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import useTextEditor from '../../hooks/useTextEditor.js';
import { PlusIcon } from '@heroicons/react/24/outline/index.js';

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
	const [ btnActive, setBtnActive ] = useState(true);
	
	useEffect(() => {
		(body.length > 0)
			? setBtnActive(false)
			: setBtnActive(true)
	}, [ body ]);
	
	return (
		<div className="relative w-full flex flex-col">
			<CKEditor
				editor={ Editor }
				config={ editorConfiguration }
				data={ body }
				onChange={ handleTextEditorChange }
			/>
			
			<button
				type="button"
				disabled={ btnActive }
				className={ `absolute bottom-4 right-4 inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-3 text-white shadow-sm duration-300
					${ btnActive
						? 'cursor-not-allowed opacity-90'
						: 'hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
				}` }
				onClick={ () => handleTextEditorSave('http://127.0.0.1:8000/api/posts', config) }
			>
				<PlusIcon className="h-6 w-6" />
			</button>
		</div>
	);
}