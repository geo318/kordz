import { exec } from 'child_process'

export const restartApp = () => {
  const restartCommand = 'pm2 restart kordz'
  exec(restartCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`)
      return
    }
    console.log(`Command output: ${stdout}`)
  })
}
