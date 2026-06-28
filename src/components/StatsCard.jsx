import { useContext } from "react";
import { TodoDataContext } from "../TodoContext";

const StatsCard = () => {
  const { todoArr } = useContext(TodoDataContext);
  const completed = todoArr.filter((t) => t.completed).length;
  const total = todoArr.length;

  return (
    <div
      style={{
        background: "#242424",
        borderRadius: "16px",
        padding: "clamp(14px, 3vw, 20px) clamp(16px, 4vw, 24px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
        gap: "12px",
      }}
    >
      <div>
        <p
          style={{
            color: "#fff",
            fontSize: "clamp(14px, 2.5vw, 16px)",
            fontWeight: "600",
            margin: "0 0 4px",
          }}
        >
          Todo Done
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "clamp(11px, 2vw, 13px)",
            margin: "0",
          }}
        >
          keep it up
        </p>
      </div>
      <div
        style={{
          width: "clamp(52px, 10vw, 64px)",
          height: "clamp(52px, 10vw, 64px)",
          borderRadius: "50%",
          background: "#e8533a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          fontSize: "clamp(16px, 3vw, 20px)",
          color: "#fff",
          flexShrink: 0,
        }}
      >
        {completed}/{total}
      </div>
    </div>
  );
};

export default StatsCard;
