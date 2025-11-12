import React from "react";

const socialLinks = [
  { href: "https://telegram.com/flowerheaven.by", imgSrc: "/src/components/SocialLinks/telegram.svg", alt: "telegram", name: "Telegram", linkText: "@flowerheaven.by" },
  { href: "https://pinterest.com/flowerheaven", imgSrc: "/src/components/SocialLinks/pinterest.svg", alt: "Pinterest", name: "Pinterest", linkText: "pinterest.com/flowerheaven" },
  { href: "mailto:flowerheaven@gmail.com", imgSrc: "/src/components/SocialLinks/email.svg", alt: "E-mail", name: "E-mail", linkText: "flowerheaven@gmail.com" },
  { href: "tel:+375296409357", imgSrc: "/src/components/SocialLinks/Tel.svg", alt: "Телефон", name: "Телефон", linkText: "+375 (29) 640-93-57" },
  { imgSrc: "/src/components/SocialLinks/адрес.svg", alt: "Адрес", name: "Адрес", linkText: "Минск, ул. Неманская, 25 \nПн-Пт 9:00–20:00, \n Сб-Вс 10:00–20:00" }
];

const SocialLinks = () => (
  <div className="max-w-[450px]">
    <div className="flex flex-col gap-3">
      {socialLinks.map((link, index) => (
        <div key={index} className="flex items-center gap-4">
         <img src={link.imgSrc} alt={link.alt} className=""/>
          <div>
          <span className="font-medium ">{link.name}:</span>
          <p><a href={link.href} target="_blank" rel="noopener noreferrer" className={`contactsa text-black dark:text-white whitespace-pre-line ${link.href ? "hover:text-[#FFA6D6]" : ""}`}>{link.linkText}</a></p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SocialLinks;
