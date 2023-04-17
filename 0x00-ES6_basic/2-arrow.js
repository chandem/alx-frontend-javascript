export default function getNeighborhoodsList() { 
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => { 
    // eslit disable next-line
   this.sanFranciscoNeighborhoods.push(newNeighborhood);  
   //eslit disable next-line 
   return this.sanFranciscoNeighborhoods;
  };

}
