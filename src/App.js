import {useMemo, useState} from "react";

import ItemSelection from './ItemSelection';
import getSolutions from './GetSolutions';

import { crops } from './crops';

import "./styles.css"

function App() {
   const cropsArray = Object.values(crops).map(item => {
      return {...item, count: 1};
   });

   const [itemsAvailable, setItemsAvailable] = useState(cropsArray);
   const [itemsSelected, setItemsSelected] = useState([]);

   const findItem = (name) => cropsArray.find(item => item.name === name);

   const handleItemAvailableDblClick = (name) => {
      setItemsAvailable(itemsAvailable.filter(item => item.name !== name));
      setItemsSelected([...itemsSelected, findItem(name)]);
   };

   const handleItemSelectedDblClick = (name) => {
      setItemsSelected(itemsSelected.filter(item => item.name !== name));
      setItemsAvailable([...itemsAvailable, findItem(name)]);
   };

   const handleCountChanged = (itemName, newCount) => {
      setItemsSelected(
         itemsSelected.map(item =>
            item.name === itemName ? {...item, count: newCount } : item
         )
      );
   };

   const itemsWithSolutions = useMemo(() => {
      if (itemsSelected.length > 0) {
         return getSolutions({items: itemsSelected});
      }
      return [];
   }, [itemsSelected]);

   return (
      <div className="crop-calculator">
         <div className="left-column">
            <ItemSelection
               className="items-available"
               items={itemsAvailable}
               onItemDblClick={handleItemAvailableDblClick}
            />
            <ItemSelection
               className="items-selected"
               items={itemsSelected}
               onItemDblClick={handleItemSelectedDblClick}
               onCountChanged={handleCountChanged}
            />
         </div>
         <div className="right-column">
            <div className="diagram-result"></div>
            <div className="calculation-result">
               {itemsWithSolutions.map((item) => (
                  <p key={item.id}>{`${item.name}: ${item.solution}`}</p>
               ))}
            </div>
         </div>
      </div>
   )
}

export default App;
