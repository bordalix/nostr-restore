# nostr-restore

This app will restore your events from a nostr-backup file

### App must run locally

Due to browser limitations, you'll have to run this app locally:

- go to https://nostr-restore.pages.dev, save to disk and open html file with your browser
- get the code from the this repo and open the index.html file with your browser

### Import backup file

Browsers don't allow importing JSON files locally, but allow Javascript files.

Older versions of https://nostr-backup.pages.dev exported a JSON file (instead of a Javascript file).

If your backup file is a JSON file (nostr-backup`.json`) you need to transform it into a javascript file (nostr-backup`.js`). Don't worry, is easy:

- Copy your nostr-backup.json to the root directory of this app
- Open nostr-backup.json with a text editor
- Add the following code to the first line: `const data =`
- So, instead of `[` your first line should be `const data = [`
- Save the file as nostr-backup.js (note the extension change)
- Now when you open the index.html with your browser you should see an indication of how many events were found and a button to start broadcasting

### Relays

If you want to use your own list of relays:

- Clone this repo
- Edit js/relays.js
- Open index.html with a browser
