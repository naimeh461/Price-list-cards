import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
  const marksArray =
    [
      { student_id: 1, name: "Alice", physics: 80, chemistry: 90, math: 85 },
      { student_id: 2, name: "Bob", physics: 70, chemistry: 80, math: 75 },
      { student_id: 3, name: "Charlie", physics: 90, chemistry: 85, math: 95 },
      { student_id: 4, name: "David", physics: 65, chemistry: 70, math: 80 },
      { student_id: 5, name: "Emily", physics: 75, chemistry: 85, math: 90 },
      { student_id: 6, name: "Frank", physics: 85, chemistry: 95, math: 80 },
      { student_id: 7, name: "Gina", physics: 95, chemistry: 85, math: 90 },
      { student_id: 8, name: "Henry", physics: 80, chemistry: 70, math: 65 },
      { student_id: 9, name: "Isabella", physics: 90, chemistry: 95, math: 95 },
      { student_id: 10, name: "Jacob", physics: 75, chemistry: 80, math: 70 },
      { student_id: 11, name: "Katie", physics: 85, chemistry: 75, math: 80 },
      { student_id: 12, name: "Liam", physics: 70, chemistry: 85, math: 75 },
    ];

    return (
      <div>
          <LineChart
          width={500}
          height={300}
          data={marksArray}
          >
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="physics" stroke="#8884d8"></Line>
          <Line dataKey="math" stroke="#82ca9d"></Line>
          <Line dataKey="chemistry"></Line>
          <Tooltip></Tooltip>
      </LineChart>
      </div>
  );
  
};

export default Dashboard;
