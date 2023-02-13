import api from "./base";

export const getOrders = async (token) =>
  await api.get("/orders", {
    headers: {
      Authorization: token,
    },
  });

export const changeStatusRequest = async (id, token) =>
  await api.put(
    `/orderStatus/${id}`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
