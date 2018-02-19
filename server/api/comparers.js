module.exports.default = a => a.length

module.exports.words = a => a.split(' ').map(s => s.trim()).filter(s => s.length > 0).length