import { useState } from "react";
import axios from 'axios';
import Editor from 'ckeditor5-custom-build';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { getCookie } from '../../helpers/index.js';

import '../../css/textEditor.css';

const editorConfiguration = {
	toolbar: [ 'Alignment', 'bold', 'italic', 'bulletedList', 'numberedList', 'Link' ]
};

export function Post() {
	const [ comment, setComment ] = useState('');
	
	const onChange = (e, editor) => {
		setComment(editor.getData());
	}
	
	const saveComment = () => {
		if (comment.length === 0) return;
		
		axios.post('http://127.0.0.1:8000/api/comments', {
			'user_id': 11,
			'post_id': 2,
			'comment': comment,
		}, {
			'headers': {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ getCookie('access_token') }`
			}
		}).then(r => {
			console.log(r);
			
			setComment('');
		});
	}
	
	return (
		<div className="w-full flex flex-col">
			<CKEditor
				editor={ Editor }
				config={ editorConfiguration }
				data={ comment}
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