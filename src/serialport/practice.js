const SerialPort = require('serialport');
const Readline = require('readline');


class Practice {
  
  constructor() {
    this.rl = Readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '请输入:\t'
    })

    const rl = this.rl;
    rl.on('line', (line) => {
      switch (line.trim()) {
        default:
          console.log(`你输入的是：${line.trim()}`);
          this.port.write(line.trim(), function (err) {
            if (err) {
              return console.log('Error on write: ', err.message)
            }
            console.log('message written')
          })
          break;
      }
      rl.prompt();
    }).on('close', () => {
      console.log('再见');
      process.exit(0)
    })

    this.port = new SerialPort('COM8')
    const port = this.port;

    // Open errors will be emitted as an error event
    port.on('error', function (err) {
      console.log('Error: ', err.message)
    })

    // Read data that is available but keep the stream in "paused mode"
    // port.on('readable', function () {
    //   console.log('Data:', port.read())
    // })

    // Switches the port into "flowing mode"
    port.on('data', function (data) {
      console.log('Data:', data.toString())
    })
  }

  static main(args) {
    console.log(`main args:`,...args);
    let practice = new Practice();
    practice.rl.prompt();
  }
}

Practice.main(process.argv.splice(2));








