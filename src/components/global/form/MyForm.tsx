import { Input } from "../../ui/Input";

export const MyForm = () => {
  return (
    <form>
      <h2 className="smallTitle">
        Для записи заполните форму или напишите мне в телеграм!
        <Input name="Имя" type="text" placeholder="Ваше имя"/>
        <Input name="Номер или адрес почты или тг" type="text" placeholder="Ваше имя"/>
      </h2>
    </form>
  );
};
