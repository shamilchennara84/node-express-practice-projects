const os = require('os')

const user = os.userInfo()
console.log(user);

console.log(`The System Update ${os.uptime()} seconds `);

const currentOs = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
}

console.log(currentOs);