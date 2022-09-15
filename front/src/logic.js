import { writable } from 'svelte/store';

export const cardsStore = writable([]);
export const copyCardsStore = writable([]);
export const tagsStore = writable([]);

const getTags = cards => {
    const tags = [...new Set(cards.reduce((previousValue, currentValue) => [...previousValue, ...currentValue.tags], []))];
    return tags.map(tag => Object.create({"name": tag, "selected": false}));
}

const objToArray = (objs) => {
    let array = [];
    for (const obj in objs) {
        let element = objs[obj];
        element.name = obj;
        array.push(element);
    }
    return array;
} 

export const fetchSelect = async (name) => {
    const response = await fetch(name + ".json");
    const jsonData = await response.json();

    tagsStore.set(getTags(jsonData));
    cardsStore.set(jsonData);
    copyCardsStore.set(jsonData);
}
