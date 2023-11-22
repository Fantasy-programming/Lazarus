interface button {
  text: string;
  type: string;
  onClick: () => void;
  actions: () => void;
}

export default function Button({ text, type, onClick, actions }: button) {
  return <button>{text}</button>;
}
