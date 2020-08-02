const spawnSync = require('child_process').spawnSync
const CreateReactApp = (appName, packageManager) => {
  if (packageManager === 'npm') {
    spawnSync(
      'npx',
      ['create-react-app', appName, '--use-npm'],
      {
        shell: true,
        stdio: 'inherit',
      },
      (error, stdout, stderr) => {
        console.log('Creating app - ', appName)
        if (error) {
          console.error('stderr', stderr)
          throw error
        }

        console.log(stdout)
      },
    )
    return
  }
  if (packageManager === 'yarn') {
    spawnSync(
      'npm',
      ['i', '-g', 'yarn'],
      {
        shell: true,
        stdio: 'inherit',
      },
      (error, stdout, stderr) => {
        console.log('Checking if yarn is installed in your system')
        if (error) {
          console.error('stderr', stderr)
          throw error
        }

        console.log(stdout)
        console.log('Yarn check successful')
      },
    )

    spawnSync(
      'yarn',
      ['create', 'react-app', appName],
      {
        shell: true,
        stdio: 'inherit',
      },
      (error, stdout, stderr) => {
        console.log('Creating app - ', appName)
        if (error) {
          console.error('stderr', stderr)
          throw error
        }

        console.log(stdout)
      },
    )
    return
  }
}

module.exports = {
  CreateReactApp,
}
