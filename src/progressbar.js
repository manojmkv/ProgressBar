const Progressbar = ({ progress = 0 }) => {
  return (
    <div className="progressbar">
      <div
        className="progressbar-fill"
        style={{ transform: `translate(${progress - 100}%)` }}
      />
    </div>
  );
};

export default Progressbar;
