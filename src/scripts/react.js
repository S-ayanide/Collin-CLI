const { spawn, spawnSync } = require("child_process");
const CreateReactApp = (appName, packageManager) => {
	let script = "";
	if (packageManager === "npm") {
		script = spawn("npx", ["create-react-app", appName], {
			windowsHide: true,
		});
	} else if (packageManager === "yarn") {
		script = spawn("yarn", ["create", "react-app", appName], {
			windowsHide: true,
		});
	}

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
	CreateReactApp,
};
