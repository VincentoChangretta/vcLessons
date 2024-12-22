import { whatWeDoImg } from "../../../../data/imgData";

export const MainPageWhatWeDo = () => {
  return (
    <section>
      <div className="container">
        <h2 className="title">Чему мы научимся?</h2>
        <h4 className="smallTitle max-w-[800px] text-center mx-auto mb-[50px]">
          В этом курсе мы создадим несколько практических проектов, которые
          помогут закрепить полученные знания:
        </h4>
        <div className="flex flex-col gap-[70px] mb-[30px]">
          <div className="relative">
            <div className="relative z-20 w-[100%] p-[50px] bg-primaryColor mx-auto max-h-[500px] rounded-standartRadius overflow-hidden">
              <img
                className="img whatWeDo__img rounded-[25px]"
                src={whatWeDoImg}
                alt="Фото проекта"
              />
            </div>
            <div className="bluredBall z-10 w-[300px] h-[300px] top-0 left-[-50px] bg-[rgba(255,255,255,.4)]"></div>
            <div className="bluredBall z-10 w-[300px] h-[300px] bottom-0 right-[-50px] bg-[rgba(255,255,255,.4)]"></div>
          </div>
          <ul className="flex flex-col gap-[20px] mb-[30px]">
            <div className="flex justify-between gap-[30px]">
              <li className="max-w-[45%] w-full">
                <strong className="block text-primaryColor mb-2 text-2xl bg-primaryColorInv py-[5px] px-[20px] w-fit rounded-standartRadius bg-textBg">
                  Три одностраничных сайта:
                </strong>{" "}
                Вы создадите три простых сайта, что позволит вам освоить основы
                HTML, CSS и JavaScript.
              </li>
              <li className="max-w-[45%] w-full">
                <strong className="block text-primaryColor mb-2 text-2xl bg-primaryColorInv py-[5px] px-[20px] w-fit rounded-standartRadius bg-textBg">
                  Загрузка проекта на хостинг:
                </strong>
                Научимся загружать сайты на хостинг.
              </li>
            </div>
            <div className="flex justify-between gap-[30px]">
              <li className="max-w-[45%] w-full">
                <strong className="block text-primaryColor mb-2 text-2xl bg-primaryColorInv py-[5px] px-[20px] w-fit rounded-standartRadius bg-textBg">
                  Приложение "Прогноз погоды":
                </strong>{" "}
                Вы создадите интерактивное приложение, которое будет отображать
                прогноз погоды, используя API, что поможет вам научиться
                работать с внешними данными и динамически обновлять контент.
              </li>
              <li className="max-w-[45%] w-full">
                <strong className="block text-primaryColor mb-2 text-2xl bg-primaryColorInv py-[5px] px-[20px] w-fit rounded-standartRadius bg-textBg">
                  Многостраничный сайт:
                </strong>{" "}
                Вы разработаете полноценный многостраничный сайт с функционалом
                отправки форм на почту с помощью PHP, что даст вам опыт работы с
                серверной частью.
              </li>
            </div>
          </ul>
        </div>
        <p className="smallTitle">
          Эти проекты помогут вам не только применить теоретические знания на
          практике, но и сформировать портфолио, которое станет основой для
          дальнейшего развития в веб-разработке.
        </p>
      </div>
    </section>
  );
};
