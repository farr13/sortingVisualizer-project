import React from 'react';
import './SortingVisualizer.css';
import { bubbleSort } from '../SortingAlgorithms/sortingAlgorithms';

function randomIntFromInterval(max) {
    return Math.floor(Math.random() * max)
}

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(450));
        }
        this.setState({array});
    }

    bubbleSort () {
        const testArray = this.state.array.sort();
        const sortedArray = bubbleSort(this.state.array);

        /*This code checks if the arrays are equal to see if the algorithm worked.
        Aquired code from: https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/*/
        if (JSON.stringify(sortedArray) == JSON.stringify(testArray))
            console.log("True");
        else
            console.log("False");
    }

    selectionSort () {}

    quickSort () {}

    insertionSort () {}

    mergeSort () {}

    countingSort () {}

    radixSort () {}

    heapSort () {}

    shellSort () {}

    render() {
        const {array} = this.state;

        return (
            <div className='array-contain'>
              {array.map((value, idx) => (
                <div className='array-bar' 
                key={idx}
                style={{height: `${value}px`}}>
                </div>
              ))}
              <button on onClick={() => this.resetArray()}>Generate New Array</button>
              <button on onClick={() => this.resetArray()}>Selection Sort</button>  
              <button on onClick={() => this.bubbleSort()}>Bubble Sort</button>  
              <button on onClick={() => this.resetArray()}>Quick Sort</button>  
              <button on onClick={() => this.resetArray()}>Insertion Sort</button>  
              <button on onClick={() => this.resetArray()}>Merge Sort</button>  
              <button on onClick={() => this.resetArray()}>Counting Sort</button>  
              <button on onClick={() => this.resetArray()}>Radix Sort</button>  
              <button on onClick={() => this.resetArray()}>Bucket Sort</button>  
              <button on onClick={() => this.resetArray()}>Heap Sort</button>  
              <button on onClick={() => this.resetArray()}>Shell Sort</button>      
            </div>
        );
    }
}