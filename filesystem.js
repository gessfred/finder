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

let traverse = (path) => {
  let dir = fs.readdirSync(path)
  return dir.map(file=> {
      const fp = `${path}/${file}`
      const stats = fs.statSync(fp)
      const file_ext = file.split('.') 
      const type = file_ext.length > 1 ? file_ext[file_ext.length-1] : null
      let children = null
      try {
        if(file.charAt(0) != '.')
          children = type ? fs.readFileSync(fp).toString() : fs.readdirSync(fp)
      }
      catch(e) {

      }
      return {
          name: file,
          size: stats.size,
          ctime: stats.ctimeMs,
          btime: stats.birthtimeMs,
          atime: stats.atimeMs,
          mtime: stats.mtimeMs,
          type: type,
          children: children
      }
  })
}

server.get('/mkdir/:path', (req, res) => {
  console.log(`mkdir ${req.params.path}`)
  fs.mkdirSync(req.params.path)
})

server.get('/ls/:path', (req, res) => {
  console.log(`ls ${req.params.path}`)
  let content = fs.readdirSync(req.params.path).map(file => {
    const stats = fs.statSync(`${req.params.path}/${file}`)
    return {
        name: file,
        size: stats.size,
        ctime: stats.ctimeMs,
        btime: stats.birthtimeMs,
        atime: stats.atimeMs,
        mtime: stats.mtimeMs
    }
})
  res.send(JSON.stringify(content))
})

server.get('/cat/:file', (req, res) => {
  console.log(`cat ${req.params.file}`)
  fs.readFile(req.params.file, (err, buf) => {
    buf && res.send(buf.toString())
  })
})
server.get('/stat/:file', async (req, res) => {
  try {
    console.log(`stat ${req.params.file}`)
    const stat = await fs.stat(req.params.file)
    console.log(stat)
    res.send(JSON.stringify(stat))
  }
  catch(e) {
    console.log(e)
  }
})

server.get('/ls-rec/:file', amw((a, b) => {
  b.send(JSON.stringify(traverse(a.params.file)))
}))

module.exports = server
