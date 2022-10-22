const badges = (answer) => {
    if (answer == 'MIT') {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else
    if (answer == 'Apache-2.0') {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } 
};

const printReadMe = ({ title, description, installation, usage, contributors, license, tests, github, email }) =>
`# ${title}


## Description
${description}

## Table of Contents
[Installation](#installation)

[Usage](#usage)

[Contributors](#contributors)
[License](#license)

[Questions](#questions)

[Tests](#tests)

## Installation
${installation}

## Usage
${usage}

## Contributors 
${contributors}

## License
${badges(license)}

## Questions
Questions? Contact me on GitHub or via E-mail

https://github.com/${github}

${email}

## Tests
${tests}

`;

module.exports = {
    badges, 
    printReadMe
};

//export generate read me, then call the generate read me in the index file 
// require generatereadme.js file