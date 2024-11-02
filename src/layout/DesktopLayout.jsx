import Header from "../components/ui/Header";

const DesktopLayout = ({ children }) => {
  return (
    <>
      <div className="containerr">
        <Header />
        {children}
      </div>
    </>
  );
};

export default DesktopLayout;
