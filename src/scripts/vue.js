const { spawn } = require("child_process");
const VueCreate = (appName) => {
	let script = "";
	script = spawn("vue", ["create", appName], {
		windowsHide: true,
	});

	script.stdout.on("data", (data) => {
		console.log(` ${data}`);
	});

	script.stderr.on("data", (data) => {
		console.log(`Error: ${data}`);
	});

	script.on("close", (code) => {
		console.log(`child process exited with code ${code}`);
	});
};

module.exports = {
	VueCreate,
};
