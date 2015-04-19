var Link = (function () {
    function Link(target) {
    }
    return Link;
})();

var Card = (function () {
    function Card(name) {
        this.name = name;
    }
    return Card;
})();

var c = new Card('Hoo');

var n = document.getElementById('editor');

var data = [
    {
        name: 'Home',
        text: 'A little house in the world of (Uthur)',
        internalLinks: [
            {
                target: 'Living Room'
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
];
