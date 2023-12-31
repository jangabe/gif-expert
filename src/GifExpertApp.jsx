import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'DBZ']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories ]);
    }

    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>
            
            {/* input */}
            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {categories.map(category => 
                <GifGrid 
                    key={category}
                    category= { category }
                />
            )}

        </>
    )
}
