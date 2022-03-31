import { parseCookies, setCookie } from "nookies";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface User {
  id?: string;
  name?: string;
  email: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContext {
  isAuthenticated: boolean;
  user: User | null;
  signIn(credentials: SignInCredentials): Promise<void>;

  // signOut(): void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { token: token } = parseCookies();

    if (token) {
      api.get("/user").then((response) => {
        const { email, name, id } = response.data;

        setUser({ email, name, id });
      });
    }
  }, []);

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post("login", {
        email,
        password,
      });

      const token = response.data;

      setCookie(null, "token", token, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });

      // setCookie(null, "refreshToken", refreshToken, {
      //   maxAge: 30 * 24 * 60 * 60, // 30 days
      //   path: "/",
      // });

      setUser({
        email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
