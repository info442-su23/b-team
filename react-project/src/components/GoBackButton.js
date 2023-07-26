export default function GoBackButton() {
  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <div className="back-container">
      <a href="#" className="back-arrow" onClick={goBack}><span className="arrow-left">&#8592;</span></a>
    </div>
  );
};