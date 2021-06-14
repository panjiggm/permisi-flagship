const getCost = async (req, res) => {
  try {
    const { origin, destination, weight, courier } = req.body;

    const config = {
      method: "POST",
      headers: {
        key: process.env.RAJAONGKIR_API_KEY,
      },
      body: JSON.stringify({
        origin,
        destination,
        weight,
        courier,
      }),
    };

    fetch("https://api.rajaongkir.com/starter/cost", config)
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

export default getCost;
