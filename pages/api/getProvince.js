const getProvince = async (req, res) => {
  try {
    const config = {
      headers: {
        key: process.env.RAJAONGKIR_API_KEY,
      },
    };

    fetch("https://api.rajaongkir.com/starter/province", config)
      .then((res) => res.json())
      .then((data) => {
        res.status(200);
        res.json(data.rajaongkir);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "Something went wrong!" });
  }
};

export default getProvince;
