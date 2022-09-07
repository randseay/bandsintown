import "./Button.css";

function Button({ as, children, ...props }) {
  const Element = as || "button";

  return (
    <Element className="button" {...props}>
      {children}
    </Element>
  );
}

export default Button;
