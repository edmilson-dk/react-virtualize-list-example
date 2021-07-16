import { List, CellMeasurer, CellMeasurerCache } from "react-virtualized";
import { dataSmall } from "./utils/data";

export function GoodListDataComponentCellMeasurer() {
  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100
  });

  function renderRow({ index, key, style, parent }) {
    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}>
        <div style={style} className="row">
          <div className="content">
            <div>{dataSmall[index].name}</div>
            <div>{dataSmall[index].text}</div>
          </div>
        </div>
      </CellMeasurer>
    );
  }

  return (
    <div className="list">
      <List
        className="good-list"
        height={600}
        rowCount={dataSmall.length}
        deferredMeasurementCache={cache}
        rowHeight={cache.rowHeight}
        rowRenderer={renderRow}
        width={400}
      />
    </div>
  );
}