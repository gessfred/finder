const { app, BrowserWindow } = require("electron")
const path = require("path")
const url = require("url")
const express = require('express')
const fs = require('fs')

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600, titleBarStyle: 'hidden', movable: true })

  // load the dist folder from Angular
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  )

  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()

  win.on("closed", () => {
    win = null;
  })
}

app.on("ready", createWindow)

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
})

// initialize the app's main window
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
})

const server = express()

server.get('/ls/:path', (req, res) => {
  console.log(`ls ${req.params.path}`)
  res.send(fs.readdirSync(req.params.path))
})

server.get('/cat/:file', (req, res) => {
  console.log(`cat ${req.params.file}`)
  fs.readFile(req.params.file, (err, buf) => {
    res.send(buf.toString())
  })
})

server.listen(8000, () => {
  console.log('listening port 8000.')
})
