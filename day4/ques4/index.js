const { execFile } = require('child_process');
  
// Executes the exec.js file
const child = execFile('node', ['timer.js'], 
        (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});