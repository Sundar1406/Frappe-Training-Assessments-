const jsonQuery = {
  query: [
    {
      code: "Sukupuoli",
      selection: {
        filter: "item",
        values: ["SSS", "1", "2"]
      }
    }
  ],
  response: {
    format: "json-stat2"
  }
};

const getData = async () => {
  const url = "https://pxdata.stat.fi:443/PxWeb/api/v1/en/StatFin/evaa/statfin_evaa_pxt_12i9.px";

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" }, // ✅ Fix
    body: JSON.stringify(jsonQuery)
  });

  if (!res.ok) {
    console.error("Failed to fetch data");
    return;
  }

  const data = await res.json();
  return data;
};

const buildChart = async () => {
  const data = await getData();
  if (!data) return;

  const metricLabels = Object.values(data.dimension.Tiedot.category.label); // e.g., "Candidates"
  const yearLabels = Object.values(data.dimension.Vuosi.category.label);
  const genderLabels = Object.values(data.dimension.Sukupuoli.category.label);
  const values = data.value;

  const genderCount = genderLabels.length;
  const yearCount = yearLabels.length;
  const metricCount = metricLabels.length;

  // Assuming Tiedot is last (fastest-changing), compute correct indexing
  const datasets = genderLabels.map((gender, gIndex) => {
    const genderData = [];

    for (let y = 0; y < yearCount; y++) {
      const index = gIndex + y * genderCount;
      genderData.push(values[index]);
    }

    return {
      name: gender,
      values: genderData.reverse() // Optional
    };
  });

  const chartData = {
    labels: yearLabels.reverse(), // Optional
    datasets: datasets
  };

  new frappe.Chart("#chart", {
    title: "MPs in Parliamentary Elections by Gender and Year",
    data: chartData,
    type: "line",
    height: 400,
    colors: [
  '#f54b4b', 
  '#ffde55', 
  '#006288',
],
// barOptions: {
//   stacked: 1
// },
lineOptions: {
  hideDots:1,
  regionFill: 1
}
  });
};

buildChart();

















// const jsonQuery = {
//   query: [
//     {
//       code: "Puolue",
//       selection: {
//         filter: "item",
//         values: [
//           "SSS",
//           "03",
//           "02",
//           "01",
//           "04",
//           "05",
//           "06",
//           "07",
//           "08",
//           "09",
//           "99"
//         ]
//       }
//     },
//     {
//       code: "Valintatieto",
//       selection: {
//         filter: "item",
//         values: ["SSS"]
//       }
//     }
//   ],
//   response: {
//     format: "json-stat2"
//   }
// };

// const getData = async () => {
//   const url = "https://pxdata.stat.fi:443/PxWeb/api/v1/en/StatFin/evaa/statfin_evaa_pxt_13st.px";

//   const res = await fetch(url, {
//     method: "POST",
//     headers: { "content-type": "application/json" }, // ✅ Fix header value
//     body: JSON.stringify(jsonQuery)
//   });

//   if (!res.ok) {
//     console.error("Failed to fetch data");
//     return;
//   }

//   const data = await res.json();
//   return data;
// };

// const buildChart = async () => {
//   const data = await getData();

//   if (!data) return;

//   const parties = Object.values(data.dimension.Puolue.category.label); // ✅ Use correct dimension
//   const years = Object.values(data.dimension.Vuosi.category.label);
//   const values = data.value;

//   const partyCount = parties.length;
//   const yearCount = years.length;

//   const datasets = parties.map((party, index) => {
//     const partySupport = [];

//     for (let i = 0; i < yearCount; i++) {
//       partySupport.push(values[i * partyCount + index]);
//     }

//     return {
//       name: party,
//       values: partySupport.reverse() // Optional: reverse for chronological order
//     };
//   });

//   const chartData = {
//     labels: years.reverse(), // reverse if values were reversed
//     datasets: datasets
//   };

//   new frappe.Chart("#chart", {
//     title: "MPs in Parliamentary Elections by Year",
//     data: chartData,
//     type: "axis-mixed",
//     height: 400,
//     colors: ["#7cd6fd", "#743ee2", "#5e64ff", "#ff5858", "#ffa3ef"]
//   });
// };

// buildChart();
