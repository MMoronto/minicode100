const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false})
    .then(localMediaStream => {
      console.log(localMediaStream);

//      video.src = window.URL.createObjectURL(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}

function paintToCanvas()  {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
//     // take pixels out
//     let pixels = ctx.getImageData(0, 0, width, height);
//     // mess with them
//     // pixels = redEffect(pixels);
//
//     pixels = rgbSplit(pixels);
  }, 16);
}

function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  console.log(data);
  // const link = document.createElement('a');
  // link.href = data;
  // link.setAttribute('download', 'handsome');
  // link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  // strip.insertBefo9re(link, strip.firstChild);
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
