export const walkThroughInput = {
  arena: {
    corner1: {
      x: -3,
      y: -3,
    },
    corner2: {
      x: 3,
      y: 3,
    },
  },
  location: {
    x: 0,
    y: 0,
  },
  heading: 'north',
  directions: ['forward', 'left', 'forward', 'right', 'forward', 'right', 'forward', 'forward', 'forward'],
};

export const walkThroughExpected = {
  status: 'ok',
  location: {
    x: 2,
    y: 2,
  },
  heading: 'east',
  path: ['forward', 'left', 'forward', 'right', 'forward', 'right', 'forward', 'forward', 'forward'],
};

export const errorInput = {
  location: {
    x: 0,
    y: 0,
  },
  heading: 'north',
  arena: {
    corner1: {
      x: -4,
      y: -4,
    },
    corner2: {
      x: 4,
      y: 4,
    },
  },
  directions: ['forward', 'jump'],
};

export const errorExpected = {
  status: 'error',
  location: {
    x: 0,
    y: 1,
  },
  heading: 'north',
  path: ['forward', 'jump'],
};

export const crashInput = {
  location: {
    x: 0,
    y: 0,
  },
  heading: 'north',
  arena: {
    corner1: {
      x: -4,
      y: -4,
    },
    corner2: {
      x: 4,
      y: 4,
    },
  },
  directions: ['forward', 'forward', 'forward', 'right', 'forward', 'left', 'forward', 'forward', 'right'],
};

export const crashExpected = {
  status: 'crash',
  location: {
    x: 1,
    y: 4,
  },
  heading: 'north',
  path: ['forward', 'forward', 'forward', 'right', 'forward', 'left', 'forward'],
};
