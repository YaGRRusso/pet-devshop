type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObj = (active: MenuOptions) => {
    let menuObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if (active) {
        menuObject[active] = true
    }

    return menuObject;
}