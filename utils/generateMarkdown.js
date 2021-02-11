// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
    if(license !== 'None'){
        return`![GitHub license](https://img.shields.io/badge/license-${license}2.0-blue.svg)\n` ;
    }
    return '';
}

// If there is no license, return an empty string
function renderLicenseLink(license) { 
    if(license !== "None"){ 
        return `* [License](#license) \n`;
    }
     return '';
}

// If there is no license, return an empty string
function renderLicenseSection(license){
    if(license !== 'None'){
        return`## License
        This project is licensed under the ${license} license.
        For more information about the license, click on the link below.
        -[License] ( https://opensource.org/licenses/${license} `;
    }
    return '';
}


function generateMarkdown(data) {
   
    return `
<h1> #${data.title} </h1>\n
${renderLicenseBadge(data.license)}
<h1> ## Description </h1>\n
 ${data.description}
<h1>  Table of Contents </h1>\n
* [Installation](#installation)\n  
* [Usage](#usage)\n
${renderLicenseLink(data.license)}
* [Contributing](#contributing)\n
* [Test](#test)\n
* [Questions](#Questions)\n
## Installation:
 ${data.installation}    
## Usage:
 ${data.usage}
## License:
 ${renderLicenseSection(data.license)}
## Contributing:
 ${data.contribution} 
## Test:
 ${data.test}
## Questions:
 For questions about the Generator you can go to my GitHub page at the following Link:
 -[GitHub Profile](https://github.com/${data.github})    
 For additional questions please reach out to my Email at: ${data.email}
`;
}
module.exports = generateMarkdown;
