// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[License Info](https://fossa.com/blog/open-source-software-licenses-101-isc-license/)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents

* [Description](#description)
* [License](#license)
* [Contributor](#contributor)
* [Email](#email)
* [Testing](#testing)
* [GitHub](#github)
* [Installion](#installion)
* [Usage](#usage)

### Description
${data.description}

### License
${renderLicenseLink(data.license)}


### Testing
${data.testing}

### Email
If you have questions about this project reach me at 
${data.email}

### GitHub
${data.GitHub}
[Github Profile](https://github.com/${data.GitHub})


### Installion
${data.installion}

### contributor
${data.contributor}

### Usage
${data.usage}
`;
}

module.exports = generateMarkdown;
