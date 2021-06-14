const getCity = async (req, res) => {
  try {
    const config = {
      headers: {
        key: process.env.RAJAONGKIR_API_KEY,
      },
    };

    const { id } = req.query;

    fetch(`https://api.rajaongkir.com/starter/city?province=${id}`, config)
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

export default getCity;
