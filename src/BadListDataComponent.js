import { dataSmall } from "./utils/data";

export function BadListDataComponent() {
  function renderRow(item) {
    return (
      <div key={item.id} className="row">
        <div className="content">
          <div>{item.name}</div>
          <div>{item.text}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Bad List Data</h2>
      {dataSmall.map(renderRow)}
    </div>
  );
}