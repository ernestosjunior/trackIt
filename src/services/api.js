import axios from "axios";
import { toast } from "react-toastify";

const { token } = JSON.parse(window.localStorage.getItem("user")) || {
  token: "",
};

const apiAuth = axios.create({
  baseURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth",
});

const api = axios.create({
  baseURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit",
  headers: {
    authorization: `Bearer ${token}`,
    "content-type": "application/json",
  },
});

export const login = async ({ email, password, setLoading, navigate }) => {
  try {
    setLoading(true);
    const { data } = await apiAuth.post("/login", {
      email,
      password,
    });

    if (!data || !data.token) {
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

    toast.success("Sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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

export const signUp = async ({
  email,
  password,
  name,
  image,
  setLoading,
  navigate,
}) => {
  try {
    setLoading(true);
    const { data } = await apiAuth.post("/sign-up", {
      email,
      password,
      name,
      image,
    });

    if (!data || !data.id) {
      return toast.error("Erro. Tente novamente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    toast.success("Sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return navigate("../");
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

export const createHabit = async ({ name, days, setShow, setState }) => {
  const idToast = toast.loading("Carregando...");
  try {
    const { data } = await api.post("/habits", {
      name,
      days,
    });

    if (!data || !data.id) {
      return toast.error("Erro. Tente novamente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    toast.dismiss(idToast);
    getHabits({ setState });
    return setShow(false);
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
  }
};

export const getHabits = async ({ setState }) => {
  const toastID = toast.loading("Carregando...");

  try {
    const { data } = await api.get("/habits");

    if (!data) {
      return toast.error("Erro ao buscar hábitos.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    return setState(data);
  } catch (error) {
    return toast.error("Erro ao buscar hábitos.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } finally {
    toast.dismiss(toastID);
  }
};

export const deleteHabit = async ({ setState, id }) => {
  const toastID = toast.loading("Carregando...");
  try {
    const res = await api.delete(`/habits/${id}`);

    if (res.status < 200 && res.status >= 300) {
      return toast.error("Erro. Tente novamente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    toast.dismiss(toastID);
    getHabits({ token, setState });
    return setShow(false);
  } catch (error) {}
};

export const getHabitsToday = async ({ setState }) => {
  try {
    const { data } = await api.get("/habits/today");

    if (!data) {
      return toast.error("Erro ao buscar hábitos.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    return setState(data);
  } catch (error) {
    return toast.error("Erro ao buscar hábitos.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } finally {
  }
};
