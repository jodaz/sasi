import * as React from 'react';
import Chart from 'chart.js';
import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core';

export default function (props) {
  const { title } = props;

  React.useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green"],
        datasets: [
          {
            label: title,
            data: [12, 19, 3, 5],
            backgroundColor: [
              "Red",
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange"
            ],
            borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            borderWidth: 1
          }
        ]
      }
    });
  });

  return (
    <Card>
      <CardContent>
        <Typography component="h5" variant="h5">
          {title}
        </Typography>
        <canvas id="myChart" width="400" height="400" />
      </CardContent>
    </Card>
  );
}
