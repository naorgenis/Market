class httpService {
  getData = async (query) => {
    const res = await fetch(
      `https://walmart.p.rapidapi.com/products/list?query=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "ca7552b293msh7d2dee9298ea89ep1cd17bjsn25ca2d1c6a85",
          "x-rapidapi-host": "walmart.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
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
