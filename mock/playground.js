let playgrounds = [
  {
    id: 1,
    players: [{
      id: 0,
      x: 0,
      y: 0,
      dir: "RIGHT",
      role: "SPECIALIST",
    }],
    portals: [{
      coo: { x: 3, y: 0 }, dest: { x: 0, y: 2 }, isActive: true,
    }, {
      coo: { x: 0, y: 2 }, dest: { x: 3, y: 0 }, isActive: true,
    }],
    locks: [{
      coo: { x: 0, y: 1 },
      controlled: [
        { x: 2, y: 0 },
        { x: 2, y: 2 },
      ],
    }, {
      coo: { x: 1, y: 3 },
      controlled: [
        { x: 2, y: 0 },
        { x: 2, y: 2 },
      ]
    }],
    grid: {
      grid: [
        ["OPEN", "OPEN", "OPEN", "OPEN", "MOUNTAIN"],
        ["LOCK", "OPEN", "OPEN", "OPEN", "STONE"],
        ["OPEN", "OPEN", "OPEN", "OPEN", "MOUNTAIN"],
        ["OPEN", "LOCK", "OPEN", "OPEN", "STONE"],
      ],
      layout: [
        ["NONE", "BEEPER", "PLATFORM", "PORTAL", "NONE"],
        ["NONE", "NONE", "NONE", "NONE", "NONE"],
        ["PORTAL", "NONE", "PLATFORM", "GEM", "NONE"],
        ["NONE", "NONE", "NONE", "NONE", "NONE"],
      ],
      layout2s: [
        [ {color: "GREY", level: 2},
          {color: "ALICEBLUE", level: 2},
          {color: "YELLOW", level: 1},
          {color: "ORANGE", level: 2},
          {color: "GREEN", level: 2},
        ],
        [ {color: "WHITE", level: 2},
          {color: "BLACK", level: 2},
          {color: "WHITE", level: 2},
          {color: "BLACK", level: 2},
          {color: "WHITE", level: 2},
        ],
        [ {color: "SILVER", level: 2},
          {color: "GOLD", level: 2},
          {color: "BEIGE", level: 3},
          {color: "PINK", level: 2},
          {color: "CYAN", level: 2},
        ],
        [ {color: "WHITE", level: 2},
          {color: "BLACK", level: 2},
          {color: "WHITE", level: 2},
          {color: "BLACK", level: 2},
          {color: "WHITE", level: 2},
        ],
      ]
    }
  },
  {
    id: 2,
    players: [{
      id: 1, x: 0, y: 0, dir: "RIGHT", role: "PLAYER",
    }],
    portals: [],
    locks: [],
    grid: {
      grid: [
        [ "OPEN", "OPEN", "BLOCKED", "OPEN", "OPEN", "BLOCKED", "BLOCKED", "BLOCKED", "OPEN" ],
        [ "BLOCKED", "OPEN", "OPEN", "OPEN", "OPEN", "OPEN", "OPEN", "OPEN", "OPEN" ],
        [ "OPEN", "OPEN", "BLOCKED", "BLOCKED", "OPEN", "BLOCKED", "OPEN", "BLOCKED", "OPEN"],
        [ "BLOCKED", "OPEN", "OPEN", "BLOCKED", "BLOCKED", "OPEN", "OPEN", "BLOCKED", "BLOCKED"],
        [ "BLOCKED", "OPEN", "BLOCKED", "BLOCKED", "BLOCKED", "BLOCKED", "OPEN", "BLOCKED", "BLOCKED"],
      ],
      layout: [
        [ "NONE", "NONE", "NONE", "OPENEDSWITCH", "NONE", "NONE", "NONE", "NONE", "NONE" ],
        [ "NONE", "CLOSEDSWITCH", "NONE", "CLOSEDSWITCH", "NONE", "CLOSEDSWITCH", "NONE", "CLOSEDSWITCH", "NONE" ],
        [ "GEM", "NONE", "NONE", "NONE", "GEM", "NONE", "NONE", "NONE", "GEM"],
        [ "NONE", "OPENEDSWITCH", "GEM", "NONE", "NONE", "GEM", "CLOSEDSWITCH", "NONE", "NONE"],
        [ "NONE", "GEM", "NONE", "NONE", "NONE", "NONE", "GEM", "NONE", "NONE"],
      ],
      layout2s: [
        [ {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0},
        ],
        [ {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0},
        ],
        [ {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0},
        ],
        [ {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0},
        ],
        [ {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0},
        ],
      ]
    }
  }, {
    id: 3,
    players: [{
      id: 1, x: 0, y: 0, dir: "DOWN", role: "PLAYER",
    }, {
      id: 2, x: 9, y: 0, dir: "DOWN", role: "PLAYER",
    }],
    portals: [{
      coo: { x: 0, y: 5 }, dest: { x: 4, y: 5 }, isActive: true,
    },{
      coo: { x: 4, y: 5 }, dest: { x: 0, y: 5 }, isActive: true,
    },{
      coo: { x: 9, y: 5 }, dest: { x: 6, y: 0 }, isActive: true,
    },{
      coo: { x: 6, y: 0 }, dest: { x: 9, y: 5 }, isActive: true,
    }],
    locks: [
    ],
    grid: {
      grid: [
        [ "OPEN", "MOUNTAIN", "MOUNTAIN", "OPEN",    "MOUNTAIN", "BLOCKED", "OPEN", "OPEN", "BLOCKED", "OPEN", ],
        [ "OPEN", "STONE",    "OPEN",     "OPEN",    "OPEN",     "BLOCKED", "OPEN", "OPEN", "BLOCKED", "OPEN", ],
        [ "OPEN", "MOUNTAIN", "MOUNTAIN", "BLOCKED", "OPEN",     "BLOCKED", "OPEN", "OPEN", "BLOCKED", "OPEN", ],
        [ "OPEN", "STONE",    "OPEN",     "OPEN",    "OPEN",     "WATER",   "OPEN", "OPEN", "BLOCKED", "OPEN", ],
        [ "OPEN", "WATER",    "BLOCKED",  "OPEN",    "OPEN",     "WATER",   "OPEN", "OPEN", "BLOCKED", "OPEN", ],
        [ "OPEN", "WATER",    "BLOCKED",  "BLOCKED", "OPEN",     "WATER",   "OPEN", "OPEN", "BLOCKED", "OPEN", ],
      ],
      layout: [
        [ "NONE",         "NONE", "NONE",  "GEM", "NONE",         "NONE", "PORTAL", "NONE", "NONE", "NONE", ],
        [ "CLOSEDSWITCH", "NONE",  "GEM", "NONE", "NONE",         "NONE", "CLOSEDSWITCH", "GEM", "NONE", "GEM", ],
        [ "NONE",         "NONE", "NONE", "NONE", "CLOSEDSWITCH", "NONE", "OPENEDSWITCH", "NONE", "NONE", "NONE", ],
        [ "CLOSEDSWITCH", "NONE",  "GEM", "NONE", "NONE",         "NONE", "CLOSEDSWITCH", "GEM", "NONE", "GEM", ],
        [ "NONE",         "NONE", "NONE",  "GEM", "NONE",         "NONE", "OPENEDSWITCH", "NONE", "NONE", "NONE", ],
        [ "PORTAL",       "NONE", "NONE", "NONE", "PORTAL",       "NONE", "CLOSEDSWITCH", "NONE", "NONE", "PORTAL", ],
      ],
      layout2s: [
        [
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
        ],
        [
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
        ],
        [
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
        ],
        [
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
        ],
        [
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
        ],
        [
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
          {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0}, {color: "WHITE", level: 0},
        ],
      ],
    }
  }
]

let random_playground = 0

export default {
  'get /dev/playground/fetch': (req, res) => {
    // const responseObj = playgrounds[random_playground % playgrounds.length]
    const responseObj = playgrounds[0]
    random_playground += 1
    setTimeout(() => {
      res.json(responseObj)
    }, 1000)
  },
  'post /dev/playground/add': (req, res) => {
    playgrounds = [...playgrounds, {
      ...req.body,
      id: playgrounds.length + 1
    }]
    res.json({
      success: true,
    })
  },
  'delete /dev/playground/:id': (req, res) => {
    let id = parseInt(req.params.id)
    if (id < 5) {
      setTimeout(() => {
        res.json({
          success: false,
        })
      }, 1500)
    } else {
      playgrounds = playgrounds.filter(p => p.id !== id)
      setTimeout(() => {
        res.json({
          success: true,
        })
      }, 1500)
    }
  }
}
