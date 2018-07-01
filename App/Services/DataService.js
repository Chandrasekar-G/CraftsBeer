import apisauce from "apisauce";
import { API } from "../Constants";

const create = () => {
  const api = apisauce.create({
    baseURL: API.ROOT_URL
  });

  const getBeercrafts = async () => {
      var res = await api.get(API.GET_BEERS);
      return res;
  }

  return {
    getBeercrafts
  };
};

export default {
  create
};
