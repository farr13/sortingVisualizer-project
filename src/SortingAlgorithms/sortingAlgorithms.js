import { quick_sort_animations } from "../SortingVisualizer/SortingVisualizer.jsx";

export const bubbleSortAlgorithm = array => {
    /*
    This function implements the bubbleSort sorting algorithm
    :param: array: An array of integers
    :returns: Nested array containing 2 arrays at each index. the first array containing two 
    indexes and the second array containing there corresponding values
    */
    let animations = [];
    let size = array.length;
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                animations.push([[j, j+1], [array[j], array[j+1]]]);
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

            }
        }
    }
    return animations;
}

export const selectionSortAlgorithm = array => {
    /*
    This function implements the selectionSort sorting algorithm
    :param: array: An array of integers
    :returns: Array sorting in ascending order
    */
    let temp = 0;
    let animations = [];
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i; j < array.length; j++) {
            animations.push([[0, 0], [array[0], array[0]]]); // Meant to simulate wating for the loop to find the correct value
            if (array[min] > array[j]) {
                min = j;
            }
        }
        animations.push([[i, min], [array[i], array[min]]]);
        temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return animations;
}

function partition(array, start, end) {
    /*
    This is a helper function for the quickSort function. 
    Takes an array and returns a pivot point withing the array
    :param1: array: An array of integers
    :param2: start: The first index of the array
    :param3: end: The last index of the array
    :returns: integer index of pivot point
    */
    let pivot = array[end];
    let i = start - 1;
    let temp = 0;
    for(let j = start; j <= end - 1; j++) {
        if(array[j] < pivot) {
            i++;
            quick_sort_animations.push([[i, j], [array[i], array[j]]]);
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        else {
            quick_sort_animations.push([[0, 0], [array[0], array[0]]]); // Meant to simulate wating for the loop to find the correct value
        }
    }
    i++;
    quick_sort_animations.push([[i, end], [array[i], array[end]]]);
    temp = array[i];
    array[i] = array[end];
    array[end] = temp;

    return i;
}

export const quickSortAlgorithm = (array, start, end) => {
    /*
    This recusrive function implements the quickSort sorting algorithm
    :param1: array: An array of integers
    :param2: start: The first index of the array
    :param3: end: The last index of the array
    :returns: Array sorted in ascending order
    */

    if(end <= start) return; //base case

    let pivot = partition(array, start, end);
    quickSortAlgorithm(array, start, pivot - 1);
    quickSortAlgorithm(array, pivot + 1, end);
}

export const insertionSortAlgorithm = array => {
    /*
    This function implements the insertionSort sorting algorithm
    :param: array: An array of integers
    :returns: Array sorting in ascending order
    */
    let animations = [];
    for(let i = 1; i < array.length; i++){
        let temp = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > temp){
            animations.push([j + 1, array[j]])
            array[j + 1] = array[j];
            j--;
        }
        animations.push([j + 1, temp])
        array[j + 1] = temp
    }
    return animations;
}