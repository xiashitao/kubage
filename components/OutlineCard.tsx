import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Content {
  label: string;
  value: string;
}

interface OutlinedCardProps {
  contentArray: Array<Content>;
}

export default function OutlinedCard(props: OutlinedCardProps) {
  return (
    <Card
      variant="outlined"
      style={{
        display: 'grid',
        gridTemplateColumns:
          props.contentArray.length > 4
            ? '1fr 1fr 1fr 1fr'
            : Array(props.contentArray.length).fill('1fr').join(' '),
        justifyContent: 'stretch',
        padding: '20px'
      }}
    >
      {props.contentArray.map((content, index) => (
        <CardContent key={index}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {content.label}
          </Typography>
          <Typography variant="h5" component="div">
            {content.value}
          </Typography>
        </CardContent>
      ))}
    </Card>
  );
}
