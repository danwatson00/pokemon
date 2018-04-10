let $ = 'jquery';

// function getData() {   //this method is to get data from firebase
//     return $.ajax({
//         url: `https://pokemon-1209d.firebaseio.com/allPokemon`
//     }).done((dataata) => {
//         console.log("data", data)
//         return data;
//     });
// }

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://pokemon-1209d.firebaseio.com/allPokemon');
// xhr.onload = function () {
//     if (xhr.status === 200) {
//         var data = JSON.parse(this.responseText);
//         console.log(data);
//     }
//     else {
//         alert('Request failed.  Returned status of ' + xhr.status);
//     }
// };
// xhr.send();


// data.map((pokemon) => {
//     return (
//         <div className="guideCard">
//             <h3 className="guideTitle">{guide.title}</h3>
//             <div className="guideType">Guide Type: {guide.type}</div>
//             <div className="guidePrice">Price: ${guide.price}</div>
//         </div>
//     )
// })