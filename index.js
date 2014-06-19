var context = getAudioContext()
  , recorder
  , Delay = require("./delay.js")
  , delay = new Delay(context, {
      type: 2,
      delay: 91.0,
      feedback: 0.32,
      offset: -0.27,
      cutoff: 8000});
  // , delay2 = new Delay(context, {
  //     type: 1,
  //     delay: 2.0,
  //     feedback: 0.32,
  //     offset: -0.17,
  //     cutoff: 8000000
  // });

// recorder.record();
// osc.connect(delay.input);
// delay.connect(context.destination);
// osc.start(0);

function getAudioContext() {
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
        window.URL = window.URL || window.webkitURL;
        return new AudioContext();
    } catch (e) {
        alert("No Web audio support in this browser");
    }
}

function startMedia(stream) {
  var input = context.createMediaStreamSource(stream);

  // recorder = new Recorder(input);
  // if (recorder) {
  //   audioContext = recorder.context;
  // }
//   fft = audioContext.createAnalyser();
//   fft.fftSize = 128;
// //  fft.connect(audioContext.destination);
//   input.connect(fft);

    input.connect(delay.input);
//    delay.connect(delay2.input);
    delay.connect(context.destination);
}


window.onload = function init() {
  navigator.getUserMedia({audio: true}, startMedia, function (e) {
    console.log(e);
  });
};
