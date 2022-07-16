// function to return license badge and link for README.md file
function renderLicense(data) {
  if (data === 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if ( data === 'Boost Software 1.0') {
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (data === 'Eclipse Public License 1.0') {
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  } else if (data === 'GNU AGPL v3') {
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  } else if (data === 'GNU GPL v3') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (data === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (data === 'Mozilla') {
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicense(data.license)}

  # Description

  ${data.description}

  # Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  # Installation 

  ${data.installation}

  # Usage

  ${data.usage}

  # License

  ${data.license}

  # Contributing

  ${data.contributing}

  # Tests

  ${data.tests}

  # Questions

  ### For further information contact using the following:

  #### GitHub: [${data.gitUserName}](https://github.com/${data.gitUserName})
  
  #### Email: ${data.email}
`;
};

module.exports = generateMarkdown;
