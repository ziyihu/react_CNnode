import http from "./http";
import qs from "qs";
function getList({page=1,tab="all",limit=10,mdrender=false}){
    return function(dispatch){
        dispatch({
            type:"LIST_LOAD"
        })
        http.get(`/topics?${qs.stringify({page,tab,limit,mdrender})}`)
        .then((res)=>{
            if(res.data.success){
                dispatch({
                    type: "LIST_LOADOVER",
                    data: res.data.data
                })
            }
        })
    }
}

export {getList}