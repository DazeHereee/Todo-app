const EditIcon = ({ size = 24, color = "black", onClick }) => {
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
        aria-label="Edit"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 20h16M14.5 3.5l6 6L8 22H2v-6L14.5 3.5z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  };
  
  export default EditIcon;