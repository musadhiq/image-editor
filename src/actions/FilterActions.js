export const changeFilters = (data,property) =>{
    return{ type:"CHANGE_FILTER",payload:data,property:property }
}

export const resetFilters = () =>{
    return{ type:"RESET_FILTERS" }
}
export const changeOverlay = (data) =>{
    return{ type:"CHANGE_OVERLAY",payload:data }
}
export const changeOverlayPosition = (data) =>{
    return{ type:"UPDATE_OVERLAY_POSITION",payload:data }
}
