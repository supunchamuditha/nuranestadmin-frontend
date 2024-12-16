
const OverviewCard = ({ title, value ,isIncrease}) => {
    return (
      <div className="bg-white rounded-lg  p-4">

        <h3 className="text-m font-medium">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-m font-bold">{value}</span>
          <span className={`text-sm ${isIncrease ? "text-green-500" : "text-red-500"}`}>
            {isIncrease ? "▲" : "▼"}
          </span>
        </div>
      </div>
    );
  };
  
  export default OverviewCard;


  