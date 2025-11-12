
import { useState } from "react";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";

interface RegisterFormProps {
  onRegister: (formData: { name: string; email: string; password: string; phone: string }) => void;
  setIsRegistering: (value: boolean) => void;
}

export default function RegisterForm({ onRegister, setIsRegistering }: RegisterFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim().match(/^[A-Za-zА-Яа-я\s]{2,50}$/)) {
      newErrors.name = "Имя должно содержать только буквы и быть от 2 до 50 символов!";
    }
    if (!formData.email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Некорректный email!";
    }
    if (formData.password.trim().length < 8 || !/[A-Z]/.test(formData.password) || !/[a-z]/.test(formData.password) || !/\d/.test(formData.password)) {
      newErrors.password = "Пароль должен содержать 8 символов, заглавную латинскую букву, латинскую строчную букву и цифру!";
    }
    if (formData.confirmPassword.trim() !== formData.password.trim()) {
      newErrors.confirmPassword = "Пароли не совпадают!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onRegister(formData);
    setSuccess(true);
    setTimeout(() => setIsRegistering(false), 2000);
  };

  return (
    <div className="flex justify-center items-center">
    <div className="max-w-[725px] rounded-[50px] border border-white p-15 text-white text-center RegisterForm">
      <SectionTitle title="Регистрация" />
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Ваше имя *" className={`w-full px-5 py-3 mb-3 border rounded-[50px] ${errors.name ? "border-red-500" : ""}`}
          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value.trim() })} />
        {errors.name && <p className="text-red-500 text-sm pb-3">{errors.name}</p>}

        <input type="email" placeholder="Email *" className={`w-full px-5 py-3 mb-3 border rounded-[50px] ${errors.email ? "border-red-500" : ""} `}
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value.trim() })} />
        {errors.email && <p className="text-red-500 text-sm pb-3">{errors.email}</p>}

        <div className="relative">
        <input type={showPassword ? "text" : "password"} placeholder="Пароль *" className={`w-full px-5 py-3 mb-3 border rounded-[50px] ${errors.password ? "border-red-500" : ""} `}
          value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value.trim() })}  />
          <span className="absolute right-5 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "показать" : "скрыть"} 
          </span>
        {errors.password && <p className="text-red-500 text-sm pb-3">{errors.password}</p>}
        </div>

        <div className="relative">
        <input type={showConfirmPassword ? "text" : "password"} placeholder="Подтверждение пароля *" className={`w-full px-5 py-3 mb-3 border rounded-[50px] ${errors.confirmPassword ? "border-red-500" : ""} `}
          value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value.trim() })} />
        <span className="absolute right-5 top-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? "показать" : "скрыть"}
        </span>
        {errors.confirmPassword && <p className="text-red-500 text-sm pb-3">{errors.confirmPassword}</p>}
        </div>

        <Button type="submit" variant = "card" className="text-normal w-full mt-3">Зарегистрироваться</Button>
        {success && <p className="text-[#E6528A] text-semibold text-sm pb-3 max-w-[360px]"> Регистрация успешна!</p>}
      </form>
      <p className="text-sm text-center mt-3 cursor-pointer underline" onClick={() => setIsRegistering(false)}>Уже есть аккаунт? Войти</p>
    </div>
    </div>
  );
}
