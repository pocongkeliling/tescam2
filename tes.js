function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      var videoElement = document.getElementById('videoElement');
      videoElement.srcObject = stream;
    })
    .catch(function(error) {
      console.error('Error accessing camera:', error);
    });
}

// Check if camera available and start camera automatically
navigator.mediaDevices.enumerateDevices()
  .then(function(devices) {
    var hasVideoDevice = devices.some(function(device) {
      return device.kind === 'videoinput';
    });
    if (hasVideoDevice) {
      startCamera();
    } else {
      console.error('No video device available');
    }
  })
  .catch(function(error) {
    console.error('Error enumerating devices:', error);
  });