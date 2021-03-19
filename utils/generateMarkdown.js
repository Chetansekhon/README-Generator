// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contribution
${data.Contribution}

## Test
${data.Test}

## Technology
${data.Technology}

## License
${data.License}

## Repository
${data.Repository}

## Email
${data.Email}

## File
${data.File}


`;
}

module.exports = generateMarkdown;
