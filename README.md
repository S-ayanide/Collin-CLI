# Collin-CLI

<p align="center">
  <img src="https://i.ibb.co/wCp3vjg/collin.jpg" alt="collin-cli" width=300 >

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

[npm-url]: https://npmjs.org/package/collin
[downloads-image]: https://img.shields.io/npm/dm/collin.svg
[npm-image]: https://img.shields.io/npm/v/collin.svg

An interactive CLI to initialize boilerplate project template and also push it over to github to get users started directly with the project and not waste any time.

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
