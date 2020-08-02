const spawnSync = require("child_process").spawnSync;
const VueCreate = (appName) => {
	if (process.platform === "linux" || process.platform === "darwin") {
		spawnSync(
			"sudo",
			["npm", "install", "--global", "@vue/cli"],
			{
				shell: true,
				stdio: "inherit",
			},
			(error, stdout, stderr) => {
				console.log("Checking if vue is already installed");
				if (error) {
					console.error("stderr", stderr);
					throw error;
				}

				console.log(stdout);
			}
		);
	} else if (process.platform === "win32") {
		spawnSync(
			"npm",
			["install", "-g", "@vue/cli"],
			{
				shell: true,
				stdio: "inherit",
			},
			(error, stdout, stderr) => {
				console.log("Checking if vue is already installed");
				if (error) {
					console.error("stderr", stderr);
					throw error;
				}

				console.log(stdout);
			}
		);
	}

	spawnSync(
		"vue",
		["create", appName],
		{
			shell: true,
			stdio: "inherit",
		},
		(error, stdout, stderr) => {
			console.log("Creating a vue app - ", appName);
			if (error) {
				console.error("stderr", stderr);
				throw error;
			}

			console.log(stdout);
		}
	);
};

module.exports = {
	VueCreate,
};
