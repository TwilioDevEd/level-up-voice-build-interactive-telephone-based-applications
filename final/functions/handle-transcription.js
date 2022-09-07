
exports.handler = function(context, event, callback) {
  console.log(`TranscriptionText: ${event.TranscriptionText}`);
  console.log(`RecordingUrl: ${event.RecordingUrl}`);
  return callback(null);
};