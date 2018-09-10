export const addChart=(item)=>{
    console.log("adding item",item);
    return{
        type:'add',
        item
    };
}