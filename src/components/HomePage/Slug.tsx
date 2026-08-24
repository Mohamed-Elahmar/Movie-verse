import TextAnimation from "@/components/ui/staggerText";

function Slug() {
  return (
    <div className="text-4xl font-medium">
      <TextAnimation divideBy="word" delay={0.2}>
        Where Every Click Opens a New Adventure.
      </TextAnimation>
    </div>
  );
}

export default Slug;
