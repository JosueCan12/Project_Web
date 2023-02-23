import api from "./base";

export const getOrders = async (token) =>
  await api.get("/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const changeStatusRequest = async (id, token) =>
  await api.put(
    `/orderStatus/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
