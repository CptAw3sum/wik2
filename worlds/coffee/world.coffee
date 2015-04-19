class Thing
    constructor: (@id, @c) ->

    find: (id) -> 
        (i for i in this.c when i.id = id)[0]


class Log
    d: "A wooden log"

class FirePlace extends Thing
    lit: false
    light: -> 
        this.lit = true
        'The fire is lit'

w = []

O = (id, c) -> 
    t = o(id, c)
    w.push t

o = (id, c) -> 
    new Thing(id, c)



O 'Home', [
    o 'Living Room', [
        new FirePlace '', [
            new Log
            new Log
        ]
    ]
    o 'Hall'

]


###########
# Framework
###########


find = (id) -> 
    (i for i in w when i.id = id)[0]
