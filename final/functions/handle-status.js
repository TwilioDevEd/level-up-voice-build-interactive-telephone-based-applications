
exports.handler = function(context, event, callback) {
  console.log(`CallSid: ${event.CallSid} with Status: ${event.CallStatus}`);
  return callback(null);
};