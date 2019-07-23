const express = require('express')
const fs = require('fs')

const server = express()

const amw = (f) => async (req, res) => {
    try {
        f(req, res)
    }
    catch (e) {
        console.log(e)
    }
} 

server.get('/mkdir/:path', (req, res) => {
  console.log(`mkdir ${req.params.path}`)
  fs.mkdirSync(req.params.path)
})

server.get('/ls/:path', (req, res) => {
  console.log(`ls ${req.params.path}`)
  res.send(fs.readdirSync(req.params.path))
})

server.get('/cat/:file', (req, res) => {
  console.log(`cat ${req.params.file}`)
  fs.readFile(req.params.file, (err, buf) => {
    buf && res.send(buf.toString())
  })
})
server.get('/stat/:file', async (req, res) => {
  console.log(`stat ${req.params.file}`)
  fs.stat()
})

module.exports = server
