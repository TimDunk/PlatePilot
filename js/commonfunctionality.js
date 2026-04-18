function handleToggleFavorite(id,isFavourite){
    try {
        let storedString=sessionStorage.getItem("FavouriteVendors");
        const parsedArray = storedString ? JSON.parse(storedString) : [];
        let fvSet=new Set(parsedArray);
        if(isFavourite){ //remove from favourit 
            fvSet.delete(Number(id))
        }else{ //add to favourit
            fvSet.add(Number(id));
        }
        const fvArray=[...fvSet];
        sessionStorage.setItem("FavouriteVendors",JSON.stringify(fvArray));  
    } catch (error) {
        console.error(error);
    } finally {
    }        
}

function getFavoriteIds(){
    let storedString=sessionStorage.getItem("FavouriteVendors");
    const parsedArray = storedString ? JSON.parse(storedString) : [];
    return parsedArray;
}