import { Input } from "../../ui/Input";

export const MyForm = () => {
  return (
    <section>
      <form className="py-[40px]">
        <div className="container">
          <h2 className="title">
            Для записи заполните форму <br /> или напишите мне в телеграм!
          </h2>
          <div className="flex flex-col items-center gap-[25px] ">
            <Input name="Имя" type="text" labelText="Ваше имя" placeholder="Винсенто" />
            <Input name="Номер или адрес почты или тг" type="text" labelText="Ваши телеграм / номер телефона" placeholder="@vincento" />
            <button className="btn" type="submit">Записаться!</button>
          </div>
        </div>
      </form>
    </section>
  );
};
