const initialState = []

const ImageSaveReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_IMAGE":
            return [...state, action.payload]
        default:
            return state;
    }
}

export default ImageSaveReducer;