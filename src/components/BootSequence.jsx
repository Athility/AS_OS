import { useEffect, useState } from "react";

export default function BootSequence() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1050);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="crt-boot" aria-hidden="true">
      <div className="crt-line" />
    </div>
  );
}
