export const editorConfiguration = {
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