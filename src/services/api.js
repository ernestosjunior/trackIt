import axios from "axios";
import { toast } from "react-toastify";

const apiAuth = axios.create({
  baseURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth",
});

const api = axios.create({
  baseURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit",
});

export const login = async ({ email, password, setLoading, navigate }) => {
  try {
    setLoading(true);
    const { statusText, data } = await apiAuth.get("/login", {
      email,
      password,
    });

    if (statusText !== "OK") {
      return toast.error("Credenciais inválidas!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    delete data.password;

    window.localStorage.setItem("user", JSON.stringify(data));

    return navigate("../habitos");
  } catch (error) {
    return toast.error("Erro. Tente novamente!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } finally {
    setLoading(false);
  }
};
