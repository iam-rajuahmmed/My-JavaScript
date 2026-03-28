const merbal_heros = ["Thor", "IronMan","Spider Man"]
const dc_heros = ["Super Mane", "Bat Man", "Frash"]

//if i Push DC_ heros in Merbal_ Heros

// merbal_heros.push(dc_heros)

// console.log(merbal_heros);

const all_heros = merbal_heros.concat(dc_heros)

console.log(all_heros);

const anotherArry = [...merbal_heros, ...dc_heros]

console.log(anotherArry);

anotherArry.push('Falguni')
console.log(anotherArry);
