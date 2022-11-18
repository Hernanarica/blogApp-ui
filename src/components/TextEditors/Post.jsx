import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Editor from 'ckeditor5-custom-build';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { PlusIcon } from '@heroicons/react/24/outline/index.js';
import { axiosPostEditorInstance, editorConfiguration } from '../../config';
import { notifyLoading, notifySuccess } from '../../helpers';

import '../../css/textEditor.css';

export function Post() {
	const [ btnActive, setBtnActive ] = useState(true);
	const [ body, setBody ] = useState('');
	const { register, handleSubmit, watch, reset } = useForm();
	const { id: userId } = useSelector(state => state.user.credentials);
	const navigate = useNavigate();
	const title = watch('title', '');
	const description = watch('description', '');
	
	useEffect(() => {
		(body.length > 0 && title.length > 0 && description.length > 0)
			? setBtnActive(false)
			: setBtnActive(true)
	}, [ body, title, description ]);
	
	const onSubmit = (data) => {
		notifyLoading('Creando post...');
		
		axiosPostEditorInstance.post(null, {
			...data,
			body,
			'user_id': userId
		}).then(r => {
			reset({
				title: '',
				description: '',
			});
			
			handleTextEditorReset();
			
			navigate('/dashboard/posts');
			
			notifySuccess('Post creado');
		}).catch(err => {
			throw new Error(`${ err }`);
		})
	}
	
	const handleTextEditorChange = (e, editor) => {
		setBody(editor.getData());
	};
	
	const handleTextEditorReset = () => {
		setBody('');
	};
	
	return (
		<form className="flex flex-col gap-7" onSubmit={ handleSubmit(onSubmit) }>
			<div className="space-y-5">
				<div>
					<label
						htmlFor="title"
						className="block text-sm font-medium text-gray-700"
					>
						Título
					</label>
					<div className="relative mt-1">
						<input
							type="text"
							name="title"
							id="title"
							maxLength="30"
							placeholder="Obligatorio"
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							{ ...register('title', {
								required: true,
								maxLength: 30
							})}
						/>
						<span className={ `absolute -bottom-6 right-0 text-xs ${ title.length === 30 ? 'text-indigo-600' : 'text-gray-400' }` }>{ title.length }/30</span>
					</div>
				</div>
				<div>
					<label
						htmlFor="comment"
						className="block text-sm font-medium text-gray-700"
					>
						Descripcion
					</label>
					<div className="relative mt-1">
				    <textarea
					    rows="3"
					    name="description"
					    id="description"
					    maxLength="150"
					    placeholder="Obligatorio"
					    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm resize-none"
					    { ...register('description', {
						    required: true,
						    maxLength: 150
					    })}
				    />
						<span className={ `absolute -bottom-6 right-0 text-xs ${ description.length === 150 ? 'text-indigo-600' : 'text-gray-400' }` }>{ description.length }/150</span>
					</div>
				</div>
			</div>
			
			<div className="relative">
				<CKEditor
					editor={ Editor }
					config={ editorConfiguration }
					data={ body }
					onChange={ handleTextEditorChange }
				/>
				<button
					type="submit"
					disabled={ btnActive }
					className={ `absolute bottom-4 right-4 inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-3 text-white shadow-sm duration-300 z-10
						${ btnActive
							? 'cursor-not-allowed opacity-90'
							: 'hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
					}` }
				>
					<PlusIcon className="h-6 w-6" />
				</button>
			</div>
		</form>
	);
}