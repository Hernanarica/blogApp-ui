import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getCookie } from '../helpers';

const initialState = '';

function useTextEditor() {
	const [ body, setBody ] = useState(initialState);
	const { id: userId } = useSelector(state => state.user.credentials)
	
	const handleTextEditorChange = (e, editor) => {
		setBody(editor.getData());
	};
	
	const handleTextEditorSave = (url, config = null) => {
		if (body.length === 0) return;
		
		axios.post(url,{
			...config,
			body,
			'user_id': userId
		},{
			'headers': {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ getCookie('token') }`
			}
		}).then(r => {
			console.log(r);

			handleTextEditorReset();
		});
	};
	
	const handleTextEditorReset = () => {
		setBody(initialState);
	};
	
	return { body, handleTextEditorSave, handleTextEditorChange };
}

export default useTextEditor;