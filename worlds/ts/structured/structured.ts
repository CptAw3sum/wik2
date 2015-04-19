

class Link {

    type: String
    text: String

    constructor(target:String){}

}

class Card {

    text: String;
    internalLinks: Link[];

    constructor(public name: String) { }

}


var c = new Card('Hoo')


var n = document.getElementById('editor')

var data = [

    {
        name : 'Home',
        text : 'A little house in the world of (Uthur)',
        internalLinks : [
            {
                target : 'Living Room'
            }

        ],
        externallLinks: [
            {
                target: 'Your Garden',
                text: 'Door to (Your Garden)'
            },
            {
                target: 'Uthur'
            }


        ]


    }

]