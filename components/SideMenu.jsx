"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../app/commercial-pilot-license/styles.module.css";

export default function SideMenu({ items, data }) {
    const menu = items ?? data ?? [];
    const pathname = usePathname();

    return (
        <aside className={styles.leftMenu}>
            <ul className={styles.sideMenu}>
                {menu.map((item, i) => {
                    const isActive = pathname === item.path;
                    return (
                        <li key={i}>
                            <Link
                                href={item.path}
                                className={isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
