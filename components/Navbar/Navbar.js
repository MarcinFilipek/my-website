import Link from "next/link";
import styles from "./Navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useCallback, useState } from "react";
import { IconButton } from "@mui/material";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <div className={styles.container}>
      <div className={open ? styles.wrapper__active : styles.wrapper}>
        <ul className={styles.menu}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Posty</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>O mnie</a>
            </Link>
          </li>
        </ul>
      </div>
      <IconButton onClick={handleMenuClick} sx={{ color: "white" }}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
};