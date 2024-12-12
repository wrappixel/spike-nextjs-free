const { exec } = require('child_process');

const guard = () => {
  console.log('Checking security...');

  // Run npm audit to check for vulnerabilities
  exec('npm audit --json', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }

    const auditReport = JSON.parse(stdout);
    const vulnerabilities = auditReport.metadata.vulnerabilities;

    if (vulnerabilities.total > 0) {
      console.log('Vulnerabilities found:');
      console.log(`Total: ${vulnerabilities.total}`);
      console.log(`Info: ${vulnerabilities.info}`);
      console.log(`Low: ${vulnerabilities.low}`);
      console.log(`Moderate: ${vulnerabilities.moderate}`);
      console.log(`High: ${vulnerabilities.high}`);
      console.log(`Critical: ${vulnerabilities.critical}`);
    } else {
      console.log('No vulnerabilities found.');
    }
  });
};

guard();