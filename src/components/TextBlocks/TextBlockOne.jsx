import "./textblock.scss";
import { CgSandClock } from "react-icons/cg";

export const TextBlockOne = () => {
  return (
    <div className="container">
    <div className="text-blocks">
      <div className="text-block">
        <div className="textblock-part">
          <p>Часть 1</p>
          <div className="textblock-duration">
            <CgSandClock />
            <p>Длительность 1 мес.</p>
          </div>
        </div>
        <h2 className="textblock-title">Возрождение Голоса</h2>

        <ul className="textblock-list">
          <li>Вступление лекция</li>
          <li>Сила потокового пения /лекция</li>
          <li>Медитация через пение & Совместное звучание</li>
          <li>Запуск тела и дыхания для звучания</li>
          <li>Энергетическое пение</li>
          <li>Мантра-медитация - коды</li>
          <li>Древние чаши. Крийя-активация энергии</li>
          <li>Освобождение тела. Открытие звучания телом</li>
          <li>Активация живота и груди. Потоковое пение</li>
          <li>Крии Голоса</li>
        </ul>
      </div>
      <div className="text-block">
        <div className="textblock-part">
          <p>Часть 2</p>
          <div className="textblock-duration">
            <CgSandClock />
            <p>Длительность 1 мес.</p>
          </div>
        </div>
        <h2 className="textblock-title">СВОБОДА ГОЛОСА</h2>

        <ul className="textblock-list">
          <li>Вокальный диапазон</li>
          <li>Технология ритма</li>
          <li>Сила Голоса</li>
          <li>Основа импровизации</li>
          <li>Эмоциональное пение/сексуальная энергия</li>
          <li>Медитация одного звука</li>
          <li>Распевки для укрепления голоса</li>
          <li>Импровизация с музыкальными инструментами</li>
          <li>Распаковка своей уникальности</li>
          <li>Прямой эфир / вопросы-ответы</li>
        </ul>
      </div>
      </div>
    </div>
  );
};
