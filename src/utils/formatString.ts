export default function formatString(str: string): string {
  const words = str.split("-").map((word) => word.trim());
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}
