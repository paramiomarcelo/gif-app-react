import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid }  from './components/GifGrid'
import { Items } from "./components/Items"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ])
    
    const onAddCategory = ( newCategory ) =>{
        if(categories.includes(newCategory)) return
        setCategories([...categories, newCategory])
    }

    const onDeleteCategory = (categoryToDelete) => {
        setCategories((prevCategories) => prevCategories.filter(category => category !== categoryToDelete))
    }


    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory 
                onNewCategory={event => onAddCategory(event)}
            />

            { categories.map( ( category ) => 
                <Items  key={category} category={category} onDeleteCategory={onDeleteCategory} />
            )}
            
            { categories.map( ( category ) => 
                <GifGrid key={ category } category={ category }/>
            )}
                
                
        </>
    )
}
