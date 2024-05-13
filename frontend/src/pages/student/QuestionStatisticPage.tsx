import React from "react";
import { Heading, Progress } from "@chakra-ui/react";

interface BarGraphProps {
  data: { label: string; value: number; answer: string }[];
}

const BarGraph: React.FC<BarGraphProps> = ({ data }) => {
  // Find the maximum value
  const max = Math.max(...data.map((item) => item.value));

  const getColor = (label: string) => {
    switch (label) {
      case "Deoxyribonucleic acid":
        return "blue";
      case "Dehydrogenated Acid":
        return "red";
      case "Dinitroamylase":
        return "yellow";
      case "Denaturedamylase":
        return "green";
      default:
        return "black";
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {data.map((item) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: `${(item.value / max) * 100}%`,
              minWidth: "20px",
              height: "20px",
              backgroundColor: getColor(item.label),
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          ></div>
          <span>{item.answer}</span>
        </div>
      ))}
    </div>
  );
};

const QuestionStatisticPage: React.FC = () => {
  const data = [
    { label: "Deoxyribonucleic Acid", value: 40, answer: "Option A" },
    { label: "Dehydrogenated Acid", value: 30, answer: "Option B" },
    { label: "Dinitroamylase", value: 20, answer: "Option C" },
    { label: "Denaturedamylase", value: 10, answer: "Option D" },
  ];

  // Placeholder progress value
  const placeholderProgress = 50;

  return (
    <div style={{ width: "33%", margin: "0 auto", textAlign: "center" }}>
      <Progress
        value={placeholderProgress}
        colorScheme="blue"
        size="lg"
        mb={4}
      />
      <Heading as="h2" size="lg" mb={4}>
        Question 1: What is the capital of France?
      </Heading>
      <BarGraph data={data} />
    </div>
  );
};

export default QuestionStatisticPage;
