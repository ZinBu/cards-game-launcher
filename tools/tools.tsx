
export const range = (n: number) => Array.from(Array(n).keys());

export const shuffle = (array: any[]) => array.sort(() => Math.random() - 0.5);

export const separateArrayOnParts = (array: any[], parts: number = 3) => {
    const sliceLength = Math.ceil(array.length / parts);
    return range(parts).map((val) => array.slice(sliceLength * val, sliceLength * (val + 1)))
};

export function* cycle(...items: any[]) {
    while(true) {
        yield* items;
    }
}
