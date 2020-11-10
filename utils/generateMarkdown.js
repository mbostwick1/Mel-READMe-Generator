// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of contents:  
  * [Description](#description)
  * [Installation](#Installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  
  ## Description:
  [GitHub](${data.repo})
  [LiveURL](${data.liveURL})
  ${data.description}
  

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## license:
  ${data.license}
  
  ## Credits:
  ${data.credits}

`;
}

module.exports = generateMarkdown;
