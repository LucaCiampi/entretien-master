// Exercice 1
// Comparez deux tableaux et renvoyez un nouveau tableau avec tous les éléments trouvés uniquement dans l'un des deux tableaux donnés, mais pas les deux.
// En d'autres termes, renvoie la différence symétrique des deux tableaux.
// Remarque : Vous pouvez renvoyer le tableau avec ses éléments dans n'importe quel ordre.

// Exemple : ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
function arrayDiff(arr1, arr2) {
    // TODO
    const newArr = [];
    return newArr;
}

const ex1 = arrayDiff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
document.getElementById('exercice1').value = ex1.toString();

// Exercice 2
// Effectuez une recherche et un remplacement sur la phrase en utilisant les arguments fournis et renvoyez la nouvelle phrase.
//
// Le premier argument est la phrase sur laquelle effectuer la recherche et le remplacement.
// Le deuxième argument est le mot que vous allez remplacer (avant).
// Le troisième argument est ce que vous allez remplacer le deuxième argument par (après).
//
// Remarque : Préservez la casse du premier caractère du mot d'origine lorsque vous le remplacez.
// Par exemple, si vous voulez remplacer le mot Livre par le mot chien, il doit être remplacé par Chien
//
// Exemple : replaceText("He is Sleeping on the couch", "Sleeping", "sitting") devrait retourner "He is Sitting on the couch".
function replaceText(str, before, after) {
    // TODO
    return str;
}

const ex2 = replaceText('Let us go to the store', 'store', 'mall');
document.getElementById('exercice2').value = ex2.toString();

// Exercice 3
// Écrivez une fonction qui prend au moins deux tableaux et renvoie un nouveau tableau de valeurs uniques dans l'ordre des tableaux fournis à l'origine.
// En d'autres termes, toutes les valeurs présentes dans tous les tableaux doivent être incluses dans leur ordre d'origine, mais sans doublons dans le tableau final.
// Les numéros uniques doivent être triés selon leur ordre d'origine, mais le tableau final ne doit pas être trié par ordre numérique.
// Vérifiez les tests d'assertion pour des exemples.

// Exemple : mergeSet([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
function mergeSet(arr) {
    // TODO
    return arr;
}

const ex3 = mergeSet([1, 3, 2], [5, 2, 1, 4], [2, 1]);
document.getElementById('exercice3').value = ex3.toString();

// Exercice 4
// Vérifiez si le prédicat (deuxième argument) est véridique sur tous les éléments d'une collection (premier argument).
//
// En d'autres termes, on vous donne une collection de tableaux d'objets. Le prédicat pre sera une propriété d'objet et vous devrez retourner true si sa valeur est true. Sinon, renvoie faux.
// En JavaScript, les valeurs de vérité sont des valeurs qui se traduisent par vrai lorsqu'elles sont évaluées dans un contexte booléen.
//
// Exemple : isTrue([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number") devrait retourner true.
function isTrue(collection, pre) {
    // TODO
    return pre;
}

const ex4 = isTrue([{name: 'Quincy', role: 'Founder', isBot: false}, {
    name: 'Naomi',
    role: '',
    isBot: false
}, {name: 'Camperbot', role: 'Bot', isBot: true}], 'isBot');
document.getElementById('exercice4').value = ex4.toString();

// Exercice 5
// Trier un tableau par ordre alphabétique
//
// La fonction de tri prend une collection en entrée, et doit retourner celle ordonnée par ordre alphabétique
function order(collection) {
    // TODO
    return collection;
}

const ex5 = order(['Randonnée', 'VTT', 'Montagne', 'Via Ferrata']);
document.getElementById('exercice5').value = ex5.toString();

// Exercice 6
// Grouper des objets par propriété commune
//
// On cherche à regrouper les films entre eux et les séries entre elles
// En se basant sur la propriété category, on cherche à obtenir le résultat suivant [Movie : Lord of the ring,Predestination],[Show : Sherlock,Black mirror]
// La structure à mettre en place est la suivante :
// [
//     category,
//     items: [{
//         category: string,
//         title: string,
//         toString: () => {}
//     }],
//     toString: () => {}
// ]
//
// Le résultat doit bien être formaté comme suit => [Movie : Lord of the ring,Predestination],[Show : Sherlock,Black mirror]

function groupBy(collection) {
    // TODO
    return collection;
}

const ex6 = groupBy([
    {
        category: 'Movie',
        title: 'Lord of the ring',
        toString: function(){
            return this.title;
        }
    },
    {
        category: 'Movie',
        title: 'Predestination',
        toString: function(){
            return this.title;
        }
    },
    {
        category: 'Show',
        title: 'Sherlock',
        toString: function(){
            return this.title;
        }
    },
    {
        category: 'Show',
        title: 'Black mirror',
        toString: function(){
            return this.title;
        }
    },
]);
document.getElementById('exercice6').value = ex6.toString();