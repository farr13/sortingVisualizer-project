import React from 'react';
import './SortingVisualizer.css';
import { bubbleSort } from '../SortingAlgorithms/sortingAlgorithms.js';
import { quickSort } from '../SortingAlgorithms/sortingAlgorithms.js';
import { selectionSort } from '../SortingAlgorithms/sortingAlgorithms.js';
import { insertionSort } from '../SortingAlgorithms/sortingAlgorithms.js';

function randomIntFromInterval(max) {
    /*
    This function is used to generate a random integer from 1 - max.
    :param: int max: The maximum value that can be generated
    :returns: returns the integer that is generated
    */
    return Math.floor(Math.random() * max)
}


export default class SortingVisualizer extends React.Component {
        /*
        This class contains the object for the array visualized.
        */
    constructor(props) {
        super(props);
        
        this.state = {
            array: [],
        };
    }


    componentDidMount() {
        /*
        This function calls the resetArray helper anytime the website is loading/reloaded.
        :param: None
        :returns: None
        */
        this.resetArray();
    }

    resetArray() {
        /*
        This function is used to generate an array of 100 integers from values 0 - 450 in the current state.
        :param: None
        :returns: None
        */
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(450));
        }
        this.setState({array});
    }

    bubbleSort () {
        /*
        This function is used to sort the current state array using bubble sort and 
        visualizes every step of the sorting algorithm.
        :param: None
        :returns: None
        */
       let sortingArray = this.state.array
       let animations = bubbleSort(sortingArray)
       const arrayBars = Array.from(document.getElementsByClassName('array-bar'));
       for (let i = 0; i < animations.length; i++) {
            setTimeout(() => {
                setTimeout(() => {
                    arrayBars[animations[i][0][0]].style.height = `${animations[i][1][1]}px`;
                    arrayBars[animations[i][0][1]].style.height = `${animations[i][1][0]}px`;
                }, i * 3)
            }, i * 3)
       }
    }

    selectionSort () {
        /*
        This function is used to sort the current state array using selection sort.
        :param: None
        :returns: None
        */
        console.log("Unsorted: " + this.state.array)
        selectionSort(this.state.array);
        console.log("Sorted: " + this.state.array)
    }

    quickSort () {
        /*
        This function is used to sort the current state array using quick sort.
        :param: None
        :returns: None
        */
        console.log("Unsorted: " + this.state.array)
        quickSort(this.state.array, 0, this.state.array.length - 1)
        console.log("Sorted: " + this.state.array)
    }

    insertionSort () {
        /*
        This function is used to sort the current state array using insertion sort.
        :param: None
        :returns: None
        */
        console.log("Unsorted: " + this.state.array)
        insertionSort(this.state.array, 0, this.state.array.length - 1)
        console.log("Sorted: " + this.state.array)
    }

    render() {
        /*
        This function is renders the ui of the webpage including the sorting buttons, 
        genereate array button, and the array in terms of a bar graph.
        :param: None
        :returns: None
        */
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
              <button on onClick={() => this.selectionSort()}>Selection Sort</button>  
              <button on onClick={() => this.bubbleSort()}>Bubble Sort</button>  
              <button on onClick={() => this.quickSort()}>Quick Sort</button>  
              <button on onClick={() => this.insertionSort()}>Insertion Sort</button>     
            </div>
        );
    }
}