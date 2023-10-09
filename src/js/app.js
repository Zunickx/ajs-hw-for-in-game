export const character = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
};

export const rulesOfOrder = ['name', 'level'];

export default function orderByProperties(object, rule) {
    let keysOfProperties = [];

    for (const item in object) {
        if (Object.prototype.hasOwnProperty.call(object, item)) {
            if(rule.includes(item) === false) {
                keysOfProperties.push(item);
            }
        }
    }

    keysOfProperties = [...rule, ...keysOfProperties.sort()];

    const sortedProperties = [];

    for(const key of keysOfProperties) {
    sortedProperties.push({key, value: object[key]});
    }
    return sortedProperties;
}