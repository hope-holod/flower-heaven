import { useState } from "react";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";

interface AuthFormProps {
  onLogin: (email: string, password: string) => void;
  setIsRegistering: (value: boolean) => void; 
}

export default function AuthForm({ onLogin, setIsRegistering }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = { email: "", password: "" };

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Некорректный email!";
    }
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
      newErrors.password = "Пароль должен содержать 8 символов, заглавную латинскую букву, латинскую строчную букву и цифру!";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onLogin(email, password);
  };

  return (
    <div className="flex pb-17 justify-center items-center">
    <div className="rounded-[50px] border border-white p-15 text-white text-center AuthForm">
      <SectionTitle title="Авторизация" />
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          className={`w-full px-5 py-3 mb-3 border rounded-[50px] ${errors.email ? "border-red-500" : ""}`}
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {errors.email && <p className="text-red-500 text-sm pb-3 max-w-[360px]">{errors.email}</p>}
      
        <div className="relative">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Пароль" 
           className={`w-full px-5 py-3 mb-3 border rounded-[50px] ${errors.password ? "border-red-500" : ""}`}
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <span className="absolute right-5 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "показать" : "скрыть"} 
          </span>
        </div>
        {errors.password && <p className="text-red-500 text-sm pb-3 max-w-[360px]">{errors.password}</p>}

        <Button type="submit" variant = "card" className="text-normal w-full mt-3">Войти</Button>
      </form>
      <p className="text-sm text-center mt-3 cursor-pointer underline" onClick={() => setIsRegistering(true)}>Нет аккаунта? Зарегистрироваться</p>
    </div>
    </div>
  );
}
