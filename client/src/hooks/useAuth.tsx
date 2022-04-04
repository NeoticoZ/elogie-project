import { destroyCookie, parseCookies, setCookie } from "nookies";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface User {
  admin: boolean;
  id: string;
  name: string;
  email: string;
  created_at: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials extends SignInCredentials {
  name: string;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: User | null;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpCredentials): Promise<void>;
  signOut(): void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(null, "token");

  window.location.href = "/";
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as User);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { token } = parseCookies();

    if (token) {
      api
        .get("/user")
        .then((response) => {
          const user = response.data;

          setUser(user);
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post("login", {
        email,
        password,
      });

      const token = response.data.token;
      const user = response.data.user;

      setCookie(null, "token", token, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });

      // setCookie(null, "refreshToken", refreshToken, {
      //   maxAge: 30 * 24 * 60 * 60, // 30 days
      //   path: "/",
      // });

      setUser(user);

      window.location.href = "/dashboard";
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };

  const signUp = async ({ name, email, password }: SignUpCredentials) => {
    try {
      const response = await api.post("register", {
        name,
        email,
        password,
      });

      const token = response.data.token;
      const user = response.data.user;

      setCookie(null, "token", token, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });

      // setCookie(null, "refreshToken", refreshToken, {
      //   maxAge: 30 * 24 * 60 * 60, // 30 days
      //   path: "/",
      // });

      setUser(user);

      window.location.href = "/dashboard";
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
