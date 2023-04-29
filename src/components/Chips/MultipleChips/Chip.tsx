import styled from "styled-components";

interface ChipStyledProps {
  boolean?: boolean | undefined;
}

export const ChipStyled = styled.p<ChipStyledProps>`
  background-color: ${({ theme, boolean }) =>
    typeof boolean === "undefined"
      ? theme.colors.main.light
      : boolean
      ? theme.colors.main.light
      : theme.colors.error.light};

  border: 1px solid
    ${({ theme, boolean }) =>
      typeof boolean === "undefined"
        ? "transparent"
        : boolean
        ? theme.colors.background.light
        : theme.colors.error.light};

  border-radius: 10px;
  margin: 0;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  width: fit-content;
  min-width: 30px;
`;

const Chip = ({
  children,
  className,
  boolean = undefined,
}: {
  children: any;
  className?: string;
  boolean?: boolean | undefined;
}) => {
  return (
    <ChipStyled className={className} boolean={boolean}>
      {children}
    </ChipStyled>
  );
};
export default Chip;
