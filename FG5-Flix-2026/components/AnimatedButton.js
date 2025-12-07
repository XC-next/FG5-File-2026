export default function AnimatedButton({ children, onClick, className="" }) {
  return (
    <button onClick={onClick} className={`animated-btn ${className}`}>
      {children}
    </button>
  );
}
