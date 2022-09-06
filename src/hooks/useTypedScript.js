// React
import { useEffect, useState } from "react";

export const TypedPhase = {
  Typing: 0,
  Pausing: 1,
  Deleting: 2,
};

const TYPING_INTERVAL = 75;
const PAUSING_INTERVAL = 2500;
const DELETING_INTERVAL = 50;

const useTypedScript = (
  texts,
  loop = true,
  typingInterval = TYPING_INTERVAL,
  pausingInterval = PAUSING_INTERVAL,
  deletingInterval = DELETING_INTERVAL
) => {
  const [typedScript, setTypedScript] = useState("");
  const [typedIndex, setTypedIndex] = useState(0);
  const [typedPhase, setTypedPhase] = useState(TypedPhase.Typing);

  useEffect(() => {
    switch (typedPhase) {
      case TypedPhase.Typing: {
        const nextScript = texts[typedIndex].slice(0, typedScript.length + 1);
        if (typedScript === nextScript) {
          setTypedPhase(TypedPhase.Pausing);
          return;
        }
        const timeout = setTimeout(() => {
          setTypedScript(nextScript);
        }, typingInterval);
        return () => clearTimeout(timeout);
      }
      case TypedPhase.Deleting: {
        if (!typedScript) {
          const nextTypedIndex = typedIndex + 1;
          setTypedIndex(texts[nextTypedIndex] ? nextTypedIndex : 0);
          setTypedPhase(TypedPhase.Typing);
          return;
        }
        const nextRemaining = texts[typedIndex].slice(
          0,
          typedScript.length - 1
        );
        const timeout = setTimeout(() => {
          setTypedScript(nextRemaining);
        }, deletingInterval);
        return () => clearTimeout(timeout);
      }
      case TypedPhase.Pausing:
      default:
        if (loop === false && typedIndex === texts.length - 1) return;
        const timeout = setTimeout(() => {
          setTypedPhase(TypedPhase.Deleting);
        }, pausingInterval);
        return () => clearTimeout(timeout);
    }
  }, [
    texts,
    loop,
    typingInterval,
    pausingInterval,
    deletingInterval,
    typedScript,
    typedIndex,
    typedPhase,
  ]);

  return { typedScript, typedPhase };
};

export default useTypedScript;
