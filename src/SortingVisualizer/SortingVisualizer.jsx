import React from 'react';
import './SortingVisualizer.css';
import { bubbleSortAlgorithm } from '../SortingAlgorithms/sortingAlgorithms.js';
import { quickSortAlgorithm } from '../SortingAlgorithms/sortingAlgorithms.js';
import { selectionSortAlgorithm } from '../SortingAlgorithms/sortingAlgorithms.js';
import { insertionSortAlgorithm } from '../SortingAlgorithms/sortingAlgorithms.js';
import { startTimer } from '../Stopwatch/stopwatch.js';
import { stopTimer } from '../Stopwatch/stopwatch.js';
import { resetTimer } from '../Stopwatch/stopwatch.js';

export let quick_sort_animations = []
const ANIMATION_SPEED_MS = 2
const NUMBER_OF_ARRAY_BARS = 250

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
            array: []
        };
        this.timeoutIDs = [];
        this.isSorting = true;
    }

    clearAllTimeouts() {
        this.timeoutIDs.forEach(timeoutID => clearTimeout(timeoutID));
        this.timeoutIDs = []; // Reset timeout storage
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
        this.isSorting = false;
        this.clearAllTimeouts();
        resetTimer();
        quick_sort_animations.length = 0;
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
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
        if (this.isSorting) return; // Prevent multiple sorts at once
        this.isSorting = true;
        startTimer();

        let sortingArray = this.state.array
        let animations = bubbleSortAlgorithm(sortingArray)
        const arrayBars = Array.from(document.getElementsByClassName('array-bar'));
        for (let i = 0; i < animations.length; i++) {
            let timeoutID = setTimeout(() => {
                if (!this.isSorting) return;
                arrayBars[animations[i][0][0]].style.height = `${animations[i][1][1]}px`;
                arrayBars[animations[i][0][1]].style.height = `${animations[i][1][0]}px`;
                if (i == animations.length - 1) stopTimer();
            }, i * ANIMATION_SPEED_MS)
            this.timeoutIDs.push(timeoutID);
       }
    }

    selectionSort () {
        /*
        This function is used to sort the current state array using selection sort.
        :param: None
        :returns: None
        */
        if (this.isSorting) return; // Prevent multiple sorts at once
        this.isSorting = true;
        startTimer();

        let sortingArray = this.state.array
        let animations = selectionSortAlgorithm(sortingArray)
        const arrayBars = Array.from(document.getElementsByClassName('array-bar'));
        for (let i = 0; i < animations.length; i++) {
             let timeoutID = setTimeout(() => {
                if (!this.isSorting) return;
                arrayBars[animations[i][0][0]].style.height = `${animations[i][1][1]}px`;
                arrayBars[animations[i][0][1]].style.height = `${animations[i][1][0]}px`;
                if (i == animations.length - 1) stopTimer();
             }, i * ANIMATION_SPEED_MS)
             this.timeoutIDs.push(timeoutID);
        }
    }

    quickSort () {
        /*
        This function is used to sort the current state array using quick sort.
        :param: None
        :returns: None
        */
        if (this.isSorting) return; // Prevent multiple sorts at once
        this.isSorting = true;
        startTimer();

        if (quick_sort_animations.length != 0) {quick_sort_animations.length = 0}
        quickSortAlgorithm(this.state.array, 0, this.state.array.length - 1)
        const arrayBars = Array.from(document.getElementsByClassName('array-bar'));
        for (let i = 0; i < quick_sort_animations.length; i++) {
             let timeoutID = setTimeout(() => {
                if (!this.isSorting) return;
                arrayBars[quick_sort_animations[i][0][0]].style.height = `${quick_sort_animations[i][1][1]}px`;
                arrayBars[quick_sort_animations[i][0][1]].style.height = `${quick_sort_animations[i][1][0]}px`;
                if (i == quick_sort_animations.length - 1) stopTimer();
             }, i * ANIMATION_SPEED_MS)
             this.timeoutIDs.push(timeoutID);
        }
    }

    insertionSort () {
        /*
        This function is used to sort the current state array using insertion sort.
        :param: None
        :returns: None
        */
        if (this.isSorting) return; // Prevent multiple sorts at once
        this.isSorting = true;
        startTimer();

        let sortingArray = this.state.array
        let animations = insertionSortAlgorithm(sortingArray)
        const arrayBars = Array.from(document.getElementsByClassName('array-bar'));
        for (let i = 0; i < animations.length; i++) {
             let timeoutID = setTimeout(() => {
                if (!this.isSorting) return;
                arrayBars[animations[i][0]].style.height = `${animations[i][1]}px`;
                if (i == animations.length - 1) stopTimer();
             }, i * ANIMATION_SPEED_MS)
             this.timeoutIDs.push(timeoutID);
        }
    }

    render() {
        /*
        This function is renders the ui of the webpage including the sorting buttons, 
        genereate array button, and the array in terms of a bar graph.
        :param: None
        :returns: None
        */
        const {array} = this.state;
        const sorting = this.isSorting;
        let d = new Date();
        return (
            <div className='array-contain'>
              {array.map((value, idx) => (
                <div className='array-bar' 
                    key={idx}
                    style={{height: `${value}px`}}>
                </div>
              ))}
              <button onClick={() => this.resetArray()}>Generate New Array</button>
              <button onClick={() => this.selectionSort()}>Selection Sort</button>  
              <button onClick={() => this.bubbleSort()}>Bubble Sort</button>  
              <button onClick={() => this.quickSort()}>Quick Sort</button>  
              <button onClick={() => this.insertionSort()}>Insertion Sort</button>
              <div className='stop-watch'>
                <div id='timer'>
                    0:00:00
                </div>
              </div>   
            </div>
        );
    }
}