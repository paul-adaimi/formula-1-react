export const Item = ({ className, text = "List item" }) => {
  return (
    <div className={`item ${className}`}>
      <div className="text">{text}</div>
    </div>
  );
};
