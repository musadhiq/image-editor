const Settings = {
    Filters: [
        {
        id:1,
        property:"brightness",
        default:1,
        value:1,
        min:0,
        max:3,
        step:0.01,
        percent: 40,
    },
    {
        id:2,
        property:"saturate",
        default:100,
        value:100,
        min:0,
        max:200,
        step:2,
        percent:50,
    },
    {
        id:3,
        property:"contrast",
        default:100,
        value:100,
        min:50,
        max:150,
        step:1,
        percent:50,
    },
    {
        id:4,
        property:"sepia",
        default:0,
        value:0,
        min:0,
        max:100,
        step:1,
        percent:0,
    },
    {
        id:5,
        property:"black/white",
        default:0,
        value:0,
        min:0,
        max:100,
        step:1,
        percent:0,
    }
    ],
    overlay: "Image Overlay",
    overlayPosition :{
    x:0,
    y:0
    }
}

const filterReducer = (state=Settings,action)=>{
    switch(action.type){
        case "CHANGE_FILTER":
            const Index = state.Filters.findIndex((item)=>item.property === action.property);
            const newArray = state.Filters.map((el)=>{
                return el
            })
            
            newArray[Index].value = action.payload;
            newArray[Index].percent = Math.floor(((action.payload - newArray[Index].min) * 100) / (newArray[Index].max - newArray[Index].min));
            return {...state, Filters:newArray};
        case "RESET_FILTERS":
            const Arr =  state.Filters.map((item)=>{
                    item.value = item.default;
                    item.percent = Math.floor(((item.value - item.min) * 100) / (item.max - item.min));
                    return item
            })
            return {...state, Filters:Arr}

        case "CHANGE_OVERLAY":
            return {...state, overlay:action.payload}
        case "UPDATE_OVERLAY_POSITION":
            return {...state, overlayPosition:action.payload}
        case "UPDATE_SETTINGS":
            return {...action.payload}
        default:
            return state;

    }
}

export default filterReducer;