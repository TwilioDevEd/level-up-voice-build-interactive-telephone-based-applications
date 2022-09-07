

exports.handler = function(context, event, callback) {
  // Here's an example of setting up some TWiML to respond to with this function
	const twiml = new Twilio.twiml.VoiceResponse();

  if (event.Digits === "1") {
    twiml.dial().conference("levelup");
  } else if (event.Digits === "2") {
    twiml.say(`Please record your message after the beep`);
    twiml.record({
      transcribe: true,
      transcribeCallback: "/handle-transcription"
    });
  } else {
    twiml.say(`I don't know what you mean by ${event.Digits}`);
  }

  console.log(`TwiML was ${twiml}`);

  return callback(null, twiml);
};