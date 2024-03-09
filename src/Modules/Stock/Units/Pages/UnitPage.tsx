import "./UnitPage.css";
import { TABLE_HEAD, TABLE_ROWS } from "./Consts";
import { useUnitPageViewModel } from "./Hooks";

const UnitPage = () => {
  const { paged, isLoading } = useUnitPageViewModel();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>{JSON.stringify(paged?.items)}</div>
      <h1>Unidades de Medida</h1>
      <div>
        <div className="unit-page-table-panel">
          <table className="unit-page-table">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="unit-page-table-thead-tr-th">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "unit-page-table-tbody-tr" : ""}
                >
                  <td className="unit-page-table-tbody-tr-td">{name}</td>
                  <td className="unit-page-table-tbody-tr-td">{job}</td>
                  <td className="unit-page-table-tbody-tr-td">{date}</td>
                  <td className="unit-page-table-tbody-tr-td">
                    <button className="unit-page-table-tbody-tr-td-button">
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UnitPage;
