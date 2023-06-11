function merge(arr1: number[], arr2: number[]): number[] {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

export default function merge_sort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = merge_sort(arr.slice(0, mid));
    let right = merge_sort(arr.slice(mid));

    return merge(left, right);
}
