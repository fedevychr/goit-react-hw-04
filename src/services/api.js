import axios from "axios";

export const getPhotos = async (query = "") => {
  const { data } = await axios.get(
    "https://api.unsplash.com/photos/?client_id=ubnjO2jz8BGs4i05XGvqiBLwh_g5xN2dLVqD-wspe6w",
    {
      params: {
        query,
      },
    }
  );

  return data;
};
