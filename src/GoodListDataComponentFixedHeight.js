import { List } from "react-virtualized";
import { dataSmall } from "./utils/data";

export function GoodListDataComponentFixedHeight() {

  function renderRow({ index, key, style }) {
    return (
      <div key={key} style={style} className="row">
        <div className="content">
          <div>{dataSmall[index].name}</div>
          <div>{dataSmall[index].text}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="list">
      <List
        className="good-list"
        height={600}
        rowCount={dataSmall.length}
        rowHeight={60}
        rowRenderer={renderRow}
        width={400}
      />
    </div>
  );
}