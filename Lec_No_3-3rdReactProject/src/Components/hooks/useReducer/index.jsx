import { useReducer } from "react"

export const ReducerComp = () =>
{
    //const [count, setCount] = useState(0);
    const reducer = (state, action) =>
    {
        // console.log(state.action);
        // if(action.type == "INCREMENT")
        // {
        //     return {...state, count: state.count + 1};
        // }
        // if(action.type == "DECREMENT")
        // {
        //     return {...state, count: state.count - 1};
        // }
        // if(action.type == "RESET")
        // {
        //     return {...state, count: state.count = 0};
        // }

        switch(action.type)
        {
            case "INCREMENT":
                return {...state, count: state.count + state.inc};
            case "DECREMENT":
                return {...state, count: state.count - state.dec};
            case "RESET":
                return {...state, count: state.count = 0};
            default:
                return state;
        }
    };

    const initialState = {
        count: 0,
        inc: 2,
        dec: 2,
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
        <div></div>
            <h1>Hello useReducer...!</h1>
            <h1> Count = {state.count} </h1>
            <button onClick={() => dispatch({type:"INCREMENT"})}> Increment </button>
            <button onClick={() => dispatch({type:"DECREMENT"})}> Decrement </button>
            <button onClick={() => dispatch({type:"RESET"})}> Reset </button>
        </>
    )
}