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
[Github Repo Link]${data.Repository})

## Email
${data.Email}

## Application Image
![img](${data.File})


`;
}

module.exports = generateMarkdown;
