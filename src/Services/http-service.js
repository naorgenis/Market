class httpService {
  getData = async (search) => {
    const res = await fetch(
      `https://react-market-proj-default-rtdb.firebaseio.com/market.json?`
    );
    const data = await res.json();
    const dataArray = [];
    for (const key in data) {
      const item = {
        id: key,
        ...data[key],
      };
      dataArray.push(item);
    }
    console.log(data);
    return dataArray;
    //   .then((response) => {
    //     response.json().then((res) => {
    //       console.log(res);
    //       return res;
    //     });
    //     // ;
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
}

export default httpService;
