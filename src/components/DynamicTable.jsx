import React, { useState, useEffect } from "react";

const DynamicTable = () => {
  const [activeTab, setActiveTab] = useState("gainers"); // Default tab
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  

  // Fetch data dynamically based on active tab
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let apiUrl = "";
        switch (activeTab) {
          case "gainers":
            apiUrl =
              "https://webapi.niftytrader.in/webapi/symbol/top-gainers-data";
            break;
          case "losers":
            apiUrl =
              "https://webapi.niftytrader.in/webapi/symbol/top-losers-data"; // Replace with actual endpoint for losers
            break;
          case "active":
            apiUrl =
              "https://webapi.niftytrader.in/webapi/symbol/most-active-data"; // Replace with actual endpoint for most active
            break;
          default:
            apiUrl =
              "https://webapi.niftytrader.in/webapi/symbol/top-gainers-data";
        }

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch data.");
        const data = await response.json();

        // Update table data with topGainers
        if (data.result === 1 && data.resultData) {
          setTableData(data.resultData.topGainers); // Set topGainers data
        } else {
          throw new Error("Invalid data structure.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab]); // Re-fetch when activeTab changes

  // Render table rows dynamically
  const renderTableRows = () => {
    return tableData.map((item, index) => (
      <tr key={index} className="border-b">
        <td className="py-3 px-2">{item.symbol_name || "N/A"}</td>
        <td className="py-3 px-2 text-right">{item.today_open || "N/A"}</td>
        <td className="py-3 px-2 text-right">{item.today_high || "N/A"}</td>
        <td className="py-3 px-2 text-right">{item.today_low || "N/A"}</td>
        <td className="py-3 px-2 text-right">{item.today_close || "N/A"}</td>
        <td className="py-3 px-2 text-right">{item.change_value || "N/A"}</td>
        <td className="py-3 px-2 text-right">{item.change_percent || "N/A"}</td>
        <td className="py-3 px-2 text-right">{item.today_volume || "N/A"}</td>
      </tr>
    ));
  };

  return (
    <div>
      {/* Tab Controls */}
      <div className="flex justify-between border-b">
        {["Top Gainers", "Top Losers", "Most Active"].map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 ${
              activeTab === tab.toLowerCase().replace(" ", "")
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.toLowerCase().replace(" ", ""))}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Section */}
      <div className="mt-4">
        {isLoading ? (
          <p className="text-center">Loading data...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="overflow-auto rounded-lg border">
            <table className="min-w-full text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-2 text-left">Symbol</th>
                  <th className="py-3 px-2 text-right">Open</th>
                  <th className="py-3 px-2 text-right">High</th>
                  <th className="py-3 px-2 text-right">Low</th>
                  <th className="py-3 px-2 text-right">Close</th>
                  <th className="py-3 px-2 text-right">Change Value</th>
                  <th className="py-3 px-2 text-right">Change (%)</th>
                  <th className="py-3 px-2 text-right">Volume</th>
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicTable;
