import ProductionOverview from './ProductionOverview';
import HistoricalProduction from './HistoricalProduction';
import PlantStatus from './PlantStatus';
import PeakHourRankings from './PeakHourRankings';
import PowerNormalization from './PowerNormalization';

const Dashboard = () => {
  return (
    <div className="w-full max-w-full mx-auto p-4 sm:p-5 lg:p-0 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
        <div className="flex items-stretch">
          <div className="flex-1 bg-white p-4 rounded-lg shadow-md col-span-2 overflow-auto" style={{ maxHeight: '350px', maxWidth: '1050px' }}>
            <ProductionOverview />
          </div>
        </div>
        <div className="flex items-stretch">
          <div className="flex-1 bg-white p-4 rounded-lg shadow-md col-span-2 overflow-auto" style={{ maxHeight: '350px', maxWidth: '1050px' }}>
            <HistoricalProduction />
          </div>
        </div>
        <div className="flex items-stretch">
          <div className="flex-1 bg-white p-4 rounded-lg shadow-md col-span-2 lg:col-span-1">
            <PlantStatus />
          </div>
        </div>
        <div className="flex items-stretch">
          <div className="flex-1 bg-white p-4 rounded-lg shadow-md col-span-2 lg:col-span-1">
            <PeakHourRankings />
          </div>
        </div>
        {/* <div className="flex items-stretch">
          <div className="flex-1 bg-white p-4 rounded-lg shadow-md col-span-2 lg:col-span-1">
            <PowerNormalization />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
