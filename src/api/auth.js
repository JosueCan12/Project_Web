import api from "./base";

export const signIn = async ({ email, password }) =>
  await api.post("/signin", {
    email,
    password,
  });

export const signUpWorker = async ({
  name,
  lastname,
  email,
  password,
  roles,
}, token) =>
  await api.post(
    "/signup/worker",
    {
      name,
      lastname,
      email,
      password,
      roles,
    },
    {
      headers: {
        Authorization: token
      }
    }
  );
