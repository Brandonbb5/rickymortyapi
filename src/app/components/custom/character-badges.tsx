type CharacterBadgesProps = {
  gender: string;
  status: string;
};

const CharacterBadges = ({ gender, status }: CharacterBadgesProps) => {
  const genderBadge = () => {
    switch (gender) {
      case "Male":
        return (
          <div className="border-2 rounded-md bg-blue-400 text-white px-2 py-1 inline-block">
            Masculino
          </div>
        );
      case "Female":
        return (
          <div className="border-2 rounded-md bg-pink-400 text-white px-2 py-1 inline-block">
            Femenino
          </div>
        );
      default:
        return (
          <div className="border-2 rounded-md bg-gray-400 text-white px-2 py-1 inline-block">
            Otro
          </div>
        );
    }
  };

  const statusBadge = () => {
    switch (status) {
      case "Alive":
        return (
          <div className="border-2 rounded-md bg-green-500 text-white px-2 py-1 inline-block">
            Vivo
          </div>
        );
      case "Dead":
        return (
          <div className="border-2 rounded-md bg-red-500 text-white px-2 py-1 inline-block">
            Muerto
          </div>
        );
      default:
        return (
          <div className="border-2 rounded-md bg-gray-400 text-white px-2 py-1 inline-block">
            Desconocido
          </div>
        );
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-2">
      {genderBadge()}
      {statusBadge()}
    </div>
  );
};

export default CharacterBadges;
