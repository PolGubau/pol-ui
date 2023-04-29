import { LinearProgress } from "@mui/material";
import MesalvoLogo from "./MesalvoLogo";
import LoadingPageStyled from "./LoadingPageStyled";

export default function LoadingPage() {
  return (
    <LoadingPageStyled>
      <LinearProgress />
      <MesalvoLogo className="logo" data-testid="logo" />
      <span className="loader"></span>
    </LoadingPageStyled>
  );
}
