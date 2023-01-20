# Collin-CLI

<p align="center">
  <img src="https://i.ibb.co/wCp3vjg/collin.jpg" alt="collin-cli" width=300 >

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

[npm-url]: https://npmjs.org/package/collin
[downloads-image]: https://img.shields.io/npm/dm/collin.svg
[npm-image]: https://img.shields.io/npm/v/collin.svg

Collin CLI is an open-source command-line interface (CLI) that streamlines the process of creating and managing web development projects. With Collin CLI, users can quickly and easily create new projects, initialize a git repository, and push starter code to GitHub, all from the terminal.

This project is built to support the creation of projects in React, Vue, and Gatsby, with more frameworks to come. It allows users to quickly set up a new project with the required dependencies and a basic file structure, saving time and effort.

Initializing a git repository is as simple as running a single command, and users can also push their starter code straight to GitHub without having to manually create a repository on the GUI. This feature allows developers to quickly set up a new project and start working on it without having to spend time on setup and configuration.

Collin CLI is perfect for developers who prefer to work in the terminal and want a streamlined and efficient workflow. It can save you a lot of time and effort and make your development process more productive and enjoyable.

# Installation

```
npm install -g collin
```

# Usage

```
collin
```

or

```
npx collin
```

# Support

<table>
<thead><tr><th>Platform</th><th>Support</th></tr></thead>
<tbody>
<tr><td>
Linux
</td><td>
Supported
</td></tr>
<tr><td>
Mac OS
</td><td>
Supported
</td></tr>
<tr><td>
Windows
</td><td>
<p>Project Creation Supported<br />Publish to GitHub not supported yet</p>
</td></tr>
</tbody></table>

# Working

Spawns synchronous `child process` depending upon user input/choices allowing the CLI to create user specific demands right from the terminal without timeout.

# Advantages of Collin-CLI

Things you can do right from the terminal itself

-   Project Creation (React, Vue, Gatsby)
-   Initializing a git repository
-   Pushing the starter code straight into GitHub without creating a repository manually on GUI

# Future Scope

-   Right now the CLI is only available for unix and darwin systems, on Windows pushing to GitHub is still not achieved but project creation can be done.
-   Adding more interactivity based on developer feedback
-   Support for more frameworks
