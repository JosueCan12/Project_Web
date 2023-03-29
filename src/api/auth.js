import api from "./base";
import { useLocalStorage } from "./../hooks/useLocalStorage";

export const signIn = async ({ email, password }) =>
  await api.post("/signin/worker", {
    email,
    password,
  });

export const signUpWorker = async (
  { name, lastName, email, password, roles },
  token
) =>
  await api.post(
    "/signup/worker",
    {
      name,
      lastName,
      email,
      password,
      roles,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getWorkers = async (token) =>
  api.get(
    `/workers/1/10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

/* async function showWorkers(page, limit) {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const headers = { Authorization: `Bearer ${token}` };
    const workers = await api.get(`/workers/${page}/${limit}`, { headers });
    if (!workers.data || workers.data.length === 0) {
      console.log("No se encontraron trabajadores");
    } else {
      console.log(JSON.stringify(workers.data, null, 2));
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function loadWorkers() {
  try {
    await showWorkers(1, 10);
    console.log("Lista de trabajadores cargada correctamente");
  } catch (error) {
    console.error(error);
  }
} */
