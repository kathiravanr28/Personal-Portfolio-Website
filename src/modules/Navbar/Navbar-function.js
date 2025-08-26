import { useEffect,useState } from "react";

export function useHeaderText() {
  useEffect(() => {
    // Typing animation effect
    const line1 = document.querySelector(".typing-1");
    const line2 = document.querySelector(".typing-2");

    if (line1) {
      line1.addEventListener("animationend", () => {
        line1.classList.add("finished");
      });
    }

    if (line2) {
      line2.addEventListener("animationend", () => {
        line2.classList.add("finished");
      });
    }
  }, []);

  // Menu response state
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);


  return  { isOpen, openMenu, closeMenu };
}
