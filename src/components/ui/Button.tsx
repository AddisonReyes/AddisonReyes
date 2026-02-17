import "./Button.css";

interface ButtonProps {
  label: string;
  url: string;
}

function Button({ label, url }: ButtonProps) {
  return (
    <div className="HeroButton">
      <a href={url} rel="noopener noreferrer" target="_blank">
        {label}
      </a>
    </div>
  );
}

export default Button;
