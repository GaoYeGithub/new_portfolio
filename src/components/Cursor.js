import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorinner = document.querySelector(".cursor2");
    const a = document.querySelectorAll("a");

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorinner.style.left = e.clientX + "px";
      cursorinner.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", () => {
      cursor.classList.add("click");
      cursorinner.classList.add("cursorinnerhover");
    });

    document.addEventListener("mouseup", () => {
      cursor.classList.remove("click");
      cursorinner.classList.remove("cursorinnerhover");
    });

    a.forEach((item) => {
      item.addEventListener("mouseover", () => cursor.classList.add("hover"));
      item.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </>
  );
};

export default Cursor;