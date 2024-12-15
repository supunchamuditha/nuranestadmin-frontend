import OverviewCard from "./Overviewcard"

function OverviewCrads() {
  return (
    <div className="grid grid-cols-1 bg-white gap-4 p-8 rounded-lg shadow-md">
        <p className="text-2xl font-medium">Overview</p>
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <OverviewCard title="New Accounts" value="20" isIncrease={true} />
            <OverviewCard title="Pending Psychologists" value="3" isIncrease={true} />
            <OverviewCard title="Total Appointments" value="120" isIncrease={true} />
            <OverviewCard title="Total Transactions" value="50" isIncrease={false} />
          </div>
    </div>
  )
}

export default OverviewCrads