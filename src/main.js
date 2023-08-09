window.onload = function() {
	document.addEventListener('DOMContentLoaded', () => {
		const input = document.querySelector('#input');
		const output = document.querySelector('#output')
	});
	input.addEventListener('keyup', (e) => {
		if (e.keyCode === 13) {
			const inputValue = input.value;
			const outputValue = executeCommand(inputValue);
			output.textContent = outputValue;
			input.value = ''
		}
	});
}

const commands = {
	date: () => new Date().toLocaleString(),
	help: () => 'Supported commands: date, help'
};

//set dir
let dir = "/root/";


function executeCommand(command) {
	const handler = commands[command];
	if (!handler) {
		return 'Unknown command'
	}
	return handler()
}

async function readTheFile(path) {
	let file;
	if (changedOrAddFile(path) != null) {
		file = changeedOrAddFile(path)
	} else {
		let readFileResponse = await fetch("https://cdn.jsdelivr.net/gh/linuxjs/linuxjs/src" + path);
		file = readFileResponse.text()
	}
	return file
}

function editTheFile(path, file) {
	window.localStorage.setItem(path, file)
}

function changedOrAddFile(path) {
	window.localStorage.getItem(path)
}