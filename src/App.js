import React, {useState} from 'react';
function App(){

    const [click,setClick] = useState(0);
    const [isEven, setIsEven] = useState('Whole Number');

    const checkHandler =() =>{
        setClick((click=>click+1))
        if(click%2 === 0)
        {
            setIsEven('Even')
        }
        else if(click%2 === 1)
        {
            setIsEven('Odd')
        }
        else
        {
            setIsEven('Whole Number')
        }
    }
   


    return(

        <div>
            <h1>{click}</h1>

            <h2>{isEven}</h2>
            <button onClick={()=> checkHandler()}>
                click me
            </button>
        </div>

    );
}
export default App;