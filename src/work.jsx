function Work(){
    function html(){
        window.location='https://github.com/Srikanth-Sandu/HTML-Assignments';
    }
    function css(){
        window.location='https://github.com/Srikanth-Sandu/CSS-Assignments';
    }
    function javascript(){
        window.location='https://github.com/Srikanth-Sandu/Javascript-assignments';
    }
    function reactjsx(){
        window.location='https://github.com/Srikanth-Sandu/React-JSX-Assignments';
    }
    function react(){
        window.location='https://github.com/Srikanth-Sandu/React-projects';
    }
    return <div id='work'>
        <h1>Assignments and Projects</h1><hr/>
        <div id='assignments'>
            <button type='button' value='Redirect' onClick={()=>{html()}}>HTML</button>
            <button type='button' value='Redirect' onClick={()=>{css()}}>CSS</button>
            <button type='button' value='Redirect' onClick={()=>{javascript()}}>Javascript</button>
            <button type='button' value='Redirect' onClick={()=>{reactjsx()}}>React-JSX</button>
            <button type='button' value='Redirect' onClick={()=>{react()}}>React</button>
        </div>
        
    </div>
}
export default Work;