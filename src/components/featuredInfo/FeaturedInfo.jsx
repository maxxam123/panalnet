import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './featuredInfo.css';

export const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/orders/income');
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        setIncome(list);
        setPerc((list[1].total * 100) / list[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  console.log(income);

  return (
    <div className="featuredInfo">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Last Month $ {income[0]?.total}</span>
          <span className="featuredSub">This Month $ {income[1]?.total}</span>
          <span className="test">compared with last Month</span>
          <span className="featuredMoneyRate">
            {Math.floor(perc)}
            {''}%
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,41</span>
          <span className="featuredMoneyRate">
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Costs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,41</span>
          <span className="featuredMoneyRate">
            21.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};
