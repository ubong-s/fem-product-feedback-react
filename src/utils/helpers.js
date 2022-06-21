export const getUnique = (array, attr) => {
   let unique = array.map((item) => item[attr]);
   if (attr === 'colors') {
      unique = unique.flat();
   }

   return ['All', ...new Set(unique)];
};
