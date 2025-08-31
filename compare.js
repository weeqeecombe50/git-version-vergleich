const { exec } = require('child_process');

const [,, commit1, commit2] = process.argv;

// Check if two commits are provided as arguments
if (!commit1 || !commit2) {
  console.error('Bitte zwei Commits angeben.');
  process.exit(1);
}

// Validate commit hash format (simplified)
const commitHashRegex = /^[a-f0-9]{40}$/;
if (!commitHashRegex.test(commit1) || !commitHashRegex.test(commit2)) {
  console.error('Bitte gültige Commit-Hashes angeben.');
  process.exit(1);
}

// Execute git diff to compare two commits
exec(`git diff ${commit1} ${commit2}`, (error, stdout, stderr) => {
  // Log error if the command fails
  if (error) {
    console.error(`Fehler beim Vergleichen: ${stderr}`);
    return;
  }
  // Log the differences between the two commits
  console.log(`Unterschiede zwischen ${commit1} und ${commit2}:
${stdout}`);
});