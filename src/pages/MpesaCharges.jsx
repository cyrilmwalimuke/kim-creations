import React from 'react'

export default function MpesaCharges() {
  return (
    <div>
          <section>
    <h2 className="text-2xl font-semibold mt-4">Understanding M-Pesa Charges</h2>
    <p className="mt-2">
      M-Pesa is Kenya’s most popular mobile money service, enabling millions of users to send, receive, and transact with ease. However, knowing the transaction costs is essential for efficient budgeting and financial planning.
    </p>
  </section>
  
  <section>
    <h2 className="text-2xl font-semibold mt-4">Latest M-Pesa Transaction Fees</h2>
    <p className="mt-2">M-Pesa charges vary based on the transaction type, amount, and recipient. Below is a breakdown of the latest fees:</p>
  </section>

  <section>
    <h3 className="text-xl font-semibold mt-4">Sending Money (Person to Person - P2P)</h3>
    <table className="w-full border-collapse border border-gray-300 mt-2">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Amount (KSh)</th>
          <th className="border p-2">Registered Users (Fee)</th>
          <th className="border p-2">Unregistered Users (Fee)</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["1 - 100", "Free", "Not allowed"],
          ["101 - 500", "7 KSh", "45 KSh"],
          ["501 - 1,000", "15 KSh", "49 KSh"],
          ["1,001 - 1,500", "26 KSh", "59 KSh"],
          ["1,501 - 2,500", "41 KSh", "74 KSh"],
          ["2,501 - 3,500", "56 KSh", "112 KSh"],
          ["3,501 - 5,000", "61 KSh", "132 KSh"],
        ].map((row, index) => (
          <tr key={index} className="border">
            {row.map((cell, i) => (
              <td key={i} className="border p-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </section>

  <section>
    <h3 className="text-xl font-semibold mt-4">Withdrawal Charges (Agent Withdrawal)</h3>
    <table className="w-full border-collapse border border-gray-300 mt-2">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Amount (KSh)</th>
          <th className="border p-2">Fee (KSh)</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["1 - 100", "Free"],
          ["101 - 500", "27"],
          ["501 - 1,000", "28"],
          ["1,001 - 1,500", "28"],
          ["1,501 - 2,500", "28"],
          ["2,501 - 3,500", "50"],
          ["3,501 - 5,000", "67"],
        ].map((row, index) => (
          <tr key={index} className="border">
            {row.map((cell, i) => (
              <td key={i} className="border p-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </section>

  <section>
    <h3 className="text-xl font-semibold mt-4">How to Reduce M-Pesa Transaction Costs</h3>
    <ul className="list-disc pl-6 mt-2">
      <li>Use Free Transfer Options – Transactions below <strong>KSh 100</strong> are free for registered users.</li>
      <li>Withdraw in Bulk – Instead of multiple small withdrawals, withdraw larger amounts to minimize fees.</li>
      <li>Use PayBill for Businesses – If you own a business, opting for <strong>Lipa na M-Pesa</strong> can reduce transaction costs.</li>
      <li>Leverage M-Pesa Super Apps – Safaricom often introduces promotions for app users.</li>
    </ul>
  </section>

  <section>
    <h3 className="text-xl font-semibold mt-4">Final Thoughts</h3>
    <p className="mt-2">
      M-Pesa is a game-changer in mobile money transactions, but understanding its fees can help you save costs. Always check for updates from <strong>Safaricom</strong> as rates may change over time.
    </p>
    <p className="mt-2">For more details, visit the official <strong>Safaricom M-Pesa Tariff Page</strong> or dial <strong>*234#</strong> on your phone.</p>
  </section>
      <footer className="mt-6 text-center text-gray-600">🚀 Stay updated and transact wisely!</footer>
    </div>
  )
}
