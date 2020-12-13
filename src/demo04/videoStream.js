Stream = require('node-rtsp-stream')
stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://127.0.0.1:8554/vlc',
    wsPort: 9999,
    ffmpegOptions: { // options ffmpeg flags
        '-stats': '', // an option with no neccessary value uses a blank string
        '-r': 30 // options with required values specify the value after the key
    }
})