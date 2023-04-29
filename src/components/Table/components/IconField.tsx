import IconButton from "components/Common/Buttons/IconButton/IconButton";
import { useSetRecoilState } from "recoil";
import ToastStateAtom from "states/Toasts.state";

interface IIconField {
  value: string;
  icon: JSX.Element;
}

const IconField = ({ value, icon }: IIconField) => {
  const setToastState = useSetRecoilState(ToastStateAtom);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  const handleClickIcon = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    copyToClipboard(value);
    setToastState({
      show: true,
      message: "Copied to clipboard",
      type: "success",
    });
  };

  return <IconButton onClick={handleClickIcon} icon={icon} />;
};
export default IconField;
