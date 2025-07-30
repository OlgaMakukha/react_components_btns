import PropTypes from "prop-types";

export default function Button({
    text,
    icon,
    size = "medium",
    variant = "primary",
    fullWidth = false,
    isDisabled = false,
    onClick,
    children,
}) {
    return (
        <button
            className={`button ${variant} ${size} ${
                isDisabled ? "disabled" : ""
            } ${fullWidth ? "full-width" : ""}`}
            onClick={onClick}
        >
            {icon && <span>{icon}</span>}
            {text}
            
            {children} 
        </button>
    );
}

// отлавливаем ошибки (типизация, обычно используется в старых приложениях(в новых используем typeScript))
Button.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    variant: PropTypes.string,
    fullWidth: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
};

// // можно установить текст по умалчанию, если не передадим свой текст вручную, то будет использоваться этот.
// Button.defaultProps = {
//     text: "текст по умолчанию",
// };
