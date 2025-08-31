const { exec } = require('child_process');

const [,, commit1, commit2] = process.argv;

if (!commit1 || !commit2) {
  console.error('Bitte zwei Commits angeben.');
  process.exit(1);
}

// Execute git diff to compare two commits
exec(`git diff ${commit1} ${commit2}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Fehler beim Vergleichen: ${stderr}`);
    return;
  }
  console.log(`Unterschiede zwischen ${commit1} und ${commit2}:\n${stdout}`);
});