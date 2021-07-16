import { List, AutoSizer } from "react-virtualized";
import { dataSmall } from "./utils/data";

export function GoodListDataComponentAutoSizer() {

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
      <AutoSizer>
        {({ height, width }) => {
          return (
            <List
              height={height}
              width={width}
              rowHeight={80}
              rowCount={dataSmall.length}
              rowRenderer={renderRow}
            />
          );
        }}
      </AutoSizer>
    </div>
  );
}