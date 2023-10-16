export const TURNS = {
  X: '🍪',
  O: '🍰'
}

// 0: top, 1: right, 2: bottom, 3: left
export const INVISIBLE_SQUARE = {
  lines: [{ selected: false, style: 'invisible' },
    { selected: false, style: 'invisible' },
    { selected: false, style: 'invisible' },
    { selected: false, style: 'invisible' }],
  value: ''
}
export const BLANK_SQUARE = {
  lines: [{ selected: false, style: 'blank' },
    { selected: false, style: 'blank' },
    { selected: false, style: 'blank' },
    { selected: false, style: 'blank' }],
  value: ''
}
export const TOP_LEFT_SQUARE = {
  lines: [{ selected: true, style: 'border' },
    { selected: false, style: 'blank' },
    { selected: false, style: 'blank' },
    { selected: true, style: 'border' }],
  value: ''
}
export const TOP_RIGHT_SQUARE = {
  lines: [{ selected: true, style: 'border' },
    { selected: true, style: 'border' },
    { selected: false, style: 'blank' },
    { selected: false, style: 'blank' }],
  value: ''
}
export const BOTTOM_LEFT_SQUARE = {
  lines: [{ selected: false, style: 'blank' },
    { selected: false, style: 'blank' },
    { selected: true, style: 'border' },
    { selected: true, style: 'border' }],
  value: ''
}
export const BOTTOM_RIGHT_SQUARE = {
  lines: [{ selected: false, style: 'blank' },
    { selected: true, style: 'border' },
    { selected: true, style: 'border' },
    { selected: false, style: 'blank' }],
  value: ''
}
export const BOTTOM_RIGHT_INVISIBLE_SQUARE = {
  lines: [{ selected: false, style: 'invisible' },
    { selected: true, style: 'border' },
    { selected: true, style: 'border' },
    { selected: false, style: 'invisible' }],
  value: ''
}
export const BOTTOM_LEFT_INVISIBLE_SQUARE = {
  lines: [{ selected: false, style: 'invisible' },
    { selected: false, style: 'invisible' },
    { selected: true, style: 'border' },
    { selected: true, style: 'border' }],
  value: ''
}
export const TOP_LEFT_INVISIBLE_SQUARE = {
  lines: [{ selected: true, style: 'border' },
    { selected: false, style: 'invisible' },
    { selected: false, style: 'invisible' },
    { selected: true, style: 'border' }],
  value: ''
}
export const TOP_RIGHT_INVISIBLE_SQUARE = {
  lines: [{ selected: true, style: 'border' },
    { selected: true, style: 'border' },
    { selected: false, style: 'invisible' },
    { selected: false, style: 'invisible' }],
  value: ''
}
export const SQUARE_X = {
  lines: [{ selected: true, style: 'border' },
    { selected: true, style: 'border' },
    { selected: true, style: 'border' },
    { selected: true, style: 'border' }],
  value: TURNS.X
}
export const SQUARE_O = {
  lines: [{ selected: true, style: 'border' },
    { selected: true, style: 'border' },
    { selected: true, style: 'border' },
    { selected: true, style: 'border' }],
  value: TURNS.O
}
export const LEFT_SQUARE = {
  lines: [{ selected: false, style: 'blank' },
    { selected: false, style: 'blank' },
    { selected: false, style: 'blank' },
    { selected: true, style: 'border' }],
  value: ''
}
export const RIGHT_SQUARE = {
  lines: [{ selected: false, style: 'blank' },
    { selected: true, style: 'border' },
    { selected: false, style: 'blank' },
    { selected: false, style: 'blank' }],
  value: ''
}
export const TOP_SQUARE = {
  lines: [{ selected: true, style: 'border' },
    { selected: false, style: 'blank' },
    { selected: false, style: 'blank' },
    { selected: false, style: 'blank' }],
  value: ''
}
export const BOTTOM_SQUARE = {
  lines: [{ selected: false, style: 'blank' },
    { selected: false, style: 'blank' },
    { selected: true, style: 'border' },
    { selected: false, style: 'blank' }],
  value: ''
}

export const BOARD = [[INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE, BOTTOM_RIGHT_INVISIBLE_SQUARE, SQUARE_X, BOTTOM_LEFT_INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE],
  [INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE, BOTTOM_RIGHT_INVISIBLE_SQUARE, TOP_LEFT_SQUARE, TOP_SQUARE, TOP_RIGHT_SQUARE, BOTTOM_LEFT_INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE],
  [INVISIBLE_SQUARE, INVISIBLE_SQUARE, BOTTOM_RIGHT_INVISIBLE_SQUARE, TOP_LEFT_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, TOP_RIGHT_SQUARE, BOTTOM_LEFT_INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE],
  [INVISIBLE_SQUARE, BOTTOM_RIGHT_INVISIBLE_SQUARE, TOP_LEFT_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, TOP_RIGHT_SQUARE, BOTTOM_LEFT_INVISIBLE_SQUARE, INVISIBLE_SQUARE],
  [BOTTOM_RIGHT_INVISIBLE_SQUARE, TOP_LEFT_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, TOP_RIGHT_SQUARE, BOTTOM_LEFT_INVISIBLE_SQUARE],
  [SQUARE_O, LEFT_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, RIGHT_SQUARE, SQUARE_X],
  [TOP_RIGHT_INVISIBLE_SQUARE, BOTTOM_LEFT_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BOTTOM_RIGHT_SQUARE, TOP_LEFT_INVISIBLE_SQUARE],
  [INVISIBLE_SQUARE, TOP_RIGHT_INVISIBLE_SQUARE, BOTTOM_LEFT_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BOTTOM_RIGHT_SQUARE, TOP_LEFT_INVISIBLE_SQUARE, INVISIBLE_SQUARE],
  [INVISIBLE_SQUARE, INVISIBLE_SQUARE, TOP_RIGHT_INVISIBLE_SQUARE, BOTTOM_LEFT_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BLANK_SQUARE, BOTTOM_RIGHT_SQUARE, TOP_LEFT_INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE],
  [INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE, TOP_RIGHT_INVISIBLE_SQUARE, BOTTOM_LEFT_SQUARE, BOTTOM_SQUARE, BOTTOM_RIGHT_SQUARE, TOP_LEFT_INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE],
  [INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE, TOP_RIGHT_INVISIBLE_SQUARE, SQUARE_O, TOP_LEFT_INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE, INVISIBLE_SQUARE]]
