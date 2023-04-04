// q1
// function fib (num){
    
//     if (num<2) {
//         return num;
//     }
//     else {
//         return fib(num-1) + fib(num-2);
// }

// }
// console.log(fib(9));



// q2   ABCD => BCDA => CDAB => DCBA
// failed attempt
// let i = "ABCD";
// function reverse(i) {
//     return i ? reverse(i.substr(1)) + i[0] : i;
// }
// console.log(reverse(i));


// drobii 

// let arr = [1, 2, 3, 4, 5, 10]
// let sum = 0
// let i = 0
// function sumArr(arr) {

//     if (i >= arr.length) {
//         return;
//     }
//     sum += arr[i++]
//     sumArr(arr)
//     return sum
// }
// console.log(sumArr(arr));

// ----------------------------------- by use for ------------------

// let str = "hi"
// let news = ""
// function revers(str) {
//     for (let i = str.length - 1; i >= 0; i--) {
//         news += `${str[i]}`
//     }
//     console.log(news);
// }
// ------------------//










// q3

// let str = "ABCD"
// let news = ""
// let i2 = str.length - 1
// function revers(str) {
//     if (i2 < 0) {
//         return 1
//     }
//     news += `${str[i2--]}`
//     revers(str)
//     return news
// }

// console.log(revers(str)); 


//  Q1 DATA Structure ------------------------ 3 April 2023

// const stack = [1,3,2];
// const minStack = [1,3];

// function myPush(num){
//     stack.push(num);
//     if (minStack.length === 0 || num <= minStack[minStack.length - 1]) {
//         minStack.push(num);
//     }
// }
// function getMin(){
//     return minStack[minStack.length - 1];
// }

// myPush(1);
// myPush(2);
// myPush(3);
// myPush(4);
// myPush(5);
// console.log(getMin());

// Q2// S = [1, 2, 3, 4, 5] ==> [5,4,3,2,1]
// let q = [2, 4, 6, 8, 10];




// function rQ(q) {
//     let sub = [];
//     while (q.length > 0) {
//         sub.push(q.shift());
//     }
//     while (sub.length > 0) {
//         q.push(sub.pop());
//     }
//     return q;
// }

// console.log(rQ(q));


// let q = [ 2 , 4 , 6 , 8 , 10 ];
// function re(q){
//     let sub =[];
//     while (q.lenght > 0){
//         sub.push(q.shift());
//     }
//     while (sub.length > 0){
//         q.push(sub.pop());
// }
//      return q;
// }
// console.log(re(q));

// class Queue{
      
//     constructor()
//     {
//         this.s1 = [];
//         this.s2 = [];
//     }
      
//     enQueue(x)
//     {
          
    //     // Move all elements from s1 to s2 
    //     while (this.s1.length != 0)
    //     { 
    //         this.s2.push(this.s1.pop()); 
    //         //s1.pop(); 
    //     } 
      
    //     // Push item into s1 
    //     this.s1.push(x); 
      
    //     // Push everything back to s1 
    //     while (this.s2.length != 0) 
    //     { 
    //         this.s1.push(this.s2.pop()); 
    //         //s2.pop(); 
    //     } 
    // }
      
    // // Dequeue an item from the queue  
    // deQueue() 
    // {
          
    //     // If first stack is empty 
    //     if (this.s1.length == 0) 
    //     { 
    //         document.write("Q is Empty"); 
    //     } 
      
    //     // Return top of s1 
    //     let x = this.s1[this.s1.length - 1]; 
    //     this.s1.pop(); 
    //     return x; 
    // }
    // }
      
    // // Driver code
    // let q = new Queue(); 
    // q.enQueue(1); 
    // q.enQueue(2); 
    // q.enQueue(3); 
    // console.log(q); 
    // document.write(q.deQueue() + "<br>"); 
    // document.write(q.deQueue() + "<br>");
    // document.write(q.deQueue() + "<br>");
 


    // -----------------------------------------------//

class Node{
    constructor(item){
        this.item = item;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    append(item){
        // if list is empty
         if (this.head == null)
        {
         // assign new node to head
         this.head =new Node(item);
        } else {
         // else , loop through list items , until we reach the last elements
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        
         // assign new node to next value of last node
        currentNode.next = new Node(item);
        
        }this.length++;

    }
    insert (position, item){
    // check if position is within boundries
    if (position < 0 || position > this.length ) {
      return false;
    }

    // define new node with item 
    let newNode = new Node(item);
    let i = 0;
    let currentNode = this.head;
    let previous = this.head;

    //if position is zero 
    if (position === 0) {
      // assign next of new node to head 
      newNode.next =  this.head;   
       // assign head to new node
       this.head = newNode;}
    // define i to keep tarck of items position 
    else {
         // loop over items until i = positions
         while (i < position){
         // keep teack of two values * current node and previous node
         previous = currentNode;
         currentNode = currentNode.next;
         i++;
    }
    // once u find position
     // change next of previous to point to new node 
   previous.next= newNode; 
   // change next of new node to point to current node
   newNode.next= currentNode;
}

    // update length  
    this.length++; 
    return true; 
}
}


let LinkedListObject  = new LinkedList();
LinkedListObject.append(1)
LinkedListObject.append(2)

LinkedListObject.append(4)
LinkedListObject.append(5)
LinkedListObject.insert(2 , 3)
LinkedListObject.insert(3 , 6)
console.log(LinkedListObject);







