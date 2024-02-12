import { Link } from "react-router-dom";
import "./chartBox.scss";
import { userData } from "../../data.ts"; 
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  const { chartBoxUser, chartBoxProduct, chartBoxConversion, chartBoxRevenue } = userData.userData;

  let data = null;

  switch (props.title) {
    case "Total Users":
      data = chartBoxUser;
      break;
    case "Total Products":
      data = chartBoxProduct;
      break;
    case "Total Revenue":
      data = chartBoxRevenue;
      break;
    case "Total Ratio":
      data = chartBoxConversion;
      break;
    default:
      
      break;
  }

  if (!data) {
    return <div className="chartBox">Data not available for {props.title}</div>;
  }

  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={data.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{data.number}</h1>
        <Link to="/" style={{ color: data.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={data.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={data.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: data.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {data.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
