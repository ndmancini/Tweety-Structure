const _ = require('lodash');
let data = [];
let id = 0;

module.exports = { add: add, list: list, find: find };

function add (name, content) {
    data.push({ id: id, name: name, content: content });
    id++;
}

function list () {
    return _.cloneDeep(data);
}

function find (properties) {
    return _.cloneDeep(_.filter(data, properties));
}

const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
    const fakeFirsts = ['Toni', 'Guille', 'Santi', 'Facu', 'Alan', 'Pinki', 'Tincho', 'Solano', 'R2D2'];
    const fakeLasts = ['Scanlan', 'Aszyn', 'Tralice', 'Velasco', 'Sainz', 'Palacio', 'Palacios', 'Lidueña', 'Fisicaro', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
    const awesome_adj = ['increible', 'emocionante', 'increible', 'gracioso', 'dulce', 'cool',  'sorprendente', 'impresionante'];
        return "Plataforma 5 es " + randArrayEl(awesome_adj) + "! Los profesores simplemente son " + randArrayEl(awesome_adj) + ". #P5Love #codedreams";
};

for (let i = 0; i < 10; i++) {
    module.exports.add( getFakeName(), getFakeTweet() );
}

//add('pepe', 'tomar alcohol')

//console.log(list())


