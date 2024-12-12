const { exec } = require('child_process');

const testera = () => {
  console.log('Running tests and updating on GitHub action when pull request is made...');
  // Run tests
  exec('npm test', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Test results: ${stdout}`);
  });
};

testera();