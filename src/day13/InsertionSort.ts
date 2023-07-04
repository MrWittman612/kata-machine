/*
 * Big 0 time complexity
 * log(n): Best case
 * log(n^2): worst case
 *
 */

export default function insertion_sort(arr: number[]): void {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
