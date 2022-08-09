import axios from "axios";
import { toast } from "react-toastify";

const apiAuth = axios.create({
  baseURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth",
});

const api = axios.create({
  baseURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit",
  headers: {
    "content-type": "application/json",
  },
});

export const login = async ({
  email,
  password,
  setLoading,
  navigate,
  setUser,
}) => {
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

    setUser(data);

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

export const createHabit = async ({ name, days, setShow, setState, token }) => {
  const idToast = toast.loading("Carregando...");
  try {
    const { data } = await api.post(
      "/habits",
      {
        name,
        days,
      },
      { headers: { authorization: `Bearer ${token}` } }
    );

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
    getHabits({ setState, token });
    return setShow(false);
  } catch (error) {
    return toast.error(error.message, {
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

export const getHabits = async ({ setState, token }) => {
  try {
    const { data } = await api.get("/habits", {
      headers: { authorization: `Bearer ${token}` },
    });

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
    return toast.error(error.message, {
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

export const deleteHabit = async ({ setState, id, token }) => {
  const toastID = toast.loading("Carregando...");
  try {
    const res = await api.delete(`/habits/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });

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

export const getHabitsToday = async ({ setState, token }) => {
  try {
    const { data } = await api.get("/habits/today", {
      headers: { authorization: `Bearer ${token}` },
    });

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
    return toast.error(error.message, {
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

export const handleHabitToday = async ({ id, action, setState, token }) => {
  const toastID = toast.loading("Carregando...");
  try {
    const { status } = await api.post(
      `/habits/${id}/${action}`,
      {},
      { headers: { authorization: `Bearer ${token}` } }
    );

    if (status < 200 && status >= 300) {
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
    return getHabitsToday({ setState, token });
  } catch (error) {}
};
