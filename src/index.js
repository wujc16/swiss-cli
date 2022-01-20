#!/usr/bin/env node

const prompts = require('prompts');
const path = require('path');
const fs = require('fs');

const questions = [
  {
    type: 'text',
    name: 'projectName',
    message: 'Please input the project name: '
  },
];

// current working directory
const cwd = process.cwd();

function rewritePackageJson(fileDir, projectName) {
  const buffer = fs.readFileSync(fileDir);
  const jsonStr = String(buffer);
  const newStr = jsonStr.replace('react-webpack-template', projectName);
  fs.writeFileSync(fileDir, newStr);
}

// copy directory
function copyDir(sourceDir, destDir) {
  if (sourceDir.endsWith('node_modules') || sourceDir.endsWith('node_modules/')) {
    return;
  }

  fs.mkdirSync(destDir, { recursive: true });
  const files = fs.readdirSync(sourceDir);

  for (const file of files) {
    const sourceFile = path.resolve(sourceDir, file);
    const destFile = path.resolve(destDir, file);
    copy(sourceFile, destFile);
  }
}

// copy
function copy(sourceFile, destFile) {
  const stat = fs.statSync(sourceFile);
  if (stat.isDirectory()) {
    copyDir(sourceFile, destFile);
  } else {
    fs.copyFileSync(sourceFile, destFile);
  }
}

async function main() {
  const onCancel = () => {
    console.error('invalid input!');
    return false;
  }
  const response = await prompts(questions, { onCancel });
  const { projectName } = response;
  if (!projectName) {
    console.error('project name is required!');
    return;
  }

  // check valid
  const reg = new RegExp(/^[a-zA-Z_\-]+$/)
  if (!reg.test(projectName)) {
    console.error('project name can only be alphabet or underline _!');
    return;
  }

  const rootDir = path.resolve(cwd, projectName);
  
  if (fs.existsSync(rootDir)) {
    console.error('project folder exists, please use another project name!')
    return;
  }

  const templateFolder = path.resolve(__dirname, '../template');

  copyDir(templateFolder, rootDir);
  rewritePackageJson(path.resolve(rootDir, 'package.json'), projectName);

  console.log('project created successfully, enjoy!')
}

main();
