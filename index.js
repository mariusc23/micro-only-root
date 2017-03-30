const url = require('url')

const onlyRoot = next => (req, res) => {
  const { pathname } = url.parse(req.url)

  if (pathname !== '/') {
    const err = new Error('Not Found')
    err.statusCode = 404
    throw err
  }

  return next(req, res)
}

module.exports = {
  onlyRoot,
}
