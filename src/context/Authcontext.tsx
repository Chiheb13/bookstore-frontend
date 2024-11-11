import { createContext, useState, useContext, ReactNode } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    image: string;
};

type AuthContextType = {
    user: User | null;
    getUser: () => Promise<void>;
    login: (data: { email: string; password: string }) => Promise<void>;
    register: (data: { name: string; email: string; phone: string; password: string;image:string }) => Promise<void>;
    logout: () => void;
    };

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate(); // Moved inside the function

    const [user, setUser] = useState(null);
    
    const csrf = () => axios.get("http://localhost:8000/sanctum/csrf-cookie");

    const getUser = async () => {
        const { data } = await axios.get("http://localhost:8000/api/user");
        setUser(data); 
    };
  const login = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("http://localhost:8000/login", data);
      console.log("hello")
      await getUser();
      navigate("/home"); // Now use navigate after successful login
    } catch (error) {
      console.error("Login error:", error);
    }
  };

    const register = async ({ name, email, phone, password,image }: { name: string; email: string; phone: string; password: string;image:string }) => {
        await csrf();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("phone", phone);
        formData.append("image", image);

        try {
            await axios.post("http://localhost:8000/register", formData, {
                withCredentials: true,
                withXSRFToken: true,
            });
            await getUser();
            navigate("/home"); // Navigate after registration and user fetch
        } catch (error) {
            console.error("Registration error:", error);
        }
    };
    const logout=()=>{
        axios.post("http://localhost:8000/logout").then(()=>{
            setUser(null)
            navigate("/login");
        })
    }

    return (
        <AuthContext.Provider value={{ user, getUser, login, register,logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default function useAuthContext() {
    const context = useContext(AuthContext);
    
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
}
