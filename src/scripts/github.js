var exec = require("child_process").execSync;

const DeployToGitHub = (
  repoName,
  projectName,
  githubUsername,
  projectDescription
) => {
  var createRepo = `curl -u '${githubUsername}' https://api.github.com/user/repos -d '{"name":"${repoName}","description":"${projectDescription}"}' && cd ${projectName} && git init && git remote add origin https://github.com/${githubUsername}/${repoName}.git && git push origin main`;

  var options = {
    encoding: "utf8",
    shell: true,
  };

  console.log("Enter password for ", githubUsername, ": ");
  exec(createRepo, options, (error, stdout, stderr) => {
    if (error) {
      console.error("stderr", stderr);
      throw error;
    }
    console.log(stdout);
  });
};

module.exports = {
  DeployToGitHub,
};
