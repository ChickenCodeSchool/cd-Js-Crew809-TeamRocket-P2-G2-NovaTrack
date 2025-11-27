import "./switchbtn.css";
type SwitchProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
function SwitchBtn({ dark, setDark }: SwitchProps) {
  console.log(setDark);
  return (
    <div className="switchContainer">
      <div
        className={dark ? "dark switch" : "light switch"}
        onClick={() => {
          setDark((prev) => !prev);
        }}
      >
        <div className={dark ? "moon" : "sun"} />
      </div>
    </div>
  );
}
export default SwitchBtn;
