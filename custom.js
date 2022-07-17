const chatRemover = (event) => {
  if (event.detail?.command === 'CLEARCHAT') {
    const target = event.detail.body
    if (target == null) {
      // Remove all messages when /clear is used
      document.getElementById('log').innerHTML = ''
    } else {
      // Remove all messages sent by a specific user when they are banned or timed out
      document.querySelectorAll(`[data-from="${target}" i]`).forEach((message) => {
        message.remove()
      })
    }
  }
}

document.addEventListener('onEventReceived', (event) => {
  chatRemover(event)
})
