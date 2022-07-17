# Fix StreamLabs' Chat Box message removal

StreamLabs' Chat Box widget correctly removes a message when it's individually deleted from Twitch chat, but not when a user is banned/timed out, or when the entire chat is cleared using `/clear`.

This script fixes those issues, correctly removing all relevant messages.

## How to use

Open the [StreamLabs' Chat Box settings in the Dashboard](https://streamlabs.com/dashboard#/chatbox).

Enable the setting called `Enable Custom HTML/CSS`.

You can leave the `HTML` field alone.

Copy the content of `<theme>.css` into the `CSS` field to apply that theme, since the `Theme` setting will be overridden.

Copy the content of `custom.js` into the `JS` field to apply the fix.

Hit the `Save Settings` button and you are done, note that this will refresh the Chat Box, clearing any messages that were already on there.

## License

The license included in this repository applies only to the `custom.js` file, all the `.css` files are taken from the StreamLabs' Chat Box and are property of StreamLabs.