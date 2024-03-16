
import React from 'react';
import GridLayout from 'react-grid-layout';

import "./styles.css"

function Diagram({items}) {

   const rowCount = 10;
   const colCount = 12

   items = items.map((item) => ({
      ...item,
      amountToDraw: Math.round(item.solution * (rowCount * colCount))
   }));


   let layout = [];
   let y = 0;
   let x = 0;

   for (let item of items) {
      for (let j = 0; j < item.amountToDraw; j++) {
         if (x > colCount - 1) {
            y++;
            x = 0;
         }
         if (y > rowCount - 1) {
            console.warn('Ended up with more content than space in the grid. Some items could not be added.');
            break;
         }

         let uniqueId = `${item.id}_${j}`;
         layout.push({i: uniqueId, x: x++, y: y, w: 1, h: 1})
      }
   }

   return (
      <div className="diagram-result">
         <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={48}
            width={12 * 48}
            isDraggable={false}
            isResizable={false}
         >
            {layout.map((layoutItem) => {
               const itemId = layoutItem.i.split('_')[0]; // extract the item id from layoutItem i
               const item = items.find((item) => item.id === Number(itemId));
               return (
                  <div key={layoutItem.i} data-grid={layoutItem}>
                     <img src={require(`./img/${item.name.replace(/\s+/g, '')}.png`)} alt={item.name}/>
                  </div>
               )
            })}

         </GridLayout>
      </div>
   )
}

export default Diagram;