import { Link } from "react-router-dom";
import db from "../../server/database/db.json";
import TeachersAvailableHours from "../../components/Teacher/TeachersAvailableHours";

const TeachersProfile = () => {
  const url = window.location.href;
  const partesDaURL = url.split("/");
  const numeroStr = partesDaURL.pop();
  const userId = parseInt(numeroStr) - 1;

  const idDoUser = userId + 1;

  return (
    <section>
      <Link
        className="no-underline text-[0.8rem] text-[#a9a9a9] font-medium block ml-2.5 mt-2.5 mb-8"
        to="/"
      >
        <span> &#8592;</span> <span>Voltar</span>
      </Link>
      <div className="max-w-[1200px] px-5 mx-auto">
        <div className="max-w-[1000px] items-center ">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 justify-between">
              <div className="flex">
                <figure className="max-w-[300px] max-h-[300px]">
                  <img
                    src={db.users[userId].profilePicture}
                    alt=""
                    className="w-[200px] h-[200px] object-cover mb-2 rounded-full shadow-2xl"
                  />
                  <p className="text-center mt-5">Professor</p>
                </figure>

                <div className="flex justify-between items-center gap-10">
                  <div className="ml-8 items-center">
                    <h3 className="text-headingColor text-[22px] leading-9 font-bold">
                      {db.users[userId].name}
                    </h3>
                    <h2 className="pt-9 pb-1">
                      <strong className="text-headingColor">Email:</strong>{" "}
                      {db.users[userId].email}{" "}
                    </h2>
                    <h2>
                      <strong className="text-headingColor">Gênero:</strong>{" "}
                      {db.users[userId].gender}
                    </h2>
                  </div>
                </div>
              </div>

              {Number(localStorage.getItem("id")) == Number(idDoUser) ? (
                <TeachersAvailableHours />
              ) : (
                <div></div>
              )}
            </div>
            <div className="">
              <div className="mt-[30px] border-b border-solid border-[#0066ff34]">
                <h3
                  className={
                    "py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold"
                  }
                >
                  Agenda de Aulas Marcadas
                </h3>
              </div>
              <div>
                <ul className="pt-4 md:p-5">
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                      <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        07-04-2010 - 13-09-2014
                      </span>
                      <p className="text-[16px] leading-6 font-medium text-textColor">
                        Aluno: Natan Balthazar
                      </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Assunto: Desenvolvimento
                    </p>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                      <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        07-04-2010 - 13-09-2014
                      </span>
                      <p className="text-[16px] leading-6 font-medium text-textColor">
                        Aluno: Gabriel Padrão
                      </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Assunto: Banco de Dados
                    </p>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                      <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        07-04-2010 - 13-09-2014
                      </span>
                      <p className="text-[16px] leading-6 font-medium text-textColor">
                        Aluno: Gabriel Padrão
                      </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Assunto: Banco de Dados
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default TeachersProfile;
