import axios from "axios";
// let isLoading = false;

// isLoading = true;
//  Menggunkan Promise 
// axios
// .get('https://6340e78716ffb7e275c7134c.mockapi.io/user')
// .then((data) => {
//     console.log(JSON.stringify(data.data,null,4));
// })
// .catch(err => console.log(err))
// .finally(() => {
//     isLoading = false;
// });

// Async await
//  Mengunakan Function dan mengunakan Keyword async

const fetchUsers = async () => {
    try {
        const result = await axios.get('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=731b6cb1cac443128d35b7e11ce7bf41');
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

export default fetchUsers;