
const bookListActions ={
    addToList:"addToList",
    removeFromList:"removeFromList",
    emptyList:"emptyList"
    
};

function ingameShopReducer(itemList, {type, item}){
    switch(type){
        case itemListActions.addToList:
            return [...itemList, item]        
        case itemListActions.removeFromList:
            let newList = itemList.slice()
            for (let shopItem of newList){
                if(shopItem.id === item.id){
                    newList.splice(newList.indexOf(shopItem),1)
                    return newList
                };
            }; return newList       
        case itemListActions.emptyList:
            return []
        default: 
            throw new Error('I am not a teapot!')

    };

};

export {
    ingameShopReducer,
    itemListActions
}