import { Link } from "react-router-dom";
const StudentsProfile = () => {
  return (
    <section>
      <Link
        className="no-underline text-[0.8rem] text-[#a9a9a9] font-medium block ml-2.5 mt-2.5 mb-8"
        to="/Home"
      >
        <span> &#8592;</span> <span>Voltar</span>
      </Link>
      <div className="max-w-[1200px] px-5 mx-auto">
        <div className="max-w-[1000px] items-center">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[300px] max-h-[300px]">
                <h1>Foto</h1>
                <img
                  
                  alt=""
                  className="w-full h-[200px] object-cover mb-2 rounded-[20px]"
                />
              </figure>

              <div>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Student name
                </h3>
                <h2>
                  Email
                </h2>
                <h2>
                  Gênero
                </h2>
              </div>
            </div>
            <div className="">
              <div className="mt-[30px] border-b border-solid border-[#0066ff34]">
                <h3
                  className={
                    "py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold"
                  }
                >
                  Aulas Marcadas
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
                        Professor: Natan Balthazar
                      </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                    Desenvolvimento
                    </p>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                      <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        07-04-2010 - 13-09-2014
                      </span>
                      <p className="text-[16px] leading-6 font-medium text-textColor">
                        Professor: Gabriel Padrão
                      </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Banco de Dados
                    </p>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                      <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        07-04-2010 - 13-09-2014
                      </span>
                      <p className="text-[16px] leading-6 font-medium text-textColor">
                        Professor: Gabriel Padrão
                      </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Banco de Dados
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
        </div>
        </div>
      </div>
    </section>
  )
};

export default StudentsProfile;
