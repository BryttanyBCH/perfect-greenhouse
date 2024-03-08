import "./styles.css"

function ItemSelection({ items, className, onItemDblClick }) {
   return (
      <div className={className}>
         <ul>
            {items.map((item, index) => (
               <li key={index} onDoubleClick={() => onItemDblClick ? onItemDblClick(item.name) : undefined}>
                  <img src={"logo512.png"} alt={item.name} />
                  <span>{item.name}</span>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default ItemSelection;