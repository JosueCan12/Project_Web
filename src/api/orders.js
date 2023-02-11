import api from "./base";

export const getOrders = async (token) =>
  await api.get("/orders", {
    headers: {
      Authorization: token,
    },
  });
