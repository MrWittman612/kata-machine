function merge(arr1: number[], arr2: number[]): number[] {
    let result: number[] = [];
    let arr1Idx = 0;
    let arr2Idx = 0;

    while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
        if (arr1Idx > arr2Idx) {
            result.push(arr2[arr2Idx]);
            ++arr2Idx;
        } else {
            result.push(arr1[arr1Idx]);
            ++arr1Idx;
        }
    }

    while (arr1Idx < arr1.length) {
        result.push(arr1[arr1Idx]);
        ++arr1Idx;
    }

    while (arr2Idx < arr2.length) {
        result.push(arr2[arr2Idx]);
        ++arr2Idx;
    }

    return result;
}

export default function merge_sort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = merge_sort(arr.slice(0, mid));
    const right = merge_sort(arr.slice(mid));

    return merge(left, right);
}
