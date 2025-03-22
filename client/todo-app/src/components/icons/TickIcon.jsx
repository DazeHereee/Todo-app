const TickIcon = ({ size = 24, color = "black", onClick }) => {
    return (
      <button
        onClick={onClick}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Confirm"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12l4 4L19 7"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  };
  
  export default TickIcon;
  
