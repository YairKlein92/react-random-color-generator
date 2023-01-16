export default function Input() {
  return (
    <input
      value={hue}
      onChange={(event) => {
        setHue(event.target.value);
      }}
    />
  );
}
