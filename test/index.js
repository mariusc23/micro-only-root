const { expect } = require('chai')
const sinon = require('sinon')
const { onlyRoot } = require('../')

describe('onlyRoot', () => {
  const handler = sinon.spy()
  const res = {}

  afterEach(() => {
    handler.reset()
  })

  it('should throw if different pathname', () => {
    const req = {
      url: 'https://www.example.com/not-root',
    }
    try {
      onlyRoot(handler)(req, res)
    } catch (err) {
      expect(err.statusCode).to.equal(404)
      expect(err.message).to.equal('Not Found')
    }
  })

  it('should call handler if root', () => {
    const req = {
      url: 'https://www.example.com/',
    }
    onlyRoot(handler)(req, res)
    expect(handler.calledOnce).to.equal(true)
  })
})
