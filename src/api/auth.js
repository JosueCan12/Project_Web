import api from './base'

export const signIn = async ({ email, password }) =>
  await api.post("/signin", {
    email,
    password,
  });

export const signUpWorker = async ({ email, password, roles }) =>
  await api.post("/signup/worker", {
    email,
    password,
    roles,
  });
