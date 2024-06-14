import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
} from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 4567, amt: 2400 },
  { name: "Page C", uv: 200, pv: 1398, amt: 2400 },
  { name: "Page D", uv: 278, pv: 3908, amt: 2400 },
  { name: "Page E", uv: 189, pv: 4800, amt: 2400 },
  { name: "Page F", uv: 239, pv: 3800, amt: 2400 },
  { name: "Page G", uv: 349, pv: 4300, amt: 2400 },
];

const Chart = () => {
  const [leftArea, setLeftArea] = useState("");
  const [rightArea, setRightArea] = useState("");

  const callApi = async () => {
    if (leftArea === rightArea || rightArea === "") {
      setLeftArea("");
      setRightArea("");
      return;
    }

    alert(`Call API with ${leftArea} ${rightArea}`);
  };

  return (
    <>
      <h1>Left: {leftArea}</h1>
      <h1>Right: {rightArea}</h1>
      <LineChart
        width={600}
        height={300}
        data={data}
        onMouseDown={(e) => setLeftArea(e.activeLabel)}
        onMouseMove={(e) => leftArea && setRightArea(e.activeLabel)}
        onMouseUp={callApi}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" style={{ userSelect: "none" }} />
        <YAxis style={{ userSelect: "none" }} />
        <Tooltip />
        {leftArea && rightArea ? (
          <ReferenceArea x1={leftArea} x2={rightArea} strokeOpacity={0.3} />
        ) : null}
      </LineChart>
    </>
  );
};

export default Chart;
