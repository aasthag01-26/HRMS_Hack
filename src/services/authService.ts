const API_URL = "http://localhost:5000/api/auth";

export const loginUser = async (
  employeeId: string,
  password: string
) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    credentials: "include", // 🔥 important for session
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ employeeId, password }),
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  return res.json(); // { employeeId, role, name }
};

export const logoutUser = async () => {
  await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
};

export const getCurrentUser = async () => {
  const res = await fetch(`${API_URL}/me`, {
    credentials: "include",
  });

  if (!res.ok) return null;
  return res.json();
};
