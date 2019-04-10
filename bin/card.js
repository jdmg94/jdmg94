#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  color: 'blue',
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Jose Muñoz'),
  handle: chalk.cyan('jdmg94'),
  work: chalk.white('Actively looking'),
  dev: chalk.cyan('https://dev.to/jdmg94'),
  twitter: chalk.cyan('https://twitter.com/jdmg93'),
  github: chalk.cyan('https://github.com/jdmg94'),
  linkedin: chalk.cyan('https://linkedin.com/in/jdmg94'),
  web: chalk.cyan('https://superiortech.co/'),
  npx: chalk.white('npx jdmg94'),
}


const generateCard = ({
  web,
  npx,
  dev,
  name,
  work,
  github,
  handle,
  twitter,
  linkedin,
}, options) => {
  const label = {
    work: chalk.white.bold('      work:'),
    dev: chalk.white.bold('       Dev:'),
    twitter: chalk.white.bold('   Twitter:'),
    gitHub: chalk.white.bold('    GitHub:'),
    linkedIn: chalk.white.bold('  LinkedIn:'),
    web: chalk.white.bold('       Web:'),
    card: chalk.white.bold('      Card:'),
  }            
  
  const template = `
          ${name} | ${handle}
    
    ${label.work}  ${work}
    ${label.dev}  ${dev}
    ${label.twitter}  ${twitter}
    ${label.gitHub}  ${github}
    ${label.linkedIn}  ${linkedin}
    ${label.web}  ${web}
    
    ${label.card}  ${npx}
  `;
  
  const { color } = options;
  return chalk[color](boxen(template, options));
};

console.log(generateCard(data, options));
