import "./App.css";
let time = new Date();
time = time.getHours();
let greet;
const css = {};
if((time >= 0 && time < 4) || (time >=19 && time < 24)  ){
    greet = "GOOD NIGHT";
    css.color="CYAN";
}else if(time >=4 && time < 12){
    greet = "GOOD MORNING";
    css.color="green";
}else if (time >= 12 && time < 18){
    greet = "GOOD EVENING";
    css.color="red";
}
function App(){
  return( 
  <div>  
       <h1>HELLO THERE 🖐 <span style={css}>{greet}</span></h1>
  </div>
  );
}
export default App;