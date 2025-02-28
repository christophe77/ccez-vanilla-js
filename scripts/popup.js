document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('btn');
	if (button) {
		button.addEventListener('click', () => {
			console.log('Button clicked !');
		});
	}
	else{
		console.log('Button not found !');
	}
});
