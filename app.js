//npm --v

// Locadl dependncy
// npm i <packagename>

// Gloabal dependcy

// npm instll -g <packagename.
// sudo npm instll -g <packagenamenp>


const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)