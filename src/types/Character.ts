export interface ICharacter {
  id: string;
  name: string;
  image: string;
  gender: "Male" | "Female" | string;
  status: "Alive" | "Dead" | string;
};
