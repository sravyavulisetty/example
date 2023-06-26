// export default function App(){
//   return (
//     <div className="Toolbar" onClickCapture={() => {
//       alert("you clicked on parent")
//     }}>
//       <Button onClick={() => alert("clicked on child1")}>
//         child1
//       </Button>
//       <Button onClick={() => alert("clicked on child2")}>
//         child2
//       </Button>
//     </div>
//   );
// }
// function Button({onClick, children}){
//   return (
//     <button onClick={e => {
//       e.stopPropagation();
//       onClick();
//     }}>
//       {children}
//     </button>

//   )
// // }
// function example(){
//   console.log("clicked")
// }
// export default function App(){
//   return (
//   <button onClick={example()}>click me</button>
//   )
// }
























// const people = 
//   [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//   }, {
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',  
//   }, {
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//   }];
// export default function App(){
//   const chemists = people.filter(person => person.profession==='chemist')
//   const listItems = chemists.map((person) => 
//   <li>
//     <p>
//       {person.name} : {person.profession}
//     </p>
//   </li>)
//   return (
//     <ul>{listItems}</ul>
//   )
// }

//let guest = 0;

// function Cup() {
//   // Bad: changing a preexisting variable!
//   guest = guest + 1;
//   return <h2>Tea cup for guest #{guest}</h2>;
// }
// function Button({onSmash, children}){
//   return (
//     <button onClick={onSmash}>
//       {children}
//     </button>
//   )
// }
// function PlayButton({movieName}){
//   function handlePlay(){
//     alert(`playing ${movieName}`);
//   }
//   return (
//     <Button onClick={handlePlay}>
//       play "{movieName}"
//     </Button>
//   )
// }
// function UploadButton(){
//   return (
//     <Button onClick={() => alert("uploading")}>
//       upload image
//     </Button>
//   )
// }
// export default function App() {
//   return (
//     <div>
//       <PlayButton movieName="delivery service" />
//       <UploadButton />
//     </div>
//   );
// }
// export default function App(){
//   return (
//     <div>
//       <Button onSmash={() => alert("playing!")}>
//         play movie
//       </Button>
//       <Button onSmash={() => alert("uploading")}>
//         upload image
//       </Button>
//     </div>
//   )
// }
// import React from 'react';

// export default function App() {

//   function sayHello() {
//     alert('Hello!');
//   }
  
//   return (
//     <button onClick={sayHello}>
//       Click me!
//     </button>
//   );
// }
import React from 'react';

function App() {
  return (
    <button onClick= {() => alert('hello')}>
      Click me!
    </button>
  );
}

export default App;
