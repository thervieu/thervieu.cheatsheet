import { writable } from 'svelte/store';

export const dataStore = writable([]);
export const tagsStore = writable([]);

const getTags = objects => {
    const tags = [...new Set(objects.reduce((previousValue, currentValue) => [...previousValue, ...currentValue.tags], []))];
    return tags.map(tag => Object.create({"name": tag, "selected": false}));
}

const objToArray = (objs) => {
    let array = [];
    console.log("objToArray");
    for (const obj in objs) {
        let element = objs[obj];
        element.name = obj;
        array.push(element);
    }
    return array;
} 

export const fetchSelect = async (name) => {
    console.log(name);
    const response = await fetch(name + ".json");
    console.log(response.ok);
    const jsonData = await response.json();

    // tagsStore.set(getTags(jsonData));
    dataStore.set(objToArray(jsonData));
}
