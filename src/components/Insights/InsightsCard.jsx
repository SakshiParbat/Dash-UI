const InsightsCard = ({ title, value }) => {
  return (
    <div className="bg-gray-800 text-white p-3 rounded-xl text-sm">
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className="text-xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default InsightsCard;