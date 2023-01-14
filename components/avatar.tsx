export default function Avatar() {
  return (
    <>
      <div className="profile-picture-container">
        <div className="profile-picture" aria-label="profile picture" />
        <svg style={{ height: "0px" }}>
          <defs>
            <clipPath id="clipPath">
              <path
                stroke="none"
                fill="white"
                d="m30.4.4a2.1 2.1 90 012.1 0l25.4 14.6a2.1 2.1 90 011.1 1.9l0 29.3a2.1 2.1 90 01-1.1 1.9l-25.4 14.6a2.1 2.1 90 01-2.1 0l-25.4-14.6a2.1 2.1 90 01-1.1-1.9l0-29.3a2.1 2.1 90 011.1-1.9"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <style jsx>{`
        .profile-picture-container {
          filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
          height: 65px;
          align-self: center;
        }

        .profile-picture {
          background: center/cover url(/profile_pic.jpeg);
          clip-path: url(#clipPath);
          width: 65px;
          height: 65px;
          transform: translateY(0);
          opacity: 1;
          animation: popIn 0.5s ease-in-out;
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
      `}</style>
    </>
  );
}
