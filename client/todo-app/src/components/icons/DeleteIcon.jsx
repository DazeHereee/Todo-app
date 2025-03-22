const DeleteIcon = ({ size = 24, color = "black", onClick }) => {
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
      aria-label="Delete"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 7h12M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M10 11v6M14 11v6M4 7h16l-1 12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 7z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="19" r="1" fill={color} />
      </svg>
    </button>
  );
};

export default DeleteIcon;

