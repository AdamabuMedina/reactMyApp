import React from "react"
import styles from "./dropdown.css"

interface IDropdownProps {
    button: React.ReactNode
    children: React.ReactNode
}

export function Dropdown({button, children}: IDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

    const handleOpen = (): void => setIsDropdownOpen(!isDropdownOpen)
    const handleClose = (): void => setIsDropdownOpen(false)

    return (
        <div>
            <div onClick={handleOpen}>{button}</div>
            {
                isDropdownOpen ? (
                    <div className={styles.list}>
                        {children}
                        <button
                            onClick={handleClose}
                            className={styles.closeButton}
                        >Закрыть
                        </button>
                    </div>
                ) : null
            }
        </div>
    )
}