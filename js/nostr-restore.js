const el = (id) => document.getElementById(id)

// send events to a relay, returns a promisse
const sendToRelay = async (relay, data) =>
  new Promise((resolve, reject) => {
    try {
      // prevent hanging forever
      setTimeout(() => reject('timeout'), 20_000)
      const ws = new WebSocket(relay)
      // fetch events from relay
      ws.onopen = () => {
        for (evnt of data) {
          ws.send(JSON.stringify(['EVENT', evnt]))
        }
        ws.close()
        resolve(`done for ${relay}`)
      }
      ws.onerror = (err) => reject(err)
    } catch (exception) {
      reject(exception)
    }
  })

// broadcast events to list of relays
const broadcastEvents = async (data) => {
  await Promise.allSettled(relays.map((relay) => sendToRelay(relay, data)))
}

const restore = async () => {
  el('broadcasting-status').innerText = 'Broadcasting'
  el('broadcasting-progress').style.visibility = 'visible'
  const broadcastInterval = setInterval(() => {
    // update broadcasting progress bar
    const currValue = parseInt(el('broadcasting-progress').value)
    el('broadcasting-progress').value = currValue + 1
  }, 1000)
  await broadcastEvents(data)
  clearInterval(broadcastInterval)
  el('broadcasting-progress').value = 20
  el('broadcasting-status').innerText = 'Done'
}

if (window.location.href.match('file://')) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = './nostr-backup.js'
  document.head.appendChild(script)
  script.onload = () => {
    if (typeof data === 'undefined') {
      el('noDataError').style.display = ''
    } else {
      el('events-found').innerText = `${data.length} events found`
      el('form').style.display = ''
    }
  }
  script.onerror = () => (el('noDataError').style.display = '')
} else {
  el('runLocally').style.display = ''
}
