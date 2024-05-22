/*const heading =React.createElement("h1",{id:'heading',xyz:"placehold",className:"myh1"},"hello this is react in js scrpit")
console.log(heading)*/

/*
<div id="parent">
<div id="children">
    <h1> this is inside child</h1>
    <h2> this is inside child</h2>
</div>
<div id="children2">
    <h1> this is inside child</h1>
    <h2> this is inside child</h2>
</div>
</div>*/
const heading=React.createElement("div",{id:'parent'},[React.createElement("div",{id:'children'},
[React.createElement("h1",{},"this is inside child"),
React.createElement("h2",{},"this is inside child"),]),React.createElement("div",{id:'children2'},
[React.createElement("h1",{},"this is inside child"),
React.createElement("h2",{},"this is inside child"),])]);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)