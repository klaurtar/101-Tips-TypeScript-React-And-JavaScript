#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const main = () => {
  const args = process.argv.slice(2);
  const binding = 'ts';
  if (args.length < 1) {
    console.error('Please provide the day number as an argument.');
    process.exit(1);
  }

  const dayNumber = args[0];
  const extension = args.length > 1 ? args[1] : binding;

  createTsFile(dayNumber, extension);
  createNoteInMacNotes(dayNumber);
};

const createTsFile = (dayNumber, extension) => {
  const directory = '/myPath/to/my/codebase';
  const filename = `day${dayNumber}.${extension}`;
  const filePath = path.join(directory, filename);

  if (!fs.existsSync(directory)) {
    console.log('Directory does not exist. Creating directory.');
    fs.mkdirSync(directory, { recursive: true });
  }

  fs.writeFileSync(filePath, '');
  console.log(`File created at ${filePath}`);
};

const createNoteInMacNotes = (dayNumber) => {
  const title = `Day ${dayNumber}`;
  const hashtag = '#100days';
  const script = `
tell application "Notes"
tell account "iCloud"
make new note at folder "Notes" with properties {body:"<h1>${title}</h1><br>${hashtag}"}
end tell
end tell
`.trim();

  execSync(`/usr/bin/osascript -e '${script}'`);
  console.log(
    `Note created in Mac Notes app with formatted title ${title} and hashtag ${hashtag}`
  );
};

main();
