import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  const itemsToDisplay = items.filter((item) => {
    if (search !== ""){
      if (item.name.toLowerCase().includes(search.toLowerCase())){
        return true
      }
    } else {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    }
  
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    setSearch("")
  }

  function onSearchChange(e){
    setSearch(e.target.value)
  }
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} onSearchChange={onSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
