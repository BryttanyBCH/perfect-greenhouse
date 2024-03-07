import "./styles.css"

function ItemSelection({ items, className, onItemDblClick }) {
   return (
      <div className={className}>
         <ul>
            {items.map((item, index) => (
               <li key={index} onDoubleClick={() => onItemDblClick ? onItemDblClick(item) : undefined}>
                  {item}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default ItemSelection;