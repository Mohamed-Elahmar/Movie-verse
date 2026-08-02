import DecryptedText from "../DecryptedText";

function Slug() {
  return (
    <DecryptedText
      text="Where Every Click Opens a New Adventure."
      animateOn="view"
      clickMode="once"
      speed={220}
      className="text-5xl"
    />
  );
}

export default Slug;
