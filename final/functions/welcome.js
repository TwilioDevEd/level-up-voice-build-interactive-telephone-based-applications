
// This is your new function. To start, set the name and path on the left.

exports.handler = function(context, event, callback) {
  // Here's an example of setting up some TWiML to respond to with this function
	const twiml = new Twilio.twiml.VoiceResponse();
  twiml
    .gather({
      action: "/handle-menu",
      numDigits: 1,
    })
    .say(`Press 1 to connect with all the participants. Press 2 to leave Craig a message.`)
  
    
  let variable = 'welcome!';

  // You can log with console.log
  console.log('error', variable);

  // This callback is what is returned in response to this function being invoked.
  // It's really important! E.g. you might respond with TWiML here for a voice or SMS response.
  // Or you might return JSON data to a studio flow. Don't forget it!
  console.log(`TwiML was ${twiml}`);
  return callback(null, twiml);
};