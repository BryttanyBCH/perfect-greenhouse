import * as math from "mathjs"

import "./styles.css";

function getSolutions({items}) {

   const totalCount = items.reduce((accumulator, currentItem) => accumulator + currentItem.count, 0);

   const coefficients = items.map((item, index) => { // FIX ME: Still need to factor in Harvest Amounts
      const itemCountRatio = item.count / totalCount;
      return items.map((_, i) => {
         if (index === i) {
            return (1 / item.growthTime) * (itemCountRatio - 1);
         } else {
            return (1 / items[i].growthTime) * itemCountRatio;
         }
      });
   });

   const constants = Array(items.length).fill(0);

   coefficients.push(Array(items.length).fill(1));
   constants.push(1);

   let A = math.matrix(coefficients);
   let b = math.matrix(constants);

   if (items.length >= 2)
   {
      // using method of least squares since our matrix is over determined
      let transposedA = math.transpose(A);
      let solution = math.multiply(math.multiply(math.inv(math.multiply(transposedA, A)), transposedA), b);
      solution = math.squeeze(solution._data);

      return items.map((item, index) => ({
         ...item, solution: solution[index]
      }));
   }

   return items.map((item) => ({
      ...item, solution: 1
   }));
}
export default getSolutions;
