import type { Meta } from "@storybook/react";
import React from "react";
import { cn } from "../../helpers";
import { useBoolean } from "../../hooks";
import { BooleanCard, BooleanLoadingCard } from "./index";

const meta: Meta<typeof BooleanCard> = {
  title: "Components/BooleanCard",

  decorators: [
    (Story) => (
      <div className="max-w-md w-full p-4 bg-background-primary">
        <Story />
      </div>
    ),
  ],
  component: BooleanCard,
};
export default meta;

export const Default = () => {
  return <BooleanCard title="Remember me" description="Your account will be saved" />;
};

export const LongCard = () => {
  return (
    <div className="w-full">
      <BooleanCard title="Remember me" description="Your account will be saved" />
    </div>
  );
};

export const Loading = () => {
  const { value, toggle } = useBoolean(true);

  return (
    <div className="flex flex-col gap-4">
      {value ? <BooleanLoadingCard /> : <BooleanCard title="Remember me" description="Your account will be saved" />}

      <button onClick={toggle} type="button">
        Toggle loading
      </button>
    </div>
  );
};
export const LongTitle = () => {
  return (
    <div className="w-full ">
      <BooleanCard
        title="Remember me when logging in again in this mobile (IPhone 13 max)"
        description="Your account will be saved"
      />
    </div>
  );
};

/**
 * Long description
 * You can see the full description
 */
export const LongDescription = () => {
  return (
    <div className="w-full ">
      <BooleanCard
        title="Remember me when logging in again in this mobile (IPhone 13 max)"
        description="EN UN LUGAR de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de   -fol. 1v-   lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de Quijada o Quesada, que en esto hay alguna diferencia en los autores que deste caso escriben; aunque, por conjeturas verosímiles, se deja entender que se llamaba Quejana. Pero esto importa poco a nuestro cuento: basta que en la narración dél no se salga un punto de la verdad."
      />
    </div>
  );
};

/**
 * Long description cut with line-clamp-3
 */
export const LongDescriptionCut = () => {
  return (
    <div className="w-full ">
      <BooleanCard
        descriptionProps={{
          className: "line-clamp-3",
        }}
        title="Remember me when logging in again in this mobile (IPhone 13 max)"
        description="EN UN LUGAR de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de   -fol. 1v-   lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de Quijada o Quesada, que en esto hay alguna diferencia en los autores que deste caso escriben; aunque, por conjeturas verosímiles, se deja entender que se llamaba Quejana. Pero esto importa poco a nuestro cuento: basta que en la narración dél no se salga un punto de la verdad."
      />
    </div>
  );
};

export const Controlled = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="w-full flex flex-col gap-2">
      <header className="flex gap-2 items-center">
        <div
          className={cn("w-4 h-4 rounded-full", {
            "bg-primary": checked,
            "bg-error": !checked,
          })}
        />
        {checked ? "Checked" : "Unchecked"}
      </header>
      <BooleanCard
        title="Remember me"
        description="Your account will be saved"
        checked={checked}
        onChange={setChecked}
      />
    </div>
  );
};

export const CustomDescription = () => {
  const [checked, setChecked] = React.useState(false);

  const FunkyDescription = () => {
    return (
      <div className="flex gap-2 flex-col">
        <span>Custom description</span>
        <span className="text-xs text-secondary">This is a custom description</span>
        <div className="flex gap-2 items-center">
          <div
            className={cn("w-4 h-4 rounded-full", {
              "bg-primary": checked,
              "bg-error": !checked,
            })}
          />
          {checked ? "Checked" : "Unchecked"}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <BooleanCard title="Remember me" description={<FunkyDescription />} checked={checked} onChange={setChecked} />
    </div>
  );
};
