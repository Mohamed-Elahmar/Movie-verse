import GradientText from "../GradientText";

function Logo({ className }: { className?: string }) {
  return (
    <GradientText
      colors={["#3b82f6", "#22d3ee", "#8b5cf6"]}
      animationSpeed={2}
      showBorder
      className={`custom-class ${className}`}
    >
      Movie Verse
    </GradientText>
  );
}

export default Logo;

// For a smoother animation, the gradient should start and end with the same color
