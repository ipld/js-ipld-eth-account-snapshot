const CID = require('cids')
const multihash = require('multihashes')

module.exports = {
  cidForHash: cidForHash,
}

function cidForHash(codec, rawhash) {
  var multihash = multihashes.encode(rawhash, 'keccak-256')
  return new CID(1, codec, multihash)
}
