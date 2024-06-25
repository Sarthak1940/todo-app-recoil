import { atom, selector } from "recoil";

export const titleAtom = atom({
    key: "titleAtom",
    default: ""
})

export const titleSelector = selector({
    key: "titleSelector",
    get: ({ get }) => {
        return get(titleAtom)
    },
})

export const descriptionAtom = atom({
    key: "descriptionAtom",
    default: ""
})

export const descriptionSelector = selector({
    key: "descriptionSelector",
    get: ({ get }) => {
        return get(descriptionAtom)
    },
})

export const todoAtom = atom({
    key: "todoAtom",
    default: []
})

export const filterAtom = atom({
    key: "filterAtom",
    default: ""
})

export const filterSelector = selector({
    key: "filterSelector",
    get: ({ get }) => {
        const todos = get(todoAtom);
        const filter = get(filterAtom);
        if(!filter) return todos;
        else {
            return todos.filter(todo => todo.title.includes(filter) || todo.description.includes(filter))
        }    
    }
})