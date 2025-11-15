import React, { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Button from "../components/ui/Button.jsx";
import AppIcon from "../components/AppIcon.jsx";

// register chart.js components once
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Turnover() {
  // Business inputs
  const [data, setData] = useState({
    products: 500,
    avgSale: 150,
    frequency: 10,
    margin: 25,
    costs: 15,
  });

  const reportRef = useRef(null);

  // Derived values (memoized for performance)
  const { monthlyRevenue, annualRevenue, grossProfit, operatingCosts, netProfit, profitMargin } =
    useMemo(() => {
      const monthlyRevenue = data.products * data.avgSale * data.frequency;
      const annualRevenue = monthlyRevenue * 12;
      const grossProfit = (annualRevenue * data.margin) / 100;
      const operatingCosts = (annualRevenue * data.costs) / 100;
      const netProfit = grossProfit - operatingCosts;
      const profitMargin = annualRevenue > 0 ? (netProfit / annualRevenue) * 100 : 0;

      return { monthlyRevenue, annualRevenue, grossProfit, operatingCosts, netProfit, profitMargin };
    }, [data]);

  // Synthetic monthly series (seasonality)
  const monthlyData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      // seasonality factor
      const seasonalFactor = Math.sin((i * Math.PI) / 6) * 0.2 + 1;
      return Math.round(monthlyRevenue * seasonalFactor);
    });
  }, [monthlyRevenue]);

  // Chart data objects
  const lineChartData = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "Monthly Revenue",
        data: monthlyData,
        borderColor: "rgb(59,130,246)",
        backgroundColor: "rgba(59,130,246,0.08)",
        borderWidth: 3,
        fill: true,
        tension: 0.35,
        pointRadius: 2,
      },
    ],
  };

  const barChartData = {
    labels: ["Revenue", "Gross Profit", "Operating Costs", "Net Profit"],
    datasets: [
      {
        label: "Amount (₹)",
        data: [annualRevenue, grossProfit, operatingCosts, netProfit],
        backgroundColor: [
          "rgba(59,130,246,0.9)",
          "rgba(34,197,94,0.9)",
          "rgba(239,68,68,0.9)",
          "rgba(168,85,247,0.9)",
        ],
        borderColor: ["rgb(59,130,246)", "rgb(34,197,94)", "rgb(239,68,68)", "rgb(168,85,247)"],
        borderWidth: 2,
      },
    ],
  };

  const doughnutData = {
    labels: ["Profit Margin", "Operating Costs", "Other"],
    datasets: [
      {
        data: [data.margin, data.costs, Math.max(0, 100 - data.margin - data.costs)],
        backgroundColor: ["rgba(34,197,94,0.9)", "rgba(239,68,68,0.9)", "rgba(156,163,175,0.85)"],
        borderColor: ["rgb(34,197,94)", "rgb(239,68,68)", "rgb(156,163,175)"],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: {
        callbacks: {
          label: function (context) {
            const val = context.raw || 0;
            return `₹${Number(val).toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            // format: ₹X.L (L = lakhs)
            return "₹" + (value / 100000).toFixed(1) + "L";
          },
        },
      },
    },
  };

  // Exports
  const exportToPDF = () => {
    if (reportRef.current) {
      // uses browser print; you can implement html2pdf or similar if you prefer
      window.print();
    }
  };

  const exportToExcel = () => {
    const csvContent = [
      ["Spaceway Turnover Report"],
      [],
      ["Inputs:"],
      ["Products", data.products],
      ["Average Sale (₹)", data.avgSale],
      ["Sales per Month", data.frequency],
      ["Profit Margin (%)", data.margin],
      ["Operating Costs (%)", data.costs],
      [],
      ["Results:"],
      ["Monthly Revenue (₹)", monthlyRevenue.toLocaleString()],
      ["Annual Revenue (₹)", annualRevenue.toLocaleString()],
      ["Gross Profit (₹)", grossProfit.toLocaleString()],
      ["Net Profit (₹)", netProfit.toLocaleString()],
      ["Profit Margin (%)", profitMargin.toFixed(2)],
    ]
      .map((r) => r.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "spaceway_turnover_report.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Input fields configuration (keeps UI code minimal)
  const fields = [
    { key: "products", label: "Number of Products", max: 50000, step: 10, unit: "products" },
    { key: "avgSale", label: "Average Sale Value", max: 5000, step: 5, unit: "₹" },
    { key: "frequency", label: "Sales per Month", max: 1000, step: 1, unit: "sales" },
    { key: "margin", label: "Profit Margin", max: 100, step: 1, unit: "%" },
    { key: "costs", label: "Operating Costs", max: 50, step: 1, unit: "%" },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
      {/* <Navbar /> */}

      <div className="pt-20 pb-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" ref={reportRef}>
          {/* Header */}
          <div className="mb-12 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-4xl font-bold md:text-5xl">
              <span>Know Your</span>{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">Turnover</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-3xl mx-auto text-xl text-muted-foreground">
              Advanced business analytics and turnover calculator with comprehensive insights, visualizations, and exportable reports.
            </motion.p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Input Panel */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="p-8 border shadow-xl bg-card dark:bg-card/90 rounded-3xl border-border">
              <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary">
                  <AppIcon name="calculator" size={18} />
                </span>
                <span>Business Metrics</span>
              </h2>

              <div className="space-y-6">
                {fields.map((field) => (
                  <div key={field.key} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">{field.label}</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={data[field.key]}
                          onChange={(e) =>
                            setData((prev) => ({ ...prev, [field.key]: Number(e.target.value) || 0 }))
                          }
                          className="w-24 px-2 py-1 text-sm border rounded bg-input border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <span className="text-sm font-medium text-primary">{field.unit}</span>
                      </div>
                    </div>

                    <input
                      type="range"
                      min="1"
                      max={field.max}
                      step={field.step}
                      value={data[field.key]}
                      onChange={(e) => setData((prev) => ({ ...prev, [field.key]: Number(e.target.value) }))}
                      className="w-full h-2 rounded-lg accent-primary"
                      style={{
                        background: `linear-gradient(to right, var(--tw-color-primary, #2563eb) 0%, var(--tw-color-primary, #2563eb) ${(data[field.key] / field.max) * 100}%, #e5e7eb ${(data[field.key] / field.max) * 100}%, #e5e7eb 100%)`,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="pt-6 mt-8 border-t border-border">
                <div className="flex gap-3">
                  <Button onClick={exportToExcel} variant="outline" className="flex-1">Export Excel</Button>
                  <Button onClick={exportToPDF} variant="outline" className="flex-1">Export PDF</Button>
                </div>
              </div>
            </motion.div>

            {/* Results Panel */}
            <div className="space-y-8 lg:col-span-2">
              {/* Key Metrics */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {[
                  { label: "Monthly Revenue", value: monthlyRevenue, icon: "trendingUp", color: "blue", isPercentage: false },
                  { label: "Annual Revenue", value: annualRevenue, icon: "barChart3", color: "green", isPercentage: false },
                  { label: "Net Profit", value: netProfit, icon: "dollar-sign", color: "purple", isPercentage: false },
                  { label: "Profit Margin", value: profitMargin, icon: "percent", color: "orange", isPercentage: true },
                ].map((metric, idx) => (
                  <motion.div key={metric.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} className="p-6 border shadow-lg bg-card dark:bg-card/90 rounded-2xl border-border">
                    <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-${metric.color}-100`}>
                      <AppIcon name={metric.icon} size={18} />
                    </div>
                    <div className="mb-1 text-2xl font-bold">
                      {metric.isPercentage ? `${metric.value.toFixed(1)}%` : `₹${(metric.value / 100000).toFixed(1)}L`}
                    </div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Charts */}
              <div className="grid gap-8 lg:grid-cols-2">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="p-6 border shadow-lg bg-card dark:bg-card/90 rounded-2xl border-border">
                  <h3 className="mb-4 text-lg font-semibold">Revenue Trend</h3>
                  <Line data={lineChartData} options={chartOptions} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 border shadow-lg bg-card dark:bg-card/90 rounded-2xl border-border">
                  <h3 className="mb-4 text-lg font-semibold">Margin Distribution</h3>
                  <Doughnut data={doughnutData} />
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="p-6 border shadow-lg bg-card dark:bg-card/90 rounded-2xl border-border">
                <h3 className="mb-4 text-lg font-semibold">Financial Overview</h3>
                <Bar data={barChartData} options={chartOptions} />
              </motion.div>

              {/* Insights */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-8 border rounded-2xl border-border bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-md">
                    <AppIcon name="lightbulb" size={18} />
                  </span>
                  <h3 className="text-2xl font-bold">AI Insights & Recommendations</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                      <AppIcon name="barChart3" size={18} className="mt-1" />
                      <div>
                        <h4 className="mb-1 font-semibold">Growth Opportunity</h4>
                        <p className="text-sm text-muted-foreground">Increasing average sale by 20% could boost annual profit by ₹{((annualRevenue * 0.2 * data.margin / 100) / 100000).toFixed(1)}L</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                      <AppIcon name="target" size={18} className="mt-1" />
                      <div>
                        <h4 className="mb-1 font-semibold">Efficiency Tip</h4>
                        <p className="text-sm text-muted-foreground">Your current profit margin of {profitMargin.toFixed(1)}% is {profitMargin > 15 ? "excellent" : profitMargin > 10 ? "good" : "below average"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                      <AppIcon name="package" size={18} className="mt-1" />
                      <div>
                        <h4 className="mb-1 font-semibold">Scale Impact</h4>
                        <p className="text-sm text-muted-foreground">Doubling product count could potentially achieve ₹{((annualRevenue * 2) / 100000).toFixed(1)}L annual revenue</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                      <AppIcon name="dollar-sign" size={18} className="mt-1" />
                      <div>
                        <h4 className="mb-1 font-semibold">Cost Optimization</h4>
                        <p className="text-sm text-muted-foreground">Reducing operating costs by 5% could increase net profit by ₹{((annualRevenue * 0.05) / 100000).toFixed(1)}L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
