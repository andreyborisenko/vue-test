Array.prototype.swap = function (i, j) {
	[this[i], this[j]] = [this[j], this[i]]
}

module.exports.bubble = ({array, cmp}, raw = false) => {

	steps = []

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (cmp(array[j]) - cmp(array[j + 1]) > 0) {
				if (!raw) {
					steps.push([j, j+1]);
				}
				array.swap(j, j + 1)
			}
		}
	}

	return raw ? array : {
		array,
		steps
	}
}

module.exports.insert = ({array, cmp}, raw = false) => {

	steps = []

	for (let i = 1; i < array.length; i++) {
		for (let j = i; j > 0 && cmp(array[j]) - cmp(array[j - 1]) < 0; j--) {
			if (!raw) steps.push([j, j-1])
			array.swap(j, j-1)
		}
	}

	return raw ? array : {
		array,
		steps
	}
}

module.exports.select = ({array, cmp}, raw = false) => {
	steps = []

	for (let i = 0; i < array.length - 1; i++) {
		let min = i
		for (let j = i + 1; j < array.length; j++) {
			if (cmp(array[j]) < cmp(array[min])) min = j
		}
		if (i != min) {
			if (!raw) steps.push([i, min])
			array.swap(i, min)
		}
	}
	
	return raw ? array : {
		array,
		steps
	}
}

module.exports.merge = function merge ({array, cmp}, raw = false) {
  if (array.length === 1) {
    return array
  }

  const middle = Math.floor(array.length / 2) 
  const left = array.slice(0, middle) 
  const right = array.slice(middle) 

  return mergeArrays(
    merge({array: left, cmp}, raw),
		merge({array: right, cmp}, raw),
		cmp
  )
}

const mergeArrays = (left, right, cmp) => {
  let result = [], li = 0, ri = 0

  while (li < left.length && ri < right.length) {
    if (cmp(left[li]) < cmp(right[ri])) {
      result.push(left[li])
      li++
    } else {
      result.push(right[ri])
      ri++
    }
  }

  return result.concat(left.slice(li)).concat(right.slice(ri))
}

module.exports.shell = ({array, cmp}, raw = false) => {

	steps = []

	for (let h = parseInt(array.length / 2); h > 0; h = parseInt(h / 2)) {
		for (let i = h; i < array.length; i++) {

			let k = array[i], j = i

			for (; j >= h && cmp(k) < cmp(array[j - h]); j -= h)
				array[j] = array[j - h]

			if (!raw) steps.push([i, j])
			array[j] = k
		}
	}

	return raw ? array : {
		array, 
		steps
	}
}