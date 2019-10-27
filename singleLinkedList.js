
const uuid = require('uuid/v1');

// Single Linked List (unordered) container
// These linked lists contain two sentinals 
// sentinalTop: points to the first cell id
// sentinalBottom: points to the last cell id
let sll = {
  sentinalTop: null,
  sentinalBottom: null
};

// SLL basic unit is the cell
// id: is a uuid that is a string
// next: will point to the uuid of the cell
// value: can be any valid js type that is not null, undefined
const cell = {
  id: null,
  next: null,
  value: null
};

// Methods for single linked lists

// helper fn to determine a values type
const typeCheck = value => {
  if (value === null) return "Null";
  if (value === undefined) return "Undefined";
  return Object.prototype.toString.call(value).slice(8, -1);
};

// initSLL will generate and return a single linked list
// parameter arr is an array of values each cell should contain
// the linked list will be constructed in the order of the arr
initSLL = arr => {
  
  if (typeCheck(arr) !== "Array") {
    throw new TypeError('Parameter passed to initSLL must be an array.');
  } 
  
  const newList = {...sll};
  let len;

  if (arr) len = arr.length;
  else return undefined;
  
  if (len > 1) {
    let prevCell;
    arr.forEach( (item, idx) => {
      if (idx === 0) { // first cell
        const id = uuid();
        prevCell = id;

        newList.sentinalTop = id;
        newList[id] = {...cell};
        newList[id].id = id;
        newList[id].value = arr[0];
      }
      else if (idx === len - 1) { // last cell
        const id = uuid();
        
        newList[prevCell].next = id;
        newList.sentinalBottom = id;

        newList[id] = {...cell};
        newList[id].id = id;
        newList[id].value = arr[idx];
      } else {
        const id = uuid();
        
        newList[prevCell].next = id;
        prevCell = id;

        newList[id] = {...cell};
        newList[id].id = id;
        newList[id].value = arr[idx];
      }
    })
  }
  else if (len === 1) {
    const id = uuid();
    newList.sentinalTop = id;
    newList.sentinalBottom = id;
    newList[id] = {...cell};
    newList[id].id = id;
    newList[id].value = arr[0];
  } 

  return newList;
};

// this single linked list does not enforce unique values
// so the first match will be returned
// if a match is made a copy of the matching cell object is returned
// if no value is passed in then null is returned
const findCellByValue = (sll, value) => {
  let valType = typeCheck(value);

  if (value === "Null" || value === "Undefined") {
    return null;
  } else {
    // will need to check for [] and {} deep equality
    let next;
    let id = sll.sentinalTop;
    if (id === null) return null;

    // iterate the list
    // 1) check the value
    // 2) 

    do {
      if (sll[id].value === value) return sll[id];
      console.log('next: ', sll[id].next);
      next = sll[id].next;
    } while (next !== null)
  }

  return null;
};

const insertCellAtTop = () => {};
const insertCellAtBottom = () => {};
const insertCellAfterValue = () => {};
const insertCellBeforeValue = () => {};

const mapCells = () => {};

const deleteCell = () => {};

let list = initSLL([1,2,3]);
console.log('list: ',list);
console.log('find: ', findCellByValue(list, 2))

module.exports = {
  initSLL: initSLL
};