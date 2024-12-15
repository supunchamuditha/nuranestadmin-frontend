const PaymentHistory = () => {
    const payments = [
      { method: "Visa", date: "2024/12/05", status: "Success" },
      { method: "Mastercard", date: "2024/12/06", status: "Failed" },
    ];
  
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="font-semibold mb-4">Payment History</h3>
        <ul>
          {payments.map((pay, index) => (
            <li
              key={index}
              className="flex justify-between p-2 border-b last:border-b-0"
            >
              <span>{pay.method}</span>
              <span>{pay.date}</span>
              <span className={`text-${pay.status === "Success" ? "green" : "red"}-500`}>
                {pay.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PaymentHistory;
  