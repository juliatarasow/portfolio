import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-10 right-10 text-5xl cursor-pointer button-hover"
    >
      <FiChevronUp />
    </button>
  ) : null;
};
