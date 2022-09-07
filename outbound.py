import os
from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse


client = Client(
    os.environ["TWILIO_ACCOUNT_SID"],
    os.environ["TWILIO_AUTH_TOKEN"]
)

calls = client.calls.list(to="+14022679490")

unique_numbers = set(c.from_ for c in calls)

twiml = VoiceResponse()
twiml.say("Check out how much better this sounds")
twiml.play("http://demo.twilio.com/docs/classic.mp3")

print(f"TwiML was {twiml}")

for number in unique_numbers:
    call = client.calls.create(
        to=number,
        from_="+14022679490",
        twiml=str(twiml),
        status_callback_event=['initiated', 'answered'],
        status_callback="https://levelup-voice-7170.twil.io/handle-status",
    )
    print(f"Call {call.sid} happened")


print(f"There were {len(calls)}")