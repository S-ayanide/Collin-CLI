const { create } = require("domain");

var exec = require("child_process").execSync;

const DeployToGitHub = (repoName, projectName, githubUsername) => {
	var createRepo = `curl -i -u ${githubUsername} https://api.github.com/user/repos -d '{"name":"${repoName}"}'`;
	var cmd = `mkdir ${projectName} && cd ${projectName} && echo. > file.txt && git init && git remote add origin git@github.com:${githubUsername}/${repoName}.git && git add . && git commit -m "initial commit" && git push -u origin master`;

	var options = {
		encoding: "utf8",
		shell: true,
	};

	exec(createRepo, options, (error, stdout, stderr) => {
		if (error) {
			console.error("stderr", stderr);
			throw error;
		}
		console.log(stdout);
	});

	// console.log(exec(cmd, options));
};

module.exports = {
	DeployToGitHub,
};
