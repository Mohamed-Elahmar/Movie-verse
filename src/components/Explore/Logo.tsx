import GradientText from "../GradientText";
import { useNavigate } from "react-router-dom";
function Logo({ className }: { className?: string }) {
  const navigate = useNavigate();
  return (
    <GradientText
      colors={["#3b82f6", "#22d3ee", "#8b5cf6"]}
      animationSpeed={2}
      showBorder
      className={`${className}`}
      onClick={() => {
        navigate("/");
      }}
    >
      Movie Verse
    </GradientText>
  );
}

export default Logo;

// For a smoother animation, the gradient should start and end with the same color
