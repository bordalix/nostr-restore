# nostr-restore

This app will restore your events from a nostr-backup file

Due to browser limitations, you'll have to use this project in a different way:

- You'll have to run it locally, so you will need to get the code from the repo and open the _index.html_ file with your browser
- Browsers don't allow importing JSON files locally, but will allow Javascript files, so we need to transform our _nostr-backup.json_ file into a Javascript file:

  - Copy your _nostr-backup.json_ to the root directory of this app
  - Open _nostr-backup.json_ with a text editor
  - Add the following code to the first line:
    _const data =_
  - Save the file as _nostr-backup.js_ (**note the extension change**)
  - Now when you open the _index.html_ with your browser you should see an indication of how many events were found and a button to start broadcasting

If you want to use your own list of relays:

- Clone repo
- Edit js/relays.js
- Open index.html with a browser
