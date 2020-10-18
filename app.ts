const person: {
    name: string,
    age: number,
    hobbies: string[]
} = {
    name: 'Nikolai',
    age: 20,
    hobbies: ['Sports', 'hobbies']
}

let favoriteActivities: any[];
favoriteActivities = ["Sports", 1];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}