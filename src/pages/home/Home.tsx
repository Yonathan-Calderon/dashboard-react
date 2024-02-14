import { userData } from "../../data.ts";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import "./home.scss";

const Home = () => {
  const { QuotationSent, InProgress, ClosedSale, Rejected } = userData.userData; 

  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...QuotationSent} />
      </div>
      <div className="box box3">
        <ChartBox {...InProgress} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...Rejected} />
      </div>
      <div className="box box6">
        <ChartBox {...ClosedSale} />
      </div>
    </div>
  );
};

export default Home;
