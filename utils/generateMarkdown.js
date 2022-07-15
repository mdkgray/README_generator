// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// function to return license badge and link for README.md file


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #Project Title

  ${data.title}
  
  ![badge](https://img.shields.io/badge/license-${data.renderLicense}-brightgreen)
  ${renderLicense(data.license)}

  #Description

  ${data.description}

  #Table of Contents

  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contributing](#Contributing)
  [Tests](#Tests)
  [Questions](#Questions)

  #Installation 

  ${data.installation}

  #Usage

  ${data.usage}

  #License

  ${data.license}

  #Contributing

  ${data.contributing}

  #Tests

  ${data.tests}

  #Questions

  ###GitHub: ${data.gitUserName}
  
  ###Email: ${data.email}
`;
};

module.exports = generateMarkdown;
