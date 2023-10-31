import axios from "axios";

export async function register(email, password, fullName) {
  try {
    const loginRes = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/register`, {
      email,
      password,
      fullName
    });
    localStorage.setItem("token", loginRes.data.token);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
