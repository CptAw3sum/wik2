class Thing
    constructor: (@id) ->

    find: (id) -> 
        (i for i in this.c when i.id = id)[0]


class Log
    d: "A wooden log"

class FirePlace extends Thing
    lit: false
    light: -> 
        this.lit = true
        'The fire is lit'





###########
# Framework
###########

w = []

o = undefined

obj = (id) -> 
    o = new Thing
    w.push o

d = (text) ->
    o.d = text

find = (id) -> 
    (i for i in w when i.id = id)[0]


o = new Thing 'Home'
o.d = 'A little house'
o.add 



d 'A little house'
sub 'Living room'
sub new FirePlace
sub new Log
sub new Log
sub new Log